#!/usr/bin/env node

/**
 * Script para iniciar el servidor de backend local de Decap CMS
 * Este servidor permite usar el CMS en localhost sin autenticación
 */

import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = join(__dirname, '..');

console.log('🚀 Iniciando servidor de backend local de Decap CMS...');
console.log('📡 El servidor estará disponible en http://localhost:8081');
console.log('');

// Iniciar decap-server
const server = spawn('npx', ['decap-server'], {
  cwd: projectRoot,
  stdio: 'inherit',
  shell: true
});

server.on('error', (error) => {
  console.error('❌ Error al iniciar el servidor:', error);
  process.exit(1);
});

server.on('exit', (code) => {
  if (code !== 0) {
    console.error(`❌ El servidor se cerró con código ${code}`);
    process.exit(code);
  }
});

// Manejar señales de terminación
process.on('SIGINT', () => {
  console.log('\n🛑 Deteniendo servidor...');
  server.kill('SIGINT');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\n🛑 Deteniendo servidor...');
  server.kill('SIGTERM');
  process.exit(0);
});
