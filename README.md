# engineering-manager-manifesto

An opinionated guide for Engineering Managers, covering GitHub, trunk-based development, GitHub Actions, Cursor, and more. This is a github.io website powered by Docusaurus and driven by markdown pages.

## About

This site is built using [Docusaurus](https://docusaurus.io/), a modern static website generator. It aims to provide practical, opinionated guidance for engineering managers.

## Local Development

```bash
npm install
npm run start
```

This will start a local development server and open the site in your browser. Most changes are reflected live without restarting.

## Build

```bash
npm run build
```

This generates static content in the `build` directory.

## Deployment

The site is deployed to GitHub Pages from the `gh-pages` branch using GitHub Actions. On every push to `main`, the site is built and published automatically.

Manual deploy (if needed):

```bash
GIT_USER=<Your GitHub username> npm run deploy
```
