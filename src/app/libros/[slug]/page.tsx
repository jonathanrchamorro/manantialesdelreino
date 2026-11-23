import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AUTHOR, BOOKS, getBook } from "@/data/books";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import BookActions from "@/components/BookActions";
import { ArrowLeftIcon } from "@/components/Icons";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return BOOKS.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const book = getBook((await params).slug);
  return book ? { title: book.title, description: book.summary } : {};
}

export default async function BookPage({ params }: { params: Promise<Params> }) {
  const book = getBook((await params).slug);
  if (!book) notFound();

  return (
    <>
      <SiteHeader />
      <main className="section">
        <div className="container">
          <Link href="/#libros" className="back-link">
            <ArrowLeftIcon /> Todos los libros
          </Link>
          <div className="detail-grid">
            <div className="detail-cover">
              <img src={book.cover} alt={`Portada de ${book.title}`} />
            </div>
            <div className="detail-text">
              <p className="kicker">{AUTHOR.name}</p>
              <h1>{book.title}</h1>
              {book.subtitle && <p className="detail-sub">{book.subtitle}</p>}
              {book.pdf && (
                <div className="facts">
                  <span>
                    Año <b>{book.year}</b>
                  </span>
                  <span>
                    Páginas <b>{book.pages}</b>
                  </span>
                  {book.isbn && (
                    <span>
                      ISBN <b>{book.isbn}</b>
                    </span>
                  )}
                </div>
              )}
              <p className="detail-summary">{book.summary}</p>
              {!book.pdf && <p className="coming-soon">Próximamente disponible para leer y descargar.</p>}
              {book.epigraph && (
                <blockquote className="epigraph">
                  «{book.epigraph.text}»<cite>{book.epigraph.reference}</cite>
                </blockquote>
              )}
              {book.pdf && (
                <div className="hero-actions">
                  <BookActions book={book} />
                </div>
              )}
              {book.chapters.length > 0 && (
                <section className="toc" aria-labelledby="toc-title">
                  <h2 id="toc-title">Contenido</h2>
                  <ol>
                    {book.chapters.map((c) => (
                      <li key={c}>{c}</li>
                    ))}
                  </ol>
                </section>
              )}
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
