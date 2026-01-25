import type { APIRoute } from 'astro';
import fs from 'fs';
import path from 'path';

export const prerender = false;

export const GET: APIRoute = async ({ params }) => {
  if (params.config === 'config.yml') {
    const configPath = path.join(process.cwd(), 'public', 'admin', 'config.yml');
    try {
      let configContent = fs.readFileSync(configPath, 'utf-8');
      
      // En desarrollo: activar local_backend
      // En producción: desactivar local_backend
      const isDev = import.meta.env.DEV;
      
      if (isDev) {
        // Asegurar que local_backend está activo en desarrollo
        configContent = configContent.replace(
          /^#\s*local_backend:\s*true/m,
          'local_backend: true'
        );
      } else {
        // Comentar local_backend en producción
        configContent = configContent.replace(
          /^local_backend:\s*true/m,
          '# local_backend: true'
        );
      }
      
      return new Response(configContent, {
        status: 200,
        headers: {
          'Content-Type': 'text/yaml; charset=utf-8',
        },
      });
    } catch (error) {
      console.error('Error reading config:', error);
      return new Response('Config not found', { status: 404 });
    }
  }
  return new Response('Not found', { status: 404 });
};
