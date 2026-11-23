import { AUTHOR, SITE } from "@/data/books";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <p>
          © {new Date().getFullYear()} {SITE.name} · {AUTHOR.name}. Todos los derechos reservados por el autor.
        </p>
        <p>Bogotá D.C. · Colombia</p>
      </div>
    </footer>
  );
}
