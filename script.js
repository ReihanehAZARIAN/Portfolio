// script.js — GitHub Pages-safe PDF viewer (works with /Portfolio/ base path)

document.getElementById("year").textContent = new Date().getFullYear();

// ---- Base path handling (important for GitHub Pages repo sites)
// Example site: https://reihanehazarian.github.io/Portfolio/
// BASE becomes "Portfolio"
const BASE = window.location.pathname.split("/").filter(Boolean)[0] || "";
const PDF_URL = (BASE ? `/${BASE}` : "") + "/assets/portfolio.pdf";

// ---- PDF.js state
let pdfDoc = null;
let currentScale = 1.0; // 1.0 = 100%

const viewer = document.getElementById("pdfViewer");
const loadingEl = document.getElementById("pdfLoading");
const errorEl = document.getElementById("pdfError");
const zoomLabel = document.getElementById("zoomLabel");

function setZoomLabel() {
  zoomLabel.textContent = `${Math.round(currentScale * 100)}%`;
}

function clearRenderedPages() {
  const existing = viewer.querySelectorAll(".pdf__page");
  existing.forEach((el) => el.remove());
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
    // PDF.js worker (must match your PDF.js version in index.html)
    pdfjsLib.GlobalWorkerOptions.workerSrc =
      "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.4.168/pdf.worker.min.js";

    const task = pdfjsLib.getDocument({
      url: PDF_URL,
      // Better behavior for large PDFs
      disableAutoFetch: false,
      disableStream: false,
      // Helpful if GitHub caches oddly
      withCredentials: false,
    });

    pdfDoc = await task.promise;

    loadingEl.style.display = "none";
    errorEl.hidden = true;

    setZoomLabel();
    await renderAllPages();
  } catch (err) {
    console.error("PDF load error:", err);
    loadingEl.style.display = "none";
    errorEl.hidden = false;
  }
}

// ---- Zoom controls
document.getElementById("zoomIn").addEventListener("click", async () => {
  if (!pdfDoc) return;
  currentScale = Math.min(2.0, currentScale + 0.1);
  setZoomLabel();
  await renderAllPages();
});

document.getElementById("zoomOut").addEventListener("click", async () => {
  if (!pdfDoc) return;
  currentScale = Math.max(0.7, currentScale - 0.1);
  setZoomLabel();
  await renderAllPages();
});

// ---- Lazy-load when portfolio section enters view
const workSection = document.getElementById("work");

const observer = new IntersectionObserver(
  (entries) => {
    for (const e of entries) {
      if (e.isIntersecting) {
        observer.disconnect();
        loadPdf();
        break;
      }
    }
  },
  { threshold: 0.15 }
);

observer.observe(workSection);
