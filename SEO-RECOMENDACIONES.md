# Recomendaciones SEO Externas - Axis Cambrils

Este documento contiene todas las acciones que debes realizar **fuera del código** para completar la optimización SEO del sitio web.

---

## 1. Google Search Console

### Verificación del sitio
1. Accede a [Google Search Console](https://search.google.com/search-console)
2. Añade la propiedad: `https://www.axiscambrils.com`
3. Verifica mediante:
   - Registro DNS (recomendado)
   - Archivo HTML en la raíz
   - Meta tag (ya puedes usar el existente en el código)

### Después de verificar
1. **Envía el sitemap**: `https://www.axiscambrils.com/sitemap-index.xml`
2. **Solicita indexación** de las páginas principales
3. **Revisa** el informe de cobertura semanalmente
4. **Monitoriza** las consultas de búsqueda y posiciones

---

## 2. Google Business Profile (Google My Business)

### Crear/Verificar el perfil
1. Accede a [Google Business Profile](https://business.google.com)
2. Busca "Axis Cambrils" o créalo si no existe
3. **Datos a incluir:**
   - Nombre: `Axis Cambrils - Centre de Fisioteràpia`
   - Categoría principal: `Fisioterapeuta`
   - Categorías secundarias: `Centro de rehabilitación`, `Clínica de salud`
   - Dirección: Carrer de Sant Josep, 15, 43850 Cambrils, Tarragona
   - Teléfono: +34 977 79 54 33
   - Sitio web: https://www.axiscambrils.com
   - Horario: Lunes a Viernes 9:00 - 21:00

### Optimización del perfil
1. **Sube fotos de calidad**:
   - Fachada exterior (para reconocimiento)
   - Interior del centro
   - Equipo profesional
   - Equipamiento

2. **Responde a todas las reseñas** (positivas y negativas)

3. **Publica actualizaciones** semanalmente:
   - Nuevos servicios
   - Consejos de salud
   - Ofertas especiales
   - Posts del blog

4. **Activa la mensajería** para consultas directas

---

## 3. Imágenes y Archivos Necesarios

### Crear og-image.jpg
Crea una imagen OG de **1200x630 píxeles** con:
- Logo de Axis Cambrils
- Texto: "Centre de Fisioteràpia a Cambrils"
- Colores corporativos (primary-600: #0891b2)
- Ubicarla en: `/public/og-image.jpg`

### Crear iconos PWA
Genera los iconos en las siguientes resoluciones y colócalos en `/public/icons/`:
- `icon-72x72.png`
- `icon-96x96.png`
- `icon-128x128.png`
- `icon-144x144.png`
- `icon-152x152.png`
- `icon-192x192.png`
- `icon-384x384.png`
- `icon-512x512.png`

**Herramienta recomendada**: [RealFaviconGenerator](https://realfavicongenerator.net/)

### Crear favicon.ico
Además del SVG, añade un `favicon.ico` en `/public/` para compatibilidad con navegadores antiguos.

---

## 4. Bing Webmaster Tools

1. Accede a [Bing Webmaster Tools](https://www.bing.com/webmasters)
2. Importa la configuración de Google Search Console (opción más fácil)
3. O verifica manualmente y envía el sitemap

---

## 5. Redes Sociales

### Configurar perfiles consistentes
Asegúrate de que todos los perfiles tengan:
- Mismo nombre: "Axis Cambrils"
- Misma descripción
- Enlace al sitio web
- Foto de perfil/logo consistente

### Plataformas recomendadas para fisioterapia
1. **Instagram** - Ideal para contenido visual de tratamientos
2. **Facebook** - Para comunidad local y reseñas
3. **LinkedIn** - Para credibilidad profesional
4. **YouTube** - Para vídeos de ejercicios y consejos

---

## 6. Directorios Locales y de Salud

### Registrar en directorios relevantes
1. **Páginas Amarillas** - https://www.paginasamarillas.es
2. **QDQ** - https://www.qdq.com
3. **Doctoralia** - https://www.doctoralia.es (muy importante para salud)
4. **TopDoctors** - https://www.topdoctors.es
5. **Colegio de Fisioterapeutas de Catalunya** - Directorio oficial
6. **Yelp** - https://www.yelp.es
7. **TripAdvisor** (si aplica turismo de salud)

### Información NAP consistente
**¡MUY IMPORTANTE!** Usa exactamente los mismos datos en TODOS los directorios:
- **N**ombre: Axis Cambrils
- **A**ddress: Carrer de Sant Josep, 15, 43850 Cambrils, Tarragona
- **P**hone: +34 977 79 54 33

---

## 7. Backlinks de Calidad

### Estrategias recomendadas
1. **Colaboraciones locales**:
   - Gimnasios de Cambrils
   - Clubs deportivos locales
   - Centros de yoga/pilates
   - Tiendas de deporte

2. **Medios locales**:
   - Diario de Tarragona
   - Revistas locales de Cambrils
   - Blogs de salud de la zona

3. **Guest posting**:
   - Escribir artículos para blogs de salud
   - Colaborar con otros fisioterapeutas

4. **Sponsors locales**:
   - Eventos deportivos
   - Carreras populares
   - Equipos deportivos

---

## 8. Google Analytics 4

### Configuración
1. Crea una propiedad en [Google Analytics](https://analytics.google.com)
2. Obtén el ID de medición (G-XXXXXXXXXX)
3. Añade el script al sitio (puedes usar Partytown para rendimiento)

### Eventos importantes a trackear
- Clics en "Reservar Cita"
- Clics en teléfono
- Clics en WhatsApp
- Formularios enviados
- Tiempo en página de servicios

---

## 9. Schema.org - Mejoras Adicionales

### Reseñas en Google
Cuando tengas reseñas reales en Google Business:
1. Actualiza el schema `AggregateRating` con datos reales
2. Archivo: `/src/utils/seo.ts` función `generateMedicalBusinessSchema`

### FAQs
Considera añadir una sección de preguntas frecuentes en la página principal o de servicios. El schema FAQPage ya está implementado en el código, solo necesitas usarlo.

---

## 10. Monitorización Continua

### Herramientas gratuitas
1. **Google Search Console** - Rendimiento en búsqueda
2. **Google Analytics** - Tráfico y comportamiento
3. **PageSpeed Insights** - Velocidad del sitio
4. **Lighthouse** - Auditoría completa (en Chrome DevTools)

### KPIs a seguir mensualmente
- Posición media en búsquedas
- Número de impresiones
- CTR (Click-Through Rate)
- Tráfico orgánico
- Tasa de rebote
- Conversiones (llamadas, formularios)

---

## 11. Contenido Continuo

### Blog - Calendario recomendado
Publica **al menos 2 artículos al mes** sobre:
- Ejercicios para problemas comunes
- Prevención de lesiones
- Explicación de tratamientos
- Casos de éxito (con permiso)
- Novedades del centro

### Keywords locales importantes
Optimiza contenido para:
- "fisioterapia Cambrils"
- "fisioterapeuta Cambrils"
- "drenaje linfático Tarragona"
- "suelo pélvico Cambrils"
- "rehabilitación Cambrils"
- "fisio cerca de mí"

---

## 12. Velocidad y Core Web Vitals

### Verificar regularmente
1. Accede a [PageSpeed Insights](https://pagespeed.web.dev)
2. Analiza `https://www.axiscambrils.com`
3. Objetivo: Puntuación > 90 en móvil y escritorio

### Optimizaciones de hosting
- Usa CDN (Cloudflare recomendado - gratuito)
- Activa compresión GZIP/Brotli
- Configura caché del navegador
- Usa HTTP/2 o HTTP/3

---

## 13. Seguridad

### SSL/HTTPS
- Asegúrate de que HTTPS esté activo
- Configura redirección de HTTP a HTTPS
- Verifica que no haya contenido mixto

### Headers de seguridad (en tu hosting)
```
X-Content-Type-Options: nosniff
X-Frame-Options: SAMEORIGIN
X-XSS-Protection: 1; mode=block
Referrer-Policy: strict-origin-when-cross-origin
```

---

## Checklist Resumen

### Prioridad Alta (hacer inmediatamente)
- [ ] Verificar Google Search Console
- [ ] Crear/verificar Google Business Profile
- [ ] Crear og-image.jpg (1200x630px)
- [ ] Crear iconos PWA
- [ ] Enviar sitemap

### Prioridad Media (primera semana)
- [ ] Registrar en Bing Webmaster Tools
- [ ] Registrar en Doctoralia
- [ ] Configurar Google Analytics 4
- [ ] Actualizar redes sociales

### Prioridad Normal (primer mes)
- [ ] Registrar en directorios locales
- [ ] Buscar colaboraciones locales
- [ ] Configurar CDN
- [ ] Crear calendario de contenido

### Continuo
- [ ] Publicar 2+ artículos/mes en el blog
- [ ] Responder reseñas
- [ ] Publicar en redes sociales
- [ ] Monitorizar métricas

---

## Recursos Útiles

- [Google Search Central](https://developers.google.com/search) - Documentación oficial SEO
- [Schema.org](https://schema.org) - Documentación de datos estructurados
- [Web.dev](https://web.dev) - Guías de rendimiento web
- [Ahrefs Blog](https://ahrefs.com/blog) - Estrategias SEO avanzadas
- [Moz Blog](https://moz.com/blog) - SEO y marketing digital

---

*Documento generado el 22 de Enero de 2026*
*Última actualización del código SEO: feature/seo-improvements*
