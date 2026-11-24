# Arcadio Sierra Díaz · Sitio de libros

Sitio estático (Next.js con `output: "export"`) para leer en línea y descargar los libros del autor.

## Desarrollo

```bash
pnpm install   # también copia el worker de pdf.js a public/
pnpm dev       # http://localhost:3000
pnpm build     # genera la carpeta out/ (HTML estático listo para publicar)
```

## Agregar un libro

1. Copiar el PDF a `public/libros/<slug>.pdf` y la portada a `public/portadas/<slug>.jpg`.
2. Agregar (o completar) la entrada en `src/data/books.ts`. Un libro sin `pdf` se muestra como "Próximamente".
3. `pnpm build` y volver a publicar.

## Agregar una enseñanza en video

Agregar el video (id de YouTube, título y fecha) en `src/data/videos.ts`. El primero de la lista es el que aparece en el reproductor grande.

## Publicar

Publicado en Cloudflare Workers como archivos estáticos (gratis y sin límite de visitas), configuración en
`wrangler.jsonc`: https://manantialesdelreino.com (también www.)

```bash
pnpm build && npx wrangler@4 deploy   # Wrangler 4 necesita Node >= 22.12
```

Netlify (https://manantialesdelreino.netlify.app) sigue conectado a este repositorio mientras termina la migración:
cada `git push` a `main` publica allí y gasta 15 de los 300 créditos mensuales del plan gratis.

Otras opciones:

La carpeta `out/` es HTML puro: sirve en cualquier hosting.

- **Netlify Drop (gratis, lo más rápido):** entrar a https://app.netlify.com/drop y arrastrar la carpeta `out/`.
- **Vercel (gratis):** subir este directorio a un repositorio de GitHub e importarlo en https://vercel.com/new
  (detecta Next.js solo). También: `npx vercel` desde esta carpeta.
- **HostGator:** subir el *contenido* de `out/` a `public_html/` por el administrador de archivos o FTP.

En todos los casos se puede conectar después un dominio propio.
