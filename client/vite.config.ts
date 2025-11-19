import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'imas-dev-api',
      configureServer(server) {
        server.middlewares.use('/api/npf/create', async (req, res, next) => {
          if (req.method !== 'POST') {
            res.statusCode = 405;
            res.end('Method Not Allowed');
            return;
          }
          let raw = '';
          req.on('data', (chunk) => { raw += chunk; });
          req.on('end', async () => {
            try {
              const data = raw ? JSON.parse(raw) : {};
              const secret = process.env.IMAS_NPF_SECRET_KEY || process.env.NPF_SECRET_KEY;
              const access = process.env.IMAS_NPF_ACCESS_KEY || process.env.NPF_ACCESS_KEY;
              if (!secret || !access) {
                res.statusCode = 500;
                res.end('Missing NPF keys in env');
                return;
              }
              const upstream = 'https://api.nopaperforms.io/lead/v1/create';
              const r = await fetch(upstream, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  'secret-key': secret,
                  'access-key': access,
                },
                body: JSON.stringify(data),
              });
              const text = await r.text();
              res.statusCode = r.status;
              res.setHeader('Content-Type', 'application/json');
              res.end(text);
            } catch (err: any) {
              res.statusCode = 500;
              res.end(err?.message || 'Request handling failed');
            }
          });
        });
      },
    },
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  server: {
    port: 5173,
    open: false,
  },
});


