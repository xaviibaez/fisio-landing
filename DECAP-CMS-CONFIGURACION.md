# ✅ Configuración de Decap CMS - Completada

## Cambios Realizados (Actualización: Gestión de Imágenes)

### Gestión Completa de Imágenes

Se ha añadido la capacidad de gestionar TODAS las imágenes de la web desde Decap CMS:

**Nuevas Colecciones de Archivos:**

1. **Configuració del Lloc** - Configuración general del sitio
   - Logo, favicon, imagen de fondo del hero
   - Datos de contacto (email, teléfonos, dirección)
   - Redes sociales

2. **Galeria d'Imatges** - Gestión de la galería
   - Añadir/eliminar/reordenar imágenes
   - Títulos y descripciones en los 3 idiomas

3. **Equip** - Gestión del equipo
   - Fotos de los miembros del equipo
   - Nombres, roles, formación y cursos en los 3 idiomas

**Archivos de Datos Creados:**
- `src/data/gallery.json` - Configuración de la galería
- `src/data/team.json` - Configuración del equipo
- `src/data/site-settings.json` - Configuración del sitio

**Estructura de Imágenes:**
```
public/images/
├── gallery/     # Imágenes de la galería
├── team/        # Fotos del equipo
├── services/    # Imágenes de servicios
└── uploads/     # Subidas desde el CMS
```

---

## Cambios Realizados Anteriormente

### 1. ✅ Estructura de Carpetas para Blog Multiidioma
Se crearon las carpetas necesarias para organizar el blog por idiomas:
- `src/content/blog/ca/` - Blog en catalán
- `src/content/blog/es/` - Blog en español  
- `src/content/blog/en/` - Blog en inglés

### 2. ✅ Configuración de Decap CMS (`public/admin/config.yml`)
Se actualizó completamente para soportar multiidioma:

**Blog:**
- 3 colecciones separadas: `blog_ca`, `blog_es`, `blog_en`
- Campo `lang` oculto automático en cada colección
- Categorías traducidas según el idioma
- Cada colección apunta a su carpeta correspondiente

**Servicios:**
- Se añadió campo `lang` oculto a las 3 colecciones existentes
- `services_ca`, `services_es`, `services_en`

### 3. ✅ Content Collections (`src/content/config.ts`)
Se actualizó el schema para incluir el campo `lang`:

```typescript
// Blog Collection
lang: z.enum(['ca', 'es', 'en'])

// Services Collection  
lang: z.enum(['ca', 'es', 'en'])
```

### 4. ✅ Migración de Posts Existentes
Los 3 posts del blog se movieron a `/src/content/blog/es/` con el campo `lang: "es"` añadido:
- `ejercicios-dolor-lumbar.md`
- `ergonomia-teletrabajo.md`
- `prevencion-lesiones-running.md`

### 5. ✅ Actualización de Páginas del Blog
Se actualizaron todas las páginas para filtrar posts por idioma:

**Páginas actualizadas:**
- `/src/pages/blog/index.astro` - Filtra posts en catalán
- `/src/pages/blog/[slug].astro` - Solo posts en catalán
- `/src/pages/es/blog/index.astro` - Filtra posts en español
- `/src/pages/es/blog/[slug].astro` - Solo posts en español
- `/src/pages/en/blog/index.astro` - Filtra posts en inglés
- `/src/pages/en/blog/[slug].astro` - Solo posts en inglés

Cada página ahora usa:
```typescript
const allPosts = await getCollection('blog', (entry) => {
  return entry.data.lang === lang;
});
```

### 6. ✅ Servicios Actualizados
Se añadió el campo `lang` a TODOS los archivos markdown de servicios existentes:
- Servicios CA: `lang: "ca"`
- Servicios ES: `lang: "es"`
- Servicios EN: `lang: "en"`

---

## 📋 Siguientes Pasos

### 1. **Actualizar Node.js** ⚠️ IMPORTANTE
Tu proyecto requiere Node.js >= 18.14.1, pero tienes instalada la versión 16.20.2.

**Opciones:**
- Instalar [Node.js LTS](https://nodejs.org/) (recomendado: v20.x)
- Usar [nvm](https://github.com/nvm-sh/nvm) para gestionar versiones:
  ```bash
  nvm install 20
  nvm use 20
  ```

### 2. **Verificar la Configuración**
Una vez actualizado Node.js, verifica que todo compile correctamente:

```bash
npm install
npx astro check
npm run dev
```

### 3. **Configurar Netlify Identity (si usas Netlify)**
Para que Decap CMS funcione correctamente:

1. Ve a tu sitio en Netlify Dashboard
2. Activa **Identity** en Settings → Identity
3. Activa **Git Gateway** en Settings → Identity → Services
4. Invita usuarios desde Settings → Identity → Invite users
5. Configura registration: "Invite only" (recomendado)

### 4. **Probar el CMS**
Accede a `/admin` en tu sitio:
- Desarrollo: `http://localhost:4321/admin`
- Producción: `https://tu-sitio.netlify.app/admin`

### 5. **Crear Contenido de Ejemplo**
Ahora puedes crear posts de blog en los 3 idiomas desde el panel de administración:
- Blog (Català) - Creará posts en `src/content/blog/ca/`
- Blog (Español) - Creará posts en `src/content/blog/es/`
- Blog (English) - Creará posts en `src/content/blog/en/`

### 6. **Workflow Recomendado**
1. Crea un post en español usando el CMS
2. Traduce y crea las versiones en catalán e inglés
3. Usa el mismo slug para facilitar la navegación entre idiomas
4. Las imágenes se guardarán en `/public/images/uploads/`

---

## 🎯 Estructura Final del Proyecto

```
src/content/
├── blog/
│   ├── ca/          # Posts en catalán
│   ├── es/          # Posts en español (3 posts actuales)
│   └── en/          # Posts en inglés
└── services/
    ├── ca/          # Servicios en catalán (con lang)
    ├── es/          # Servicios en español (con lang)
    └── en/          # Servicios en inglés (con lang)
```

---

## ✅ Checklist de Verificación

- [x] Estructura de carpetas creada
- [x] Configuración de Decap CMS actualizada
- [x] Content Collections schema actualizado
- [x] Posts existentes migrados
- [x] Páginas del blog actualizadas
- [x] Campo `lang` añadido a todos los servicios
- [ ] Node.js actualizado a v18+
- [ ] `npm install` ejecutado
- [ ] `astro check` sin errores
- [ ] Servidor dev funcionando
- [ ] Netlify Identity configurado
- [ ] `/admin` accesible y funcional

---

## 🐛 Posibles Problemas

### Error: "Node.js version not supported"
**Solución:** Actualiza Node.js a versión 18 o superior

### Error al acceder a `/admin`
**Solución:** Verifica que Netlify Identity esté activado y Git Gateway configurado

### Posts no aparecen en el idioma correcto
**Solución:** Verifica que el campo `lang` esté presente en el frontmatter del post

### Errores de TypeScript
**Solución:** Ejecuta `npx astro check` para ver detalles específicos

---

## 📚 Recursos Adicionales

- [Documentación de Decap CMS](https://decapcms.org/docs/)
- [Astro Content Collections](https://docs.astro.build/en/guides/content-collections/)
- [Netlify Identity](https://docs.netlify.com/visitor-access/identity/)

---

**Estado:** ✅ Configuración completada - Listo para usar después de actualizar Node.js
