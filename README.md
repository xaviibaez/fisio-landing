# Axis Cambrils - Centro de Fisioterapia

Landing page moderna y multiidioma para Axis Cambrils, centro de fisioterapia en Cambrils (Tarragona), creada con Astro, TypeScript y Tailwind CSS.

## 🏥 Sobre el Proyecto

Centro de fisioterapia especializado ubicado en:
- **Dirección**: Carrer de Sant Josep, 15, 43850 Cambrils, Tarragona
- **Idiomas**: Catalán (por defecto), Español, Inglés
- **Servicios**: Fisioterapia deportiva, traumatológica, neurológica, pediátrica, respiratoria y geriátrica

## ✨ Características

- 🚀 **Rendimiento ultra-rápido** con Astro SSG
- 🌐 **Multiidioma** (Catalán, Español, Inglés) con i18n nativo
- 📱 **Diseño responsive** mobile-first
- 🎨 **Interfaz moderna** con Tailwind CSS
- 📝 **Blog integrado** con Content Collections
- 🔍 **SEO optimizado** con meta tags dinámicos
- ♿ **Accesible** y semántico
- 🎯 **Zero JavaScript** en el cliente (por defecto)

## 🛠️ Stack Tecnológico

- **Framework**: [Astro](https://astro.build) v4.15
- **Estilos**: [Tailwind CSS](https://tailwindcss.com) v3.4
- **TypeScript**: Tipado estricto
- **Content**: Astro Content Collections
- **i18n**: Sistema nativo de Astro

## 🚀 Inicio Rápido

### Prerrequisitos

- Node.js >= 18.14.1
- npm o pnpm

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/fisio-landing.git
cd fisio-landing

# Instalar dependencias
npm install

# Copiar variables de entorno
cp .env.example .env

# Iniciar servidor de desarrollo
npm run dev
```

El sitio estará disponible en `http://localhost:4321`

### Comandos Disponibles

| Comando              | Descripción                                      |
| -------------------- | ------------------------------------------------ |
| `npm run dev`        | Inicia el servidor de desarrollo en `localhost:4321` |
| `npm run build`      | Valida tipos y genera el build de producción en `./dist/` |
| `npm run preview`    | Previsualiza el build localmente antes de deploy |
| `npm run astro`      | Ejecuta comandos CLI de Astro                   |

## 🌐 Sistema Multiidioma

El sitio soporta 3 idiomas con rutas específicas:

- **Catalán (predeterminado)**: `/` 
- **Español**: `/es/`
- **Inglés**: `/en/`

### Añadir nuevas traducciones

Edita el archivo `src/i18n/ui.ts`:

```typescript
export const ui = {
  ca: {
    'clave': 'Text en català',
  },
  es: {
    'clave': 'Texto en español',
  },
  en: {
    'clave': 'Text in English',
  }
}
```

Luego úsalo en tus componentes:

```astro
---
import { useTranslations } from '../i18n/utils';
const t = useTranslations(lang);
---

<h1>{t('clave')}</h1>
```

Consulta `MULTIIDIOMA.md` para más detalles.

```
/
├── public/              # Archivos estáticos
├── src/
│   ├── components/      # Componentes reutilizables
│   │   ├── Header.astro
│   │   └── Footer.astro
│   ├── content/         # Blog posts en Markdown
│   │   ├── config.ts
│   │   └── blog/
│   ├── layouts/         # Layouts de página
│   │   ├── Layout.astro
│   │   └── BlogPost.astro
│   └── pages/           # Páginas del sitio
│       ├── index.astro
│       └── blog/
│           ├── index.astro
│           └── [slug].astro
├── astro.config.mjs     # Configuración de Astro
├── tailwind.config.mjs  # Configuración de Tailwind
└── package.json
```

## 🚀 Cómo Empezar

### Requisitos Previos

- Node.js 18+ (actualiza tu versión actual)
- npm o yarn

### Instalación

1. Actualiza Node.js a la versión 18 o superior:
   ```bash
   # Con nvm (recomendado)
   nvm install 18
   nvm use 18
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

4. Abre tu navegador en `http://localhost:4321`

## 📝 Añadir Artículos al Blog

1. Crea un nuevo archivo `.md` en `src/content/blog/`
2. Añade el frontmatter con los metadatos:

```markdown
---
title: "Título del artículo"
description: "Descripción breve"
author: "Nombre del autor"
date: 2025-12-28
category: "deportiva"
tags: ["tag1", "tag2"]
---

Contenido del artículo aquí...
```

### Categorías Disponibles

- `deportiva` - Fisioterapia deportiva
- `traumatologica` - Fisioterapia traumatológica
- `neurologica` - Fisioterapia neurológica
- `pediatrica` - Fisioterapia pediátrica
- `respiratoria` - Fisioterapia respiratoria
- `geriatrica` - Fisioterapia geriátrica

## 🎨 Personalización

### Colores

Edita los colores en `tailwind.config.mjs`:

```javascript
colors: {
  primary: { ... },  // Color principal
  accent: { ... },   // Color de acento
}
```

### Datos de Contacto

Actualiza la información de contacto en:
- `src/components/Footer.astro`
- `src/pages/index.astro` (sección de contacto)

### Logo y Nombre

Busca "Axis Cambrils" en los archivos y reemplázalo con tu nombre de marca.

## 📦 Scripts Disponibles

```bash
npm run dev          # Servidor de desarrollo
npm run build        # Compilar para producción
npm run preview      # Vista previa de la build
npm run astro        # CLI de Astro
```

## 🌐 Despliegue

El proyecto está listo para desplegarse en:

- **Vercel** (recomendado)
- **Netlify**
- **GitHub Pages**
- Cualquier servidor con soporte para Node.js

### Ejemplo con Vercel:

```bash
npm install -g vercel
vercel
```

## 📄 Licencia

Proyecto privado - Axis Cambrils © 2025

## 🤝 Soporte

Para preguntas o soporte, contacta a: info@axiscambrils.com
