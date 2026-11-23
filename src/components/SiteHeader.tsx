import Link from "next/link";
import { SITE } from "@/data/books";
import ThemeToggle from "./ThemeToggle";

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container">
        <Link href="/" className="brand">
          {SITE.name}
        </Link>
        <nav className="nav" aria-label="Principal">
          <Link href="/#libros">Libros</Link>
          <Link href="/#ensenanzas">Enseñanzas</Link>
          <Link href="/#autor">El autor</Link>
          <Link href="/#contacto">Contacto</Link>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
