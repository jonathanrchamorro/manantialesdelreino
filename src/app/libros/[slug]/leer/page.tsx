import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AVAILABLE_BOOKS, getBook } from "@/data/books";
import Reader from "@/components/Reader";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return AVAILABLE_BOOKS.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const book = getBook((await params).slug);
  return book ? { title: `Leer: ${book.title}` } : {};
}

export default async function ReadPage({ params }: { params: Promise<Params> }) {
  const book = getBook((await params).slug);
  if (!book?.pdf) notFound();
  return <Reader slug={book.slug} title={book.title} pdf={book.pdf} />;
}
