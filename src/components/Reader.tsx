import Link from "next/link";
import { ArrowLeftIcon } from "@/components/Icons";

type Props = { slug: string; title: string; pdf: string };

// PDF.js announces itself on the parent page ("webviewerloaded") before it starts, which lets us
// configure it without touching the vendored files: Spanish interface and no annotation editing tools.
const viewerSetup = `document.addEventListener("webviewerloaded", function (e) {
  var opts = e.detail && e.detail.source && e.detail.source.PDFViewerApplicationOptions;
  if (!opts) return;
  opts.set("disablePreferences", true);
  opts.set("localeProperties", { lang: "es-ES" });
  opts.set("annotationEditorMode", -1);
});`;

// The official PDF.js viewer (vendored in public/pdfjs) provides thumbnails, search,
// zoom, rotation, print and download, and remembers the last page of each book.
export default function Reader({ slug, title, pdf }: Props) {
  const viewer = `/pdfjs/web/viewer.html?file=${encodeURIComponent(pdf)}`;
  return (
    <div className="reader">
      <div className="reader-bar">
        <div className="reader-title">
          <Link href={`/libros/${slug}/`} aria-label="Volver al libro">
            <ArrowLeftIcon size={20} />
          </Link>
          <strong>{title}</strong>
        </div>
      </div>
      <script dangerouslySetInnerHTML={{ __html: viewerSetup }} />
      <iframe className="reader-frame" src={viewer} title={`Leer ${title}`} allowFullScreen />
    </div>
  );
}
