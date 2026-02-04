# Refactorización de código duplicado en *.astro

Documento de tareas para eliminar duplicación en archivos Astro. Marca cada item al completarlo.


## 5. Tarjeta de artículo de blog duplicada

**Archivos:** 
- `src/pages/index.astro` (líneas 299-321) - preview en home
- `src/pages/blog/index.astro` (líneas 47-76) - listado de blog

**Problema:** Misma estructura: icono documento, badge categoría, título, descripción, autor/fecha, enlace "Leer más".

**Tarea:**
- [ ] Crear `src/components/BlogCard.astro` con props `post`, `lang`, `t`, `blogPath` (o función para construir href)
- [ ] Usar en index.astro (sección blog preview)
- [ ] Usar en blog/index.astro (o BlogIndexContent si ya lo creaste)

---

## 6. Item de galería duplicado

**Archivos:**
- `src/pages/index.astro` (líneas 273-292) - preview galería en home
- `src/components/GalleryContent.astro` (líneas 30-60)

**Problema:** Estructura casi idéntica: overlay, gradiente, icono zoom, data-gallery-item.

**Tarea:**
- [ ] Crear `src/components/GalleryItem.astro` con props `src`, `alt`, `description`
- [ ] Usar en index.astro (preview galería)
- [ ] Usar en GalleryContent.astro

---

## 7. Texto hardcodeado en español (BlogPost.astro)

**Archivo:** `src/layouts/BlogPost.astro` (líneas 75-76)

**Texto hardcodeado:**
- "¿Necesitas ayuda profesional?"
- "Agenda tu cita con nuestro equipo de especialistas"

**Tarea:**
- [ ] Añadir claves de traducción en el sistema i18n (ui.ts o donde corresponda)
- [ ] Reemplazar texto por `{t('blog.cta.title')}` y `{t('blog.cta.subtitle')}` (o similar)

---

## 8. Aria-labels en catalán (GalleryModal.astro)

**Archivo:** `src/components/GalleryModal.astro`

**Ubicación:** Líneas 17, 27, 37

**Aria-labels actuales:**
- `aria-label="Tancar"`
- `aria-label="Imatge anterior"`
- `aria-label="Imatge següent"`

**Tarea:**
- [ ] Añadir traducciones para estos textos (ej: `gallery.modal.close`, `gallery.modal.prev`, `gallery.modal.next`)
- [ ] Pasar `lang` o `t` al componente GalleryModal
- [ ] Usar aria-labels dinámicos según idioma

---

## Orden sugerido de ejecución

1. **Fácil/impacto rápido:** 7 (traducciones), 8 (aria-labels)
2. **Componentes simples:** 4.1, 4.2, 4.3, 4.4 (ChecklistItem, FeatureCard, ValueItem, TestimonialCard)
3. **Componentes compartidos:** 6 (GalleryItem), 5 (BlogCard)
4. **Páginas completas:** 1 (Galería), 2 (Blog index), 3 (Blog slug)

---

## Notas

- Después de cada refactorización, ejecutar `pnpm build` (o `npm run build`) para verificar que todo compila.
- Probar navegación entre idiomas para asegurar que las rutas siguen funcionando.
- El archivo `index.astro`, `nosaltres` y `servicios` ya están bien factorizados (usan componentes o re-exportan).
