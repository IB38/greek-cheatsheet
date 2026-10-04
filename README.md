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
- `.github/workflows/pages.yml` — GitHub Pages deployment

## GitHub Pages

1. In the GitHub repository, open **Settings → Pages** and select **GitHub Actions** as the source.
2. Commit and push these files to `master`.
3. Wait for **Deploy to GitHub Pages** in the **Actions** tab to finish. You can also run it manually from that tab.

The expected site address for this repository is https://ib38.github.io/greek-cheatsheet/.

The workflow uploads only `index.html`, `src/app.js`, and `src/styles.css`. Node is used only for local development; GitHub Pages serves the files directly, without npm installation or a build step. Relative asset links support both repository subpaths and domain roots.

If you rename the deployment branch, update `on.push.branches` in the workflow. Setup follows [GitHub's static Pages workflow](https://github.com/actions/starter-workflows/blob/main/pages/static.yml).

The site uses system fonts and does not load external font resources.
