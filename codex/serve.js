// Minimal static file server for local development
// Serves files from the project root on http://localhost:8000
const { createServer } = require("http");
const { readFile, stat } = require("fs/promises");
const { extname, normalize, join } = require("path");

const PORT = process.env.PORT || 8080;
const ROOT = __dirname;

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".txt":  "text/plain; charset=utf-8",
  ".js":   "text/javascript; charset=utf-8",
  ".mjs":  "text/javascript; charset=utf-8",
  ".css":  "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".jpg":  "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png":  "image/png",
  ".gif":  "image/gif",
  ".svg":  "image/svg+xml",
  ".ico":  "image/x-icon",
  ".webp": "image/webp",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf":  "font/ttf",
  ".otf":  "font/otf",
  ".wasm": "application/wasm",
};

createServer(async (req, res) => {
  try {
    const url = new URL(req.url, "http://localhost/");
    let path = decodeURIComponent(url.pathname);
    if (path === "/") path = "/index.html";

    // Prevent path traversal
    const filePath = normalize(join(ROOT, path));
    if (!filePath.startsWith(ROOT)) {
      res.statusCode = 403;
      res.end("403 Forbidden");
      return;
    }

    const s = await stat(filePath);
    if (s.isDirectory()) {
      res.statusCode = 403;
      res.end("403 Directory");
      return;
    }

    const data = await readFile(filePath);
    res.setHeader("Content-Type", MIME[extname(filePath).toLowerCase()] || "application/octet-stream");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Cache-Control", "no-cache");
    res.end(data);
  } catch (e) {
    res.statusCode = 404;
    res.end("404 Not Found: " + e.message);
  }
}).listen(PORT, () => {
  console.log("Serving at http://localhost:" + PORT);
  console.log("Root: " + ROOT);
});
