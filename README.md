# Portafolio — Alberto Lira

Landing page / portafolio profesional para ofrecer mis servicios: servicios, proyectos,
repositorios, habilidades, CV y contacto.

**Stack:** HTML5 · CSS3 · Bootstrap 5 · AngularJS 1.8 · Bootstrap Icons (todo por CDN, sin build).

## Cómo verlo

Es un sitio estático. Solo abre `index.html` en el navegador.
Para que las rutas relativas y AngularJS funcionen sin problemas, mejor sírvelo con un server local:

```powershell
# Opción 1: Python
python -m http.server 5500

# Opción 2: Node (si tienes npx)
npx serve .

# Opción 3: VS Code -> extensión "Live Server" -> Go Live
```

Luego abre http://localhost:5500

## Estructura

```
personal/
├── index.html          # Estructura de la página (una sola página, scroll)
├── css/styles.css      # Estilos (paleta navy + dorado, formal)
├── js/
│   ├── data.js         # ⭐ TODO el contenido editable (textos, proyectos, repos, CV)
│   └── app.js          # Lógica AngularJS (no necesitas tocarlo)
├── assets/
│   ├── img/            # Tus fotos (ver assets/img/LEEME.txt)
│   ├── cv-alberto-lira.pdf   # Tu CV (ver assets/LEEME-CV.txt)
│   └── ...
└── README.md
```

## Personalizar (lo único que tienes que editar)

`js/data.js` tiene **dos idiomas**: `contact` (datos que no cambian con el idioma:
correo, teléfono, WhatsApp, GitHub, LinkedIn) y dos bloques `es` y `en` con TODO el texto.
Si editas un bloque, edita también el otro para que coincidan (mismos proyectos, etc.).

1. **contact** — teléfono, email, **GitHub/LinkedIn** y tu **WhatsApp** (`whatsapp`, solo dígitos: lada país + número, ej. `525512345678`).
2. **es / en → projects** — cada proyecto trae caso de estudio para el modal: `problem`, `solution`, `result`, `features`.
3. **es / en → whyme** — las 4 ventajas de "Por qué trabajar conmigo".
4. **es / en → cv** — experiencia, educación, certificaciones.
5. **es / en → services / skillGroups / process / domains** — ajusta textos, porcentajes y tecnologías.
6. **es / en → quote** — ⚠️ los **precios del cotizador** son orientativos en MXN. **Cámbialos a tus tarifas reales:**
   - `types[].base` (precio) y `types[].weeks` (semanas estimadas) por tipo de proyecto.
   - `addons[].price` y `addons[].weeks` por cada extra.
   - `rentFactor` (0.10 = renta mensual = 10% del total; incluye hosting/soporte).
   El cotizador tiene **dos modos**: *Pago único* (muestra rango `base+extras` … `×1.35` + semanas)
   y *Renta mensual* (`total × rentFactor` al mes). Muestra el **desglose** de lo elegido y el
   botón arma un mensaje de WhatsApp con todo (tipo, extras, precio/renta y tiempo).

### Mini-juegos (Tetris y Sudoku)
El visitante puede elegir **Tetris** (`js/tetris.js`) o **Sudoku** (`js/sudoku.js`) desde el
cotizador, en un modal con pestañas. Tetris: flechas/↓/espacio o botones. Sudoku: toca una celda y
elige número (1-9), con dificultades fácil/media/difícil. Es solo para entretener mientras deciden;
para quitarlos, borra el modal `#gameModal`, los botones "play" y los `<script>` de los juegos en `index.html`.

> Idioma: botón **ES/EN** en el navbar (recuerda la elección; primera visita = idioma del navegador).

Luego pon tus imágenes en `assets/img/` y tu PDF en `assets/cv-alberto-lira.pdf`.

> El sitio se ve bien aunque falten las imágenes (muestra fondos de respaldo elegantes),
> así que puedes publicarlo y completarlo después.

## CV en PDF

El CV vive en `cv.html` (formato A4, formal) y ya está exportado a `assets/cv-alberto-lira.pdf`
(es lo que descarga el botón del sitio). Si editas `cv.html`, regenera el PDF con Edge:

```powershell
$edge = "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
& $edge --headless --disable-gpu --no-pdf-header-footer `
  --print-to-pdf="assets\cv-alberto-lira.pdf" "file:///$($PWD -replace '\\','/')/cv.html"
```

## Tema claro/oscuro

El botón de luna/sol en el navbar cambia el tema y lo recuerda (localStorage). En la primera
visita respeta la preferencia del sistema del usuario.

## Notas

- El formulario de contacto abre el cliente de correo con el mensaje prellenado (no requiere
  servidor). Si más adelante quieres recibir los mensajes en una API, se conecta fácil en `app.js`.
- Para publicarlo gratis: GitHub Pages, Netlify o Cloudflare Pages (solo sube la carpeta).
- **Al publicar:** en `index.html` cambia `https://tu-dominio.com` por tu URL real (en las
  meta `og:image`, `og:url` y `twitter:image`) para que la tarjeta de previsualización
  (WhatsApp/LinkedIn) cargue bien la imagen `assets/og-image.png`.
