import type { Metadata, Viewport } from "next";
import { Inter, Lora } from "next/font/google";
import { AUTHOR, SITE } from "@/data/books";
import { themeInitScript } from "@/lib/theme";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

const lora = Lora({ subsets: ["latin"], weight: ["500", "600", "700"], style: ["normal", "italic"], variable: "--font-lora" });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    default: `${SITE.name} · Libros de ${AUTHOR.name}`,
    template: `%s · ${SITE.name}`,
  },
  description: `Libros de ${AUTHOR.name} para leer en línea y descargar. ${AUTHOR.bio}`,
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fbf8f3" },
    { media: "(prefers-color-scheme: dark)", color: "#12161d" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${lora.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
