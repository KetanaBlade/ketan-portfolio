// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import fs from 'node:fs';
import path from 'node:path';

// https://astro.build/config
export default defineConfig({
  site: 'https://ketanbpandya.com',
  integrations: [react(), mdx(), sitemap()],
  build: {
    inlineStylesheets: 'always'
  },
  vite: {
    plugins: [{
      name: 'local-notes-saver',
      configureServer(server) {
        server.middlewares.use(async (req, res, next) => {
          if (req.url === '/api/save-notes' && req.method === 'POST') {
            let body = '';
            req.on('data', chunk => body += chunk);
            req.on('end', () => {
              try {
                const { notes } = JSON.parse(body);
                const filePath = path.resolve('./src/data/vpr-notes.md');
                fs.writeFileSync(filePath, notes.join('\n---SLIDE---\n'), 'utf-8');
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ success: true }));
              } catch (e) {
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: e.message }));
              }
            });
            return;
          }
          next();
        });
      }
    }]
  }
});