import Link from "next/link";
import { AUTHOR, AVAILABLE_BOOKS, BOOKS, SITE } from "@/data/books";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import BookActions from "@/components/BookActions";
import VideoGallery from "@/components/VideoGallery";
import { VIDEOS } from "@/data/videos";
import { AmazonLogo, MailIcon, WhatsAppLogo, YouTubeLogo } from "@/components/Icons";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="cover-hero" aria-labelledby="hero-title">
          <div className="container cover-hero-grid">
            <div className="cover-hero-text">
              <p className="kicker kicker-light">Biblioteca digital gratuita</p>
              <h1 id="hero-title">{SITE.name}</h1>
              <p className="cover-hero-lead">
                Libros de estudio bíblico de {AUTHOR.name} para leer en línea y descargar sin costo.
              </p>
              <blockquote className="cover-hero-verse">
                «El agua que yo le daré será en él una fuente de agua que salte para vida eterna».
                <cite>Juan 4:14</cite>
              </blockquote>
              <div className="hero-actions">
                <Link href="#libros" className="btn btn-light">
                  Ver los libros
                </Link>
                <Link href="#autor" className="btn btn-ghost">
                  Conocer al autor
                </Link>
              </div>
            </div>
            <div className="book-fan" aria-hidden="true">
              {AVAILABLE_BOOKS.slice(0, 3).map((book) => (
                <img key={book.slug} src={book.cover} alt="" />
              ))}
            </div>
          </div>
        </section>

        <section id="libros" className="section section-alt">
          <div className="container">
            <div className="section-head">
              <p className="kicker">Biblioteca</p>
              <h2>Libros</h2>
              <p>
                {AVAILABLE_BOOKS.length} libros disponibles para leer en línea o descargar en PDF, sin registro y sin
                costo.
              </p>
            </div>
            <div className="book-grid">
              {BOOKS.map((book) => (
                <article key={book.slug} className="book-card">
                  <Link href={`/libros/${book.slug}/`} className="book-cover-link" aria-label={book.title}>
                    <img src={book.cover} alt={`Portada de ${book.title}`} loading="lazy" />
                    {!book.pdf && <span className="badge">Próximamente</span>}
                  </Link>
                  <h3>
                    <Link href={`/libros/${book.slug}/`}>{book.title}</Link>
                  </h3>
                  {book.subtitle && <p className="book-sub">{book.subtitle}</p>}
                  {book.pdf && (
                    <p className="book-meta">
                      {book.year} · {book.pages} páginas · PDF
                    </p>
                  )}
                  <div className="book-actions">
                    <BookActions book={book} />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="ensenanzas" className="section">
          <div className="container">
            <div className="section-head">
              <p className="kicker">Enseñanzas</p>
              <h2>Enseñanzas en video</h2>
              <p>Exposiciones de la Palabra publicadas en el canal de YouTube del autor.</p>
            </div>
            <VideoGallery videos={VIDEOS} />
            <p className="video-more">
              <a href={AUTHOR.youtube} className="btn btn-outline" target="_blank" rel="noopener noreferrer">
                <YouTubeLogo size={20} />
                Ver todas en YouTube
              </a>
            </p>
          </div>
        </section>

        <section id="autor" className="section section-alt">
          <div className="container hero-grid">
            <figure className="portrait">
              <img src={AUTHOR.photo} alt={`Retrato de ${AUTHOR.name}`} width={872} height={1028} />
            </figure>
            <div className="hero-text">
              <p className="kicker">Sobre el autor</p>
              <h2 className="author-name">{AUTHOR.name}</h2>
              <p className="hero-legend">{AUTHOR.bio}</p>
              <div className="hero-actions">
                <Link href="#libros" className="btn btn-primary">
                  Ver los libros
                </Link>
                <a href={AUTHOR.youtube} className="btn btn-outline" target="_blank" rel="noopener noreferrer">
                  <YouTubeLogo size={20} />
                  Canal de YouTube
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="contacto" className="section">
          <div className="container">
            <div className="section-head">
              <p className="kicker">Contacto</p>
              <h2>Más del autor</h2>
              <p>Enseñanzas en video, libros impresos y un canal directo para escribirle.</p>
            </div>
            <div className="contact-grid">
              <a className="contact-card" href={AUTHOR.youtube} target="_blank" rel="noopener noreferrer">
                <span className="contact-icon">
                  <YouTubeLogo />
                </span>
                <strong>YouTube</strong>
                <span>Canal de {AUTHOR.name}</span>
              </a>
              <a className="contact-card" href={AUTHOR.amazon} target="_blank" rel="noopener noreferrer">
                <span className="contact-icon">
                  <AmazonLogo />
                </span>
                <strong>Amazon</strong>
                <span>Página de autor y libros impresos</span>
              </a>
              <a className="contact-card" href={AUTHOR.whatsapp.url} target="_blank" rel="noopener noreferrer">
                <span className="contact-icon contact-icon-whatsapp">
                  <WhatsAppLogo />
                </span>
                <strong>WhatsApp</strong>
                <span>{AUTHOR.whatsapp.display}</span>
              </a>
              <div className="contact-card">
                <span className="contact-icon contact-icon-mail">
                  <MailIcon />
                </span>
                <strong>Correo</strong>
                {AUTHOR.emails.map((email) => (
                  <a key={email} href={`mailto:${email}`}>
                    {email}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
