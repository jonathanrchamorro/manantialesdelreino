// Copies the pdf.js worker that matches the installed react-pdf into public/,
// so the reader always uses a worker of the same version.
import { copyFileSync } from "node:fs";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const fromReactPdf = createRequire(require.resolve("react-pdf"));
const worker = fromReactPdf.resolve("pdfjs-dist/build/pdf.worker.min.mjs");
copyFileSync(worker, new URL("../public/pdf.worker.min.mjs", import.meta.url));
console.log("pdf.js worker copied to public/");
