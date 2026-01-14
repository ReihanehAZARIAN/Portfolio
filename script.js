// script.js — robust GitHub Pages PDF.js loader with on-screen debug

document.getElementById("year").textContent = new Date().getFullYear();

const viewer = document.getElementById("pdfViewer");
const loadingEl = document.getElementById("pdfLoading");
const errorEl = document.getElementById("pdfError");
const zoomLabel = document.getElementById("zoomLabel");

let pdfDoc = null;
let currentScale = 1.0;

// ---- Base path (GitHub Pages repo site)
// If your site is https://reihanehazarian.github.io/Portfolio/
// BASE = "Portfolio"
const BASE = window.location.pathname.split("/").filter(Boolean)[0] || "";
const PDF_URL = (BASE ? `/${BASE}` : "") + "/assets/portfolio.pdf";

// ---- Small helper to show errors to you (and still keep it minimal)
function showError(msg) {
  loadingEl.style.display = "none";
  errorEl.hidden = false;

  // Put the real reason inside the error box for debugging
  const p = errorEl.querySelector("p");
  if (p) p.textContent = msg;
}

function setZoomLabel() {
  if (zoomLabel) zoomLabel.textContent = `${Math.round(currentScale * 100)}%`;
}

function clearRenderedPages() {
  viewer.querySelectorAll(".pdf__page").forEach((el) => el.remove());
}

// Quick sanity check: fetch the PDF ourselves first
async function testFetchPdf() {
  const res = await fetch(PDF_URL, { cache: "no-store" });
  if (!res.ok) {
    throw new Error(`PDF fetch failed: ${res.status} ${res.statusText} (${PDF_URL})`);
  }
  const ct = res.headers.get("content-type") || "";
  // GitHub Pages usually returns application/pdf
  if (!ct.includes("pdf")) {
    // This catches cases like Git LFS pointer text file
    const text = await res.text();
    throw new Error(
      `PDF is not served as a PDF (content-type: ${ct}). First bytes: ${text.slice(0, 80)}`
    );
  }
}

async function renderAllPages() {
  clearRenderedPages();

  for (let pageNum = 1; pageNum <= pdfDoc.numPages; pageNum++) {
    const page = await pdfDoc.getPage(pageNum);
    const viewport = page.getViewport({ scale: currentScale });

    const pageWrap = document.createElement("div");
    pageWrap.className = "pdf__page";

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d", { alpha: false });

    canvas.width = Math.floor(viewport.width);
    canvas.height = Math.floor(viewport.height);

    pageWrap.appendChild(canvas);
    viewer.appendChild(pageWrap);

    await page.render({ canvasContext: ctx, viewport }).promise;
  }
}

async function loadPdf() {
  try {
    // 1) Ensure PDF.js is actually loaded
    if (!window.pdfjsLib) {
      throw new Error("PDF.js is not loaded. Check the <script src=...pdf.min.js> in index.html.");
    }

    // 2) Ensure the worker URL is correct and reachable
    pdfjsLib.GlobalWorkerOptions.workerSrc =
      "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.4.168/pdf.worker.min.js";

    // 3) Ensure the PDF is reachable and served as application/pdf
    await testFetchPdf();

    // 4) Load the PDF
    const task = pdfjsLib.getDocument({
      url: PDF_URL,
      disableStream: false,
      disableAutoFetch: false
    });

    pdfDoc = await task.promise;

    loadingEl.style.display = "none";
    errorEl.hidden = true;

    setZoomLabel();
    await renderAllPages();
  } catch (err) {
    console.error("PDF viewer error:", err);
    showError(`Couldn’t load the PDF here. Reason: ${err.message}`);
  }
}

// Zoom controls
document.getElementById("zoomIn")?.addEventListener("click", async () => {
  if (!pdfDoc) return;
  currentScale = Math.min(2.0, currentScale + 0.1);
  setZoomLabel();
  await renderAllPages();
});

document.getElementById("zoomOut")?.addEventListener("click", async () => {
  if (!pdfDoc) return;
  currentScale = Math.max(0.7, currentScale - 0.1);
  setZoomLabel();
  await renderAllPages();
});

// Lazy-load
const workSection = document.getElementById("work");
const observer = new IntersectionObserver(
  (entries) => {
    if (entries.some((e) => e.isIntersecting)) {
      observer.disconnect();
      loadPdf();
    }
  },
  { threshold: 0.15 }
);

if (workSection) observer.observe(workSection);
