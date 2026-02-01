# Sistema Multiidioma - Axis Cambrils

Se ha configurado soporte para **3 idiomas**: Català (predeterminado), Español e Inglés.

## ✅ Lo que está configurado:

### 1. Configuración i18n en Astro
- Catalán (`ca`) - idioma predeterminado (sin prefijo en URL)
- Español (`es`) - prefijo `/es/`
- Inglés (`en`) - prefijo `/en/`

### 2. Archivos de traducción
Todas las traducciones están en `/src/i18n/ui.ts` organizadas por secciones:
- Navegación
- Hero
- Servicios
- Sobre nosotros
- Blog
- Testimonios
- Contacto
- Footer

### 3. Componentes actualizados
- ✅ **Header** - con selector de idioma
- ✅ **Footer** - traducido
- ✅ **LanguagePicker** - selector de idioma funcional

## 🚀 Cómo usar las traducciones:

### En cualquier página `.astro`:

```astro
---
import { getLangFromUrl, useTranslations } from '../i18n/utils';

const lang = getLangFromUrl(Astro.url);
const t = useTranslations(lang);
---

<h1>{t('hero.title')}</h1>
<p>{t('hero.subtitle')}</p>
```

### Para crear enlaces con idioma:

```astro
---
import { getLocalizedPath } from '../i18n/utils';
---

<a href={getLocalizedPath('/blog', lang)}>Blog</a>
```

## 📝 Estructura de URLs:

```
/                    → Catalán (predeterminado)
/es/                 → Español
/en/                 → Inglés

/blog                → Blog en catalán
/es/blog             → Blog en español
/en/blog             → Blog en inglés
```

## 🔧 Próximos pasos para completar:

### 1. Actualizar página principal (index.astro)

Reemplazar el contenido estático con traducciones:

```astro
// Antes:
<h1>Tu bienestar, nuestra misión</h1>

// Después:
<h1>{t('hero.title')}</h1>
```

### 2. Crear páginas para otros idiomas

**Opción A - Páginas separadas (recomendado para contenido muy diferente):**
```
/src/pages/index.astro         → Catalán
/src/pages/es/index.astro      → Español
/src/pages/en/index.astro      → Inglés
```

**Opción B - Una sola página dinámica (recomendado para contenido similar):**
Usar el mismo `index.astro` y detectar el idioma automáticamente.

### 3. Blog multiidioma

Para posts del blog en varios idiomas, crear:
```
/src/content/blog/ca/ejercicios-dolor-lumbar.md
/src/content/blog/es/ejercicios-dolor-lumbar.md
/src/content/blog/en/lower-back-exercises.md
```


## 📋 Añadir nuevas traducciones:

1. Abre `/src/i18n/ui.ts`
2. Añade la nueva clave en los 3 idiomas:

```typescript
export const ui = {
  ca: {
    // ... traducciones existentes
    'new.key': 'Text en català',
  },
  es: {
    // ... traducciones existentes
    'new.key': 'Texto en español',
  },
  en: {
    // ... traducciones existentes
    'new.key': 'Text in English',
  },
}
```

## 🎨 El selector de idioma

Ya está funcional en el header. Muestra:
- Bandera/icono de idioma
- Idioma actual (CA, ES, EN)
- Menú desplegable con los 3 idiomas
- Mantiene la misma página al cambiar idioma

## ⚡ Comandos útiles:

```bash
# Ver el sitio en catalán
http://localhost:4321/

# Ver el sitio en español
http://localhost:4321/es/

# Ver el sitio en inglés
http://localhost:4321/en/
```

## 💡 Tips:

1. **Mantén las claves cortas pero descriptivas**
   - ✅ `hero.title`
   - ❌ `this.is.a.very.long.key.for.the.hero.title`

2. **Agrupa por sección**
   - Todas las claves de servicios empiezan con `services.`
   - Todas las del blog con `blog.`

3. **Usa TypeScript**
   - Las traducciones están tipadas
   - VSCode te sugerirá las claves disponibles

4. **Traducción progresiva**
   - Puedes ir traduciendo sección por sección
   - Si falta una traducción, se usa la del idioma predeterminado

## 🌐 Ejemplo completo de página traducida:

```astro
---
import Layout from '../layouts/Layout.astro';
import { getLangFromUrl, useTranslations, getLocalizedPath } from '../i18n/utils';

const lang = getLangFromUrl(Astro.url);
const t = useTranslations(lang);
---

<Layout title={t('hero.title')}>
  <h1>{t('hero.title')}</h1>
  <p>{t('hero.subtitle')}</p>
  <a href={getLocalizedPath('/#contact', lang)}>
    {t('nav.contact')}
  </a>
</Layout>
```

---

**¿Necesitas ayuda?** Revisa los archivos ya traducidos:
- `/src/components/Header.astro`
- `/src/components/Footer.astro`
- `/src/i18n/ui.ts`
