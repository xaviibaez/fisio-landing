# Centro de Fisioterapia

Landing page moderna y multiidioma para centro de fisioterapia, creada con Astro, TypeScript y Tailwind CSS.

## 🏥 Sobre el Proyecto

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
git clone https://github.com/xaviibaez/fisio-landing.git
cd fisio-landing

# Instalar dependencias usando node > 18
npm install

# Copiar variables de entorno
cp .env.example .env

# Inicia el servidor de backend (en una terminal):

pnpm run cms:server

# Deberías ver: "Server listening on port 8081" o similar.
# Asegúrate de que el servidor de Astro esté corriendo (en otra terminal o ya corriendo):

npm run dev

# Recarga la página del CMS en http://localhost:4321/admin.

# Alternativa: todo en un comando
# Si prefieres iniciar ambos servidores a la vez:

npm run dev:cms

# Esto iniciará:
# • El servidor de backend de Decap CMS en el puerto 8081
# • El servidor de desarrollo de Astro en el puerto 4321
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


## 🎨 Personalización

### Colores

Edita los colores en `tailwind.config.mjs`:

```javascript
colors: {
  primary: { ... },  // Color principal
  accent: { ... },   // Color de acento
}
```

## 📦 Scripts Disponibles

```bash
npm run dev          # Servidor de desarrollo
npm run build        # Compilar para producción
npm run preview      # Vista previa de la build
npm run astro        # CLI de Astro
```

## 🤝 Soporte

Para preguntas o soporte, contacta a: 241xavi@gmail.com
