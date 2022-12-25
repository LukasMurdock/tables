# Simple Table

Simple table with plain HTML, CSS, and JavaScript.

Developing without a web server means using the filesystem. Unfortunately, [JavaScript modules won’t work through `file://`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules#troubleshooting).

Now using [Parcel](https://parceljs.org/) for local dev server and bundling.

## Goals

- Plain and minimal HTML, CSS, and JavaScript
- Lightweight

## Table Concerns

1. DOM manipulation (e.g., insert row, delete column)
2. Format Generation (e.g., markdown, html)
3. Mutations (DOM manipulation and local storage)
4. Local Storage (for persistence)

## Utilities

- [Keyboard Event Viewer](https://w3c.github.io/uievents/tools/key-event-viewer.html)

## Other avenues to explore

1. Use a bundler (parcel, rollup) to only require a single JavaScript file link (but still work across multiple files)
2. Use xstate
3. Use web components
4. Render png

## Other tables

- https://www.tablesgenerator.com/markdown_tables
