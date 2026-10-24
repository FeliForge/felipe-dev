# FeliForge Studios

FeliForge Studios — sitios y juegos en HTML y JavaScript, **sin anuncios**.

Sitio estático listo para [GitHub Pages](https://pages.github.com/).

## Ver en local

Abrí `index.html` en el navegador, o:

```bash
npx serve .
```

## Publicar con GitHub Pages

1. Repo → **Settings** → **Pages**
2. Source: **Deploy from a branch**
3. Branch: `main` / carpeta `/` (root)
4. Save. En unos minutos queda en:
   `https://feliforge.github.io/felipe-dev/`

## Editar proyectos

Los links viven en el array `PROJECTS` de [`app.js`](app.js) y los juegos del directorio en [`games-config.js`](games-config.js).  
Agregá, sacá o cambiá un objeto y recargá.

Donaciones PIX: QRs en `qr/` y clave en `PIX_KEY` (mismo archivo).

## Idiomas

ES / PT / EN en la barra de pestañas. Se guarda en `localStorage`.

## Créditos

Hecho por Felipe. Sin anuncios, por elección.
