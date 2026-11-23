"use client";

import dynamic from "next/dynamic";

// pdf.js only runs in the browser, so the reader is never pre-rendered.
const Reader = dynamic(() => import("./Reader"), {
  ssr: false,
  loading: () => <p className="reader-message">Cargando lector…</p>,
});

type Props = { slug: string; title: string; pdf: string; totalPages: number };

export default function ReaderLoader(props: Props) {
  return <Reader {...props} />;
}
