// ---- Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// ---- PDF.js setup
const PDF_URL = "./assets/portfolio.pdf";

let pdfDoc = null;
let currentScale = 1.0; // 1.0 = 100%
const viewer = document.getElementById("pdfViewer");
const loadingEl = document.getElementById("pdfLoading");
const errorEl = document.getElementById("pdfError");
const zoomLabel = document.getElementById("zoomLabel");

function setZoomLabel() {
  zoomLabel.textContent = `${Math.round(currentScale * 100)}%`;
}

async function renderAllPages() {
  // Clear previously rendered pages (except loading/error)
  const existing = viewer.querySelectorAll(".pdf__page");
  existing.forEach(el => el.remove());

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
    // Tell pdf.js where the worker is
    pdfjsLib.GlobalWorkerOptions.workerSrc =
      "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.4.168/pdf.worker.min.js";

    const task = pdfjsLib.getDocument({
      url: PDF_URL,
      // Improves large PDF performance
      disableAutoFetch: false,
      disableStream: false
    });

    pdfDoc = await task.promise;

    loadingEl.style.display = "none";
    errorEl.hidden = true;

    setZoomLabel();
    await renderAllPages();
  } catch (err) {
    console.error(err);
    loadingEl.style.display = "none";
    errorEl.hidden = false;
  }
}

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

// Load when user reaches the portfolio section (lazy load)
const workSection = document.getElementById("work");
const observer = new IntersectionObserver((entries) => {
  for (const e of entries) {
    if (e.isIntersecting) {
      observer.disconnect();
      loadPdf();
      break;
    }
  }
}, { threshold: 0.15 });

observer.observe(workSection);
