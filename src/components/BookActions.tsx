import Link from "next/link";
import type { Book } from "@/data/books";
import { DownloadIcon, ReadIcon } from "./Icons";

export default function BookActions({ book }: { book: Book }) {
  if (!book.pdf) return null;
  return (
    <>
      <Link href={`/libros/${book.slug}/leer/`} className="btn btn-primary">
        <ReadIcon /> Leer en línea
      </Link>
      <a href={book.pdf} download className="btn btn-outline">
        <DownloadIcon /> Descargar PDF
      </a>
    </>
  );
}
