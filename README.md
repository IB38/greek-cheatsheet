# Greek Cheatsheet

A small vanilla JavaScript website with five Modern Greek reference tabs, served by Node's built-in HTTP server. No dependencies or build step.

## Getting started

Use Node.js 22 or newer and npm.

```sh
npm run dev
```

Open http://127.0.0.1:3000. Refresh your browser after editing the HTML, CSS, or JavaScript. Restart the server after editing `server.js`.

`npm start` runs the same server. You can also run it directly:

```sh
node server.js
```

Set the `PORT` environment variable to use another port. The server listens locally and serves only the website's HTML, CSS, and JavaScript files.

## Project structure

- `index.html` — page structure and metadata
- `src/app.js` — cheatsheet content and tab interactions
- `src/styles.css` — responsive styles
- `server.js` — local static file server

Fonts load from Google Fonts, with local fallback fonts when unavailable.
