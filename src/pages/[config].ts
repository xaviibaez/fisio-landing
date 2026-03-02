import type { APIRoute } from 'astro';
import fs from 'fs';
import path from 'path';

export const prerender = false;

export const GET: APIRoute = async ({ params }) => {
  if (params.config === 'config.yml') {
    const configPath = path.join(process.cwd(), 'public', 'admin', 'config.yml');
    try {
      let configContent = fs.readFileSync(configPath, 'utf-8');
      
      // En desarrollo: usar proxy backend y activar local_backend
      // En producción: usar git-gateway y desactivar local_backend
      const isDev = import.meta.env.DEV;
      
      if (isDev) {
        // Cambiar a proxy backend para desarrollo local
        configContent = configContent.replace(
          /^backend:\s*\n\s*name:\s*(git-gateway|proxy)/m,
          'backend:\n  name: proxy'
        );
        // Asegurar que local_backend está activo en desarrollo
        configContent = configContent.replace(
          /^#\s*local_backend:\s*true/m,
          'local_backend: true'
        );
        // Asegurar que proxy_url está configurado
        if (!configContent.includes('proxy_url:')) {
          configContent = configContent.replace(
            /^backend:\s*\n\s*name:\s*proxy/m,
            'backend:\n  name: proxy\n  proxy_url: http://localhost:8081/api/v1'
          );
        }
      } else {
        // Cambiar a git-gateway para producción
        configContent = configContent.replace(
          /^backend:\s*\n\s*name:\s*(git-gateway|proxy)/m,
          'backend:\n  name: git-gateway'
        );
        // Eliminar proxy_url en producción
        configContent = configContent.replace(
          /^\s*proxy_url:.*$/m,
          ''
        );
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
