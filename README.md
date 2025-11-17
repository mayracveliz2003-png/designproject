# Swiss Punk — mini-site

This is a small static website demonstrating a three-page layout explaining the history of "Swiss Punk" (overview, timeline, and practitioners). It uses bright yellow and pink as accent colors and is intentionally light-weight (no build step).

Files added:

- `index.html` — overview page
- `timeline.html` — timeline of historical moments
- `practitioners.html` — short bios of key practitioners/influencers
- `css/styles.css` — styles with bright yellow and pink accents
- `js/main.js` — tiny script to mark active nav link

How to view

Open any of the HTML files in your browser. For example:

```bash
# from the repository root
xdg-open index.html
``` 

Or serve locally with Python (recommended if you want correct relative paths):

```bash
python3 -m http.server 8000
# then open http://localhost:8000 in your browser
```

Notes and assumptions

- I interpreted "Swiss Punk" as a design/typographic fusion between the Swiss (International) Typographic Style and punk aesthetics. If you meant a different subject (e.g., music scene or a specific subculture), tell me and I will adapt the content.
- Content is concise and demonstrative. If you want sourced historical references or images of works, I can add them.

Next steps I can do if you want:

- Add images and thumbnails for practitioners
- Provide sourced references and further reading links
- Add printable timeline or downloadable one-page PDF
