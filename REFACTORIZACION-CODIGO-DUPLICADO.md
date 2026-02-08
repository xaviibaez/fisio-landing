# Refactorización de código duplicado en *.astro

Documento de tareas para eliminar duplicación en archivos Astro. Marca cada item al completarlo.


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
