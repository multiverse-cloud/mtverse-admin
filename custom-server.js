const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');
const fs = require('fs');
const path = require('path');

const dev = false;
const hostname = '0.0.0.0';
const port = parseInt(process.env.PORT, 10) || 3000;

const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

const ZIP_PATH = path.join(__dirname, 'public', 'mtverse-admin-full.zip');

app.prepare().then(() => {
  const server = createServer(async (req, res) => {
    const parsedUrl = parse(req.url, true);
    
    // Serve zip download with streaming
    if (parsedUrl.pathname === '/mtverse-admin-full.zip' || parsedUrl.pathname === '/api/download') {
      try {
        const stat = fs.statSync(ZIP_PATH);
        res.writeHead(200, {
          'Content-Type': 'application/zip',
          'Content-Disposition': 'attachment; filename="mtverse-admin-full.zip"',
          'Content-Length': stat.size,
        });
        fs.createReadStream(ZIP_PATH).pipe(res);
        return;
      } catch (e) {
        res.writeHead(404);
        res.end('Not found');
        return;
      }
    }
    
    // Handle all other requests through Next.js
    try {
      await handle(req, res, parsedUrl);
    } catch (err) {
      console.error('Error occurred handling', req.url, err);
      res.statusCode = 500;
      res.end('internal server error');
    }
  });

  server.keepAliveTimeout = 1;
  server.headersTimeout = 2;
  
  server.listen(port, hostname, () => {
    console.log(`> Ready on http://${hostname}:${port}`);
  });
  
  // Handle errors
  server.on('error', (err) => {
    console.error('Server error:', err);
  });
});

process.on('uncaughtException', (err) => {
  console.error('Uncaught:', err.message);
});
