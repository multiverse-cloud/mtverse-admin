const http = require('http');
const fs = require('fs');
const path = require('path');

const STATIC_DIR = '/home/z/my-project/.next/static';
const PUBLIC_DIR = '/home/z/my-project/public';
const PORT = 3000;

const MIME_TYPES = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.zip': 'application/zip',
  '.webmanifest': 'application/manifest+json',
};

function serveFile(filePath, res) {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Not Found');
      return;
    }
    const ext = path.extname(filePath);
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';
    res.writeHead(200, {
      'Content-Type': contentType,
      'Cache-Control': ext === '.zip' ? 'no-cache' : 'public, max-age=31536000',
    });
    res.end(data);
  });
}

const server = http.createServer((req, res) => {
  let urlPath = req.url.split('?')[0];
  
  // Serve zip download
  if (urlPath === '/mtverse-admin-full.zip' || urlPath === '/api/download') {
    const zipPath = path.join(PUBLIC_DIR, 'mtverse-admin-full.zip');
    try {
      const stat = fs.statSync(zipPath);
      res.writeHead(200, {
        'Content-Type': 'application/zip',
        'Content-Disposition': 'attachment; filename="mtverse-admin-full.zip"',
        'Content-Length': stat.size,
      });
      fs.createReadStream(zipPath).pipe(res);
    } catch (e) {
      res.writeHead(404);
      res.end('Not found');
    }
    return;
  }

  // Static files from _next/static
  if (urlPath.startsWith('/_next/static/')) {
    const filePath = path.join('/home/z/my-project/.next', urlPath);
    serveFile(filePath, res);
    return;
  }

  // Public directory files
  if (urlPath === '/favicon.ico' || urlPath === '/logo.svg' || urlPath === '/icon.svg' || urlPath === '/site.webmanifest') {
    serveFile(path.join(PUBLIC_DIR, urlPath), res);
    return;
  }

  // All other routes - serve 404 or redirect to the main Next.js app
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('<html><body><h3>mtverse admin</h3><p><a href="/mtverse-admin-full.zip">Download Project ZIP</a></p><p>The full app requires the Next.js server. Please use the download link to get the complete project.</p></body></html>');
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`Mini server running on port ${PORT}`);
  console.log(`Download: http://localhost:${PORT}/mtverse-admin-full.zip`);
});

// Graceful handling
process.on('uncaughtException', (err) => {
  console.error('Uncaught exception:', err.message);
});
