# Zili Wang — personal site

A custom, single-page Hugo site for <https://zwang271.github.io/>. The site has no theme, JavaScript framework, or Hugo module dependencies.

## Local development

Install Hugo 0.136.5 or newer, then run:

```sh
hugo server --renderToMemory
```

Create a production build with:

```sh
hugo --minify --cleanDestinationDir
```

Profile and publication data live in `data/`. The page template is `layouts/index.html`, and all visual styling is in `assets/css/site.css`.
