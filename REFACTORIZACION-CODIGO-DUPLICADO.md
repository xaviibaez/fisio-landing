# Refactorización de código duplicado en *.astro

Documento de tareas para eliminar duplicación en archivos Astro. Marca cada item al completarlo.


## 3. Páginas detalle de blog [slug] (3 archivos ~90% duplicados)

**Archivos afectados:**
- `src/pages/blog/[slug].astro`
- `src/pages/en/blog/[slug].astro`
- `src/pages/es/blog/[slug].astro`

**Problema:** Solo cambian la ruta de import de BlogPost y el filtro de idioma en getCollection (`'ca'`, `'en'`, `'es'`).

**Tarea (opción A - ruta dinámica):**
- [ ] Crear `src/pages/[lang]/blog/[slug].astro` con parámetro `lang`
- [ ] Consolidar getStaticPaths para generar rutas de los 3 idiomas
- [ ] Eliminar los 3 archivos actuales (requiere verificar que las URLs sigan siendo correctas: `/blog/x`, `/en/blog/x`, `/es/blog/x`)

**Tarea (opción B - componente compartido):**
- [ ] Crear componente que reciba `post` y `lang` como props
- [ ] Hacer que cada archivo [slug] pase el idioma correspondiente al componente

---

## 4. Patrones repetidos en index.astro

**Archivo:** `src/pages/index.astro` (~460 líneas)

### 4.1 Checklist items (6 repeticiones)

**Ubicación:** Líneas 131-171 (sección "What is Physiotherapy")

**Patrón repetido:**
```astro
<li class="flex items-start gap-3">
  <svg class="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" ...>
    <path stroke-linecap="round" ... d="M5 13l4 4L19 7"></path>
  </svg>
  <span class="text-gray-700">{t('whatIs.conditions.XXX')}</span>
</li>
```

**Tarea:**
- [ ] Crear `src/components/ChecklistItem.astro` con prop `text`
- [ ] Reemplazar las 6 repeticiones por el componente

---

### 4.2 Feature boxes (3 repeticiones)

**Ubicación:** Líneas 215-245 (sección About - profesionales, tecnología, personalizado)

**Patrón repetido:** Icono + título + descripción en bloque flex.

**Tarea:**
- [ ] Crear `src/components/FeatureCard.astro` con props `title`, `description`, `icon` (o `iconKey`)
- [ ] Reemplazar las 3 repeticiones por el componente

---

### 4.3 Values list items (4 repeticiones)

**Ubicación:** Líneas 251-276 (excelencia, empatía, innovación, resultados)

**Patrón repetido:** Icono check + `<strong>título</strong> texto`

**Tarea:**
- [ ] Crear `src/components/ValueItem.astro` con props `title`, `text`
- [ ] Reemplazar las 4 repeticiones por el componente

---

### 4.4 Tarjetas de testimonios (3 repeticiones)

**Ubicación:** Líneas 325-379

**Patrón repetido:** Estrellas + cita + avatar + nombre + info del paciente

**Tarea:**
- [ ] Crear `src/components/TestimonialCard.astro` con props `text`, `name`, `info`, `initials`
- [ ] Reemplazar las 3 tarjetas por el componente

---

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
