"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import {
  ArrowLeftIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  DownloadIcon,
  ZoomInIcon,
  ZoomOutIcon,
} from "./Icons";

pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";

const MAX_PAGE_WIDTH = 860;
const ZOOM_STEPS = [0.6, 0.75, 0.9, 1, 1.25, 1.5, 1.75, 2, 2.5];

type Props = { slug: string; title: string; pdf: string; totalPages: number };

function storageKey(slug: string) {
  return `reader:${slug}:page`;
}

function readSavedPage(slug: string): number {
  try {
    const value = Number(window.localStorage.getItem(storageKey(slug)));
    return Number.isInteger(value) && value > 0 ? value : 1;
  } catch {
    return 1;
  }
}

export default function Reader({ slug, title, pdf, totalPages }: Props) {
  const [numPages, setNumPages] = useState(totalPages);
  const [page, setPage] = useState(() => readSavedPage(slug));
  const [pageDraft, setPageDraft] = useState(String(page));
  const [zoomIndex, setZoomIndex] = useState(ZOOM_STEPS.indexOf(1));
  const [stageWidth, setStageWidth] = useState(0);
  const stageRef = useRef<HTMLDivElement>(null);

  const goTo = useCallback(
    (target: number) => {
      const next = Math.min(Math.max(1, target), numPages || 1);
      setPage(next);
      setPageDraft(String(next));
      stageRef.current?.scrollTo({ top: 0 });
    },
    [numPages],
  );

  // Persist reading position per book (best effort).
  useEffect(() => {
    try {
      window.localStorage.setItem(storageKey(slug), String(page));
    } catch {
      /* storage unavailable: ignore */
    }
  }, [slug, page]);

  // Fit page to the available width.
  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const observer = new ResizeObserver(([entry]) => setStageWidth(entry.contentRect.width));
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Keyboard navigation.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement) return;
      if (e.key === "ArrowRight" || e.key === "PageDown") goTo(page + 1);
      if (e.key === "ArrowLeft" || e.key === "PageUp") goTo(page - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goTo, page]);

  const zoom = ZOOM_STEPS[zoomIndex];
  const pageWidth = stageWidth > 0 ? Math.floor(Math.min(stageWidth, MAX_PAGE_WIDTH) * zoom) : undefined;

  return (
    <div className="reader">
      <div className="reader-bar">
        <div className="reader-title">
          <Link href={`/libros/${slug}/`} aria-label="Volver al libro">
            <ArrowLeftIcon size={20} />
          </Link>
          <strong>{title}</strong>
        </div>
        <div className="reader-controls">
          <button className="icon-btn" onClick={() => goTo(page - 1)} disabled={page <= 1} aria-label="Página anterior">
            <ChevronLeftIcon />
          </button>
          <form
            className="page-input"
            onSubmit={(e) => {
              e.preventDefault();
              goTo(Number(pageDraft) || page);
            }}
          >
            <input
              inputMode="numeric"
              aria-label="Número de página"
              value={pageDraft}
              onChange={(e) => setPageDraft(e.target.value.replace(/\D/g, ""))}
              onBlur={() => goTo(Number(pageDraft) || page)}
            />
            <span>de {numPages}</span>
          </form>
          <button
            className="icon-btn"
            onClick={() => goTo(page + 1)}
            disabled={page >= numPages}
            aria-label="Página siguiente"
          >
            <ChevronRightIcon />
          </button>
          <button
            className="icon-btn hide-sm"
            onClick={() => setZoomIndex((i) => Math.max(0, i - 1))}
            disabled={zoomIndex === 0}
            aria-label="Reducir"
          >
            <ZoomOutIcon />
          </button>
          <button
            className="icon-btn hide-sm"
            onClick={() => setZoomIndex((i) => Math.min(ZOOM_STEPS.length - 1, i + 1))}
            disabled={zoomIndex === ZOOM_STEPS.length - 1}
            aria-label="Ampliar"
          >
            <ZoomInIcon />
          </button>
          <a href={pdf} download className="btn btn-primary">
            <DownloadIcon /> <span className="hide-sm">Descargar</span>
          </a>
        </div>
      </div>

      <div className="reader-stage" ref={stageRef}>
        <Document
          file={pdf}
          onLoadSuccess={({ numPages: n }) => {
            setNumPages(n);
            if (page > n) goTo(1);
          }}
          loading={<p className="reader-message">Abriendo el libro…</p>}
          error={
            <p className="reader-message">
              No se pudo abrir el libro aquí. <a href={pdf}>Ábrelo o descárgalo en PDF</a>.
            </p>
          }
        >
          {pageWidth && (
            <Page
              className="reader-page"
              pageNumber={page}
              width={pageWidth}
              renderTextLayer={false}
              renderAnnotationLayer={false}
              loading={<div style={{ width: pageWidth, height: pageWidth * 1.5, background: "#fff" }} />}
            />
          )}
        </Document>
      </div>
    </div>
  );
}
