import { serve } from '@hono/node-server'
import { serveStatic } from 'hono/serve-static'
import { Hono } from 'hono'
import { logger } from 'hono/logger'
import { html } from 'hono/html'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const app = new Hono()

app.use(logger())

app.get('/', (c) => {
  const index = 
    html`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Simple HTML5 Page</title>
</head>
<body>
  <h1>Welcome to My Simple HTML5 Page</h1>
  <p>This is a basic HTML5 template.</p>
</body>
</html>`
  return c.html(index);
})

app.get('/react-app', async (c) => {
  const file = path.join(__dirname, '../dist/react-app/index.html')
  const content = await fs.promises
    .readFile(file, 'utf-8')
  c.header('Content-Type', 'text/html')
  return c.html(content)
})

app.use('/react-app/*', serveStatic({
  root: '../dist',
  getContent: async (filePath, c) => {
    try {
      const content = await fs.promises.readFile(path.join(__dirname, filePath), 'utf-8');
      const ext = path.extname(filePath);
      let contentType = 'text/plain';

      if (ext === '.js') {
        contentType = 'application/javascript';
      } else if (ext === '.css') {
        contentType = 'text/css';
      } else if (ext === '.html') {
        contentType = 'text/html';
      } else if (ext === '.svg') {
        contentType = 'image/svg+xml';
      } else {
        console.log('Unknown file type:', ext);
        contentType = 'text/plain';
      }

      c.header('Content-Type', contentType);
      return new Response(content);
    } catch (e) {
      console.error(e);
      return null;
    }
  }
}))

app.get('/vue-app', async (c) => {
  const file = path.join(__dirname, '../dist/vue-app/index.html')
  const content = await fs.promises
    .readFile(file, 'utf-8')
    c.header('Content-Type', 'text/html')
  return c.html(content)
})

app.use('/vue-app/*', serveStatic({
  root: '../dist',
  getContent: async (filePath, c) => {
    try {
      const content = await fs.promises.readFile(path.join(__dirname, filePath), 'utf-8');
      const ext = path.extname(filePath);
      let contentType = 'text/plain';

      if (ext === '.js') {
        contentType = 'application/javascript';
      } else if (ext === '.css') {
        contentType = 'text/css';
      } else if (ext === '.html') {
        contentType = 'text/html';
      } else if (ext === '.svg') {
        contentType = 'image/svg+xml';
      } else {
        console.log('Unknown file type:', ext);
        contentType = 'text/plain';
      }

      c.header('Content-Type', contentType);
      return new Response(content);
    } catch (e) {
      console.error(e);
      return null;
    }
  }
}))

serve({
  fetch: app.fetch,
  port: 3000
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})
