# Recomendaciones SEO - Fuera del Código

Este documento contiene todas las acciones que debes realizar **fuera del código** para mejorar el SEO de tu sitio web.

## 📋 Checklist de Implementación

### 1. Google Search Console

**Acción:** Configurar y verificar tu sitio en Google Search Console

**Pasos:**
1. Ve a [Google Search Console](https://search.google.com/search-console)
2. Añade tu propiedad: `https://www.axiscambrils.com`
3. Verifica la propiedad usando uno de estos métodos:
   - Archivo HTML (sube a `/public/`)
   - Meta tag (añade al `<head>`)
   - DNS (si tienes acceso)
4. Envía el sitemap: `https://www.axiscambrils.com/sitemap.xml`

**Beneficios:**
- Ver cómo Google indexa tu sitio
- Detectar errores de rastreo
- Ver qué palabras clave te traen tráfico
- Monitorear el rendimiento en búsquedas

---

### 2. Google My Business / Google Business Profile

**Acción:** Crear y optimizar tu perfil de Google Business

**Pasos:**
1. Ve a [Google Business Profile](https://www.google.com/business/)
2. Crea o reclama tu negocio
3. Completa TODOS los campos:
   - Nombre: "Axis Cambrils"
   - Categoría: "Fisioterapeuta" / "Centro de fisioterapia"
   - Dirección completa: Carrer de Sant Josep, 15, 43850 Cambrils, Tarragona
   - Teléfono: +34 977 79 54 33
   - Horario de atención
   - Fotos del centro (mínimo 10-15)
   - Descripción detallada de servicios
   - Enlace al sitio web

**Beneficios:**
- Aparecer en búsquedas locales ("fisioterapia Cambrils")
- Mostrar en Google Maps
- Recibir reseñas de clientes
- Aumentar visibilidad local

---

### 3. Bing Webmaster Tools

**Acción:** Configurar tu sitio en Bing (similar a Google Search Console)

**Pasos:**
1. Ve a [Bing Webmaster Tools](https://www.bing.com/webmasters)
2. Añade tu sitio
3. Verifica la propiedad
4. Envía el sitemap

**Beneficios:**
- Aumentar visibilidad en Bing (segundo motor de búsqueda más usado)
- Detectar problemas de indexación

---

### 4. Optimización de Imágenes

**Acción:** Crear y optimizar imágenes para SEO

**Imágenes necesarias:**
1. **Imagen OG (Open Graph):** `/public/og-image.jpg`
   - Tamaño: 1200x630px
   - Formato: JPG o PNG
   - Debe incluir: Logo, nombre del negocio, tagline
   - Peso: < 200KB

2. **Favicon mejorado:**
   - Crear favicon.ico (16x16, 32x32, 48x48)
   - Crear apple-touch-icon.png (180x180)
   - Añadir a `/public/`

3. **Imágenes de servicios:**
   - Optimizar todas las imágenes en `/src/assets/services/`
   - Usar herramientas como [TinyPNG](https://tinypng.com/) o [Squoosh](https://squoosh.app/)
   - Añadir texto alternativo descriptivo en el código

**Herramientas recomendadas:**
- [TinyPNG](https://tinypng.com/) - Comprimir imágenes
- [Squoosh](https://squoosh.app/) - Optimización avanzada
- [Canva](https://www.canva.com/) - Crear imágenes OG

---

### 5. Contenido y Keywords

**Acción:** Investigar y usar palabras clave relevantes

**Palabras clave principales:**
- fisioterapia Cambrils
- fisioterapeuta Cambrils
- centro fisioterapia Tarragona
- rehabilitación Cambrils
- drenaje linfático Cambrils
- fisioterapia deportiva Cambrils

**Herramientas:**
- [Google Keyword Planner](https://ads.google.com/home/tools/keyword-planner/)
- [Ubersuggest](https://neilpatel.com/es/ubersuggest/)
- [Answer The Public](https://answerthepublic.com/)

**Acciones:**
1. Crear contenido de blog regular (1-2 posts/mes)
2. Usar palabras clave de forma natural en títulos y contenido
3. Crear contenido local (ej: "Guía de fisioterapia en Cambrils")
4. Responder preguntas frecuentes en el blog

---

### 6. Enlaces Locales (Link Building)

**Acción:** Conseguir enlaces desde sitios locales relevantes

**Estrategias:**
1. **Directorios locales:**
   - Páginas Amarillas
   - Yelp
   - Foursquare
   - TripAdvisor (si aplica)

2. **Asociaciones profesionales:**
   - Colegio de Fisioterapeutas de Cataluña
   - Asociaciones locales de salud

3. **Colaboraciones:**
   - Gimnasios locales
   - Centros deportivos
   - Clínicas médicas
   - Blogs de salud locales

4. **Prensa local:**
   - Contactar medios locales de Cambrils/Tarragona
   - Ofrecer artículos sobre salud y bienestar

---

### 7. Reseñas y Reputación Online

**Acción:** Gestionar y fomentar reseñas positivas

**Plataformas importantes:**
1. **Google Business Profile** (más importante)
2. **Facebook**
3. **Yelp**
4. **Páginas Amarillas**

**Estrategia:**
- Pedir reseñas a clientes satisfechos (después del tratamiento)
- Responder TODAS las reseñas (positivas y negativas)
- Crear un proceso sistemático para solicitar reseñas
- Usar enlaces directos para facilitar el proceso

**Ejemplo de mensaje:**
> "¡Hola [Nombre]! Esperamos que tu tratamiento haya ido bien. Si tienes un momento, nos encantaría que compartieras tu experiencia en Google: [enlace]"

---

### 8. Redes Sociales

**Acción:** Optimizar perfiles sociales y publicar contenido regular

**Plataformas prioritarias:**
1. **Facebook**
   - Perfil completo y actualizado
   - Publicar 2-3 veces por semana
   - Compartir consejos de salud, casos de éxito, ofertas

2. **Instagram**
   - Fotos del centro, equipo, tratamientos
   - Stories diarias
   - Reels con ejercicios o consejos

3. **LinkedIn** (opcional pero recomendado)
   - Perfil profesional
   - Artículos sobre fisioterapia

**Beneficios SEO:**
- Señales sociales (aunque no son factor directo, ayudan)
- Tráfico de referencia
- Construcción de marca

---

### 9. Velocidad y Performance

**Acción:** Optimizar la velocidad del sitio

**Herramientas de análisis:**
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [WebPageTest](https://www.webpagetest.org/)

**Acciones:**
1. Comprimir imágenes (ya mencionado)
2. Habilitar compresión GZIP en el servidor
3. Usar CDN (Cloudflare es gratuito)
4. Minimizar CSS/JS
5. Lazy loading de imágenes (ya implementado en código)

**Objetivo:**
- PageSpeed Score: > 90 (móvil y desktop)
- Tiempo de carga: < 3 segundos

---

### 10. Analytics y Tracking

**Acción:** Configurar herramientas de análisis

**Google Analytics 4:**
1. Crear cuenta en [Google Analytics](https://analytics.google.com/)
2. Añadir el código de tracking al sitio
3. Configurar objetivos (citas, formularios, llamadas)
4. Revisar datos semanalmente

**Google Tag Manager (opcional pero recomendado):**
- Facilita la gestión de tags sin tocar código
- Útil para Facebook Pixel, otros trackers

**Beneficios:**
- Entender comportamiento de usuarios
- Ver qué páginas funcionan mejor
- Optimizar conversiones

---

### 11. SSL y Seguridad

**Acción:** Asegurar que el sitio tiene SSL activo

**Verificar:**
- URL debe ser `https://` (no `http://`)
- Certificado SSL válido
- Sin errores de seguridad en navegadores

**Si no tienes SSL:**
- Usar [Let's Encrypt](https://letsencrypt.org/) (gratis)
- O configurar con tu proveedor de hosting

---

### 12. Contenido Local

**Acción:** Crear contenido específico para Cambrils y Tarragona

**Ideas de contenido:**
1. "Guía completa de fisioterapia en Cambrils"
2. "Los mejores ejercicios para la playa en Cambrils"
3. "Fisioterapia para deportistas en Tarragona"
4. "Tratamientos de fisioterapia más demandados en Cambrils"
5. Casos de éxito locales (con permiso)

**Beneficios:**
- Mejor ranking en búsquedas locales
- Mayor relevancia para usuarios locales
- Más autoridad en el área

---

### 13. Schema.org Markup (Verificación)

**Acción:** Verificar que los schemas funcionan correctamente

**Herramientas:**
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Schema Markup Validator](https://validator.schema.org/)

**Qué verificar:**
- LocalBusiness schema aparece correctamente
- Article schema en posts del blog
- Service schema en páginas de servicios
- BreadcrumbList en todas las páginas

---

### 14. Mobile-First

**Acción:** Asegurar que el sitio es completamente responsive

**Verificar:**
- [Google Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)
- Probar en diferentes dispositivos
- Velocidad en móvil

**Ya implementado en código, pero verificar:**
- Todos los elementos son accesibles en móvil
- Formularios funcionan bien
- Botones tienen tamaño adecuado para touch

---

### 15. Competencia

**Acción:** Analizar la competencia local

**Herramientas:**
- [SEMrush](https://www.semrush.com/) (versión gratuita)
- [Ahrefs](https://ahrefs.com/) (versión gratuita limitada)
- Búsqueda manual en Google

**Qué analizar:**
- Qué palabras clave usan
- Qué contenido publican
- Dónde tienen enlaces
- Cómo estructuran su sitio

---

## 📊 Métricas a Monitorear

### Mensual:
- Tráfico orgánico (Google Analytics)
- Posiciones en Google (Google Search Console)
- Nuevas reseñas
- Enlaces entrantes

### Trimestral:
- PageSpeed Score
- Posiciones de palabras clave principales
- Conversiones (citas, llamadas)
- ROI de esfuerzos SEO

---

## 🎯 Objetivos a 6 Meses

1. **Tráfico orgánico:** Aumentar 50-100%
2. **Posiciones:** Top 3 para "fisioterapia Cambrils"
3. **Reseñas:** 20+ reseñas en Google (4+ estrellas)
4. **Enlaces:** 10+ enlaces de calidad desde sitios locales
5. **Conversiones:** Aumentar citas online 30%

---

## 📝 Notas Importantes

1. **SEO es a largo plazo:** Los resultados pueden tardar 3-6 meses
2. **Consistencia:** Publicar contenido regular es clave
3. **Calidad sobre cantidad:** Mejor 1 post excelente que 5 mediocres
4. **Local es clave:** Para un negocio local, el SEO local es más importante que el general
5. **Paciencia:** No esperes resultados inmediatos, pero sé constante

---

## 🔗 Recursos Útiles

- [Google Search Central](https://developers.google.com/search) - Documentación oficial
- [Moz Beginner's Guide to SEO](https://moz.com/beginners-guide-to-seo) - Guía completa
- [Ahrefs Blog](https://ahrefs.com/blog/) - Artículos sobre SEO
- [Search Engine Journal](https://www.searchenginejournal.com/) - Noticias SEO

---

## ✅ Checklist Rápido

- [ ] Google Search Console configurado
- [ ] Google Business Profile creado y optimizado
- [ ] Bing Webmaster Tools configurado
- [ ] Imagen OG creada y optimizada
- [ ] Favicon mejorado
- [ ] Google Analytics configurado
- [ ] SSL activo (https://)
- [ ] Primera reseña en Google
- [ ] Primer post de blog publicado
- [ ] Perfiles sociales actualizados
- [ ] Velocidad del sitio optimizada (>90 PageSpeed)
- [ ] Schema.org verificado con herramientas de Google

---

**Última actualización:** [Fecha]
**Próxima revisión:** [Fecha + 3 meses]
