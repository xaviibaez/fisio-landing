# Guía de Configuración de Decap CMS

Esta guía te explica todo lo que necesitas hacer **fuera del código** para que Decap CMS funcione correctamente.

## 📋 Requisitos Previos

1. **Repositorio Git**: Tu código debe estar en un repositorio Git (GitHub, GitLab, Bitbucket)
2. **Hosting con Git Gateway**: Necesitas un hosting que soporte Git Gateway (Netlify es el más común)

---

## 🚀 Opción 1: Configuración con Netlify (Recomendado)

### Paso 1: Conectar tu repositorio a Netlify

1. Ve a [Netlify](https://www.netlify.com/) y crea una cuenta (o inicia sesión)
2. Haz clic en **"Add new site"** → **"Import an existing project"**
3. Conecta tu repositorio de GitHub/GitLab/Bitbucket
4. Configura el build:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
5. Haz clic en **"Deploy site"**

### Paso 2: Habilitar Git Gateway

1. En el dashboard de Netlify, ve a **Site settings** → **Identity**
2. Haz clic en **"Enable Identity"**
3. En la sección **"Services"**, busca **"Git Gateway"** y haz clic en **"Enable Git Gateway"**
4. Esto creará automáticamente un backend para Decap CMS

### Paso 3: Configurar autenticación

1. En **Identity** → **Registration preferences**, selecciona:
   - **Registration**: **Invite only** (recomendado para seguridad)
   - O **Open** si quieres que cualquiera pueda registrarse
2. En **External providers**, puedes configurar:
   - **GitHub** (recomendado para desarrolladores)
   - **Google**
   - O dejar solo email/password

### Paso 4: Invitar usuarios

1. Ve a **Identity** → **Invite users**
2. Introduce el email del usuario que quieres invitar
3. El usuario recibirá un email de invitación
4. Una vez que acepte, podrá acceder a `/admin` en tu sitio

### Paso 5: Acceder al CMS

1. Ve a `https://tu-sitio.netlify.app/admin` (o tu dominio personalizado)
2. Inicia sesión con las credenciales configuradas
3. ¡Ya puedes empezar a crear contenido!

---

## 🔧 Opción 2: Configuración con GitHub (Sin Netlify)

Si prefieres usar GitHub directamente sin Netlify:

### Paso 1: Crear una GitHub App

1. Ve a tu repositorio en GitHub
2. Ve a **Settings** → **Developer settings** → **GitHub Apps**
3. Crea una nueva GitHub App con estos permisos:
   - **Repository contents**: Read & Write
   - **Repository metadata**: Read-only
   - **Pull requests**: Read & Write (opcional, para drafts)

### Paso 2: Actualizar config.yml

Cambia el backend en `public/admin/config.yml`:

```yaml
backend:
  name: github
  repo: usuario/repositorio  # Tu usuario/repo de GitHub
  branch: main
  base_url: https://api.github.com
  auth_type: pkce
```

### Paso 3: Configurar autenticación

1. Necesitarás configurar OAuth en GitHub
2. O usar el método de autenticación PKCE (más seguro)

**Nota**: Esta opción es más compleja y requiere más configuración técnica.

---

## 📝 Configuración Adicional

### Personalizar el CMS

Puedes editar `public/admin/config.yml` para:

1. **Cambiar el nombre de las colecciones**
2. **Añadir nuevos campos**
3. **Modificar los widgets** (editor de texto, imágenes, etc.)
4. **Configurar workflows editoriales** (drafts, revisión, etc.)

### Habilitar Drafts (Borradores)

Si quieres trabajar con borradores antes de publicar:

1. En `config.yml`, descomenta:
```yaml
backend:
  # ...
  publish_mode: editorial_workflow
```

2. Esto creará estados: **Draft** → **In Review** → **Ready** → **Published**

### Configurar Open Authoring (Para repos públicos)

Si tu repositorio es público y quieres que cualquiera pueda contribuir:

1. En `config.yml`, descomenta:
```yaml
backend:
  # ...
  open_authoring: true
```

2. Esto permitirá que usuarios hagan Pull Requests desde el CMS

---

## 🖼️ Gestión de Imágenes

### Configuración actual

- **Carpeta de medios**: `public/images/uploads`
- **URL pública**: `/images/uploads`

### Subir imágenes

1. En el CMS, cuando añadas una imagen, se guardará automáticamente en `public/images/uploads`
2. Las imágenes se subirán al repositorio junto con el contenido

### Optimización

**Recomendación**: Antes de subir imágenes, optimízalas:
- Usa [TinyPNG](https://tinypng.com/) o [Squoosh](https://squoosh.app/)
- Tamaño recomendado: máximo 1MB por imagen
- Formatos: JPG para fotos, PNG para gráficos, WebP si es posible

---

## 🔐 Seguridad

### Mejores Prácticas

1. **Usa "Invite only"** en Netlify Identity
2. **No compartas** las credenciales de admin
3. **Revisa regularmente** los usuarios con acceso
4. **Usa HTTPS** (Netlify lo proporciona automáticamente)
5. **Considera usar 2FA** si Netlify lo soporta

### Restringir acceso por IP (Opcional)

Si quieres restringir el acceso al CMS por IP, puedes:
1. Configurar reglas en Netlify
2. O usar un servicio de autenticación adicional

---

## 🐛 Solución de Problemas

### Error: "Failed to load config.yml"

**Solución**:
- Verifica que el archivo esté en `public/admin/config.yml`
- Asegúrate de que la sintaxis YAML sea correcta
- Revisa la consola del navegador para más detalles

### Error: "Git Gateway Error"

**Solución**:
- Verifica que Git Gateway esté habilitado en Netlify
- Asegúrate de que Identity esté activado
- Revisa los logs de Netlify

### Las imágenes no se cargan

**Solución**:
- Verifica que la carpeta `public/images/uploads` exista
- Asegúrate de que los permisos del repositorio sean correctos
- Revisa que la ruta en `config.yml` sea correcta

### No puedo iniciar sesión

**Solución**:
- Verifica que Identity esté habilitado en Netlify
- Asegúrate de haber aceptado la invitación (si es invite-only)
- Revisa tu email (incluida la carpeta de spam)
- Intenta resetear la contraseña

---

## 📚 Recursos Adicionales

- [Documentación oficial de Decap CMS](https://decapcms.org/docs/)
- [Documentación de Netlify Identity](https://docs.netlify.com/visitor-access/identity/)
- [Guía de Git Gateway](https://docs.netlify.com/visitor-access/git-gateway/)

---

## ✅ Checklist de Configuración

- [ ] Repositorio conectado a Netlify (o hosting con Git Gateway)
- [ ] Netlify Identity habilitado
- [ ] Git Gateway habilitado
- [ ] Usuarios invitados (si es invite-only)
- [ ] Acceso a `/admin` funcionando
- [ ] Prueba de creación de contenido exitosa
- [ ] Imágenes subiendo correctamente
- [ ] Cambios guardándose en el repositorio

---

## 🎯 Próximos Pasos

Una vez configurado:

1. **Crea tu primer post de blog** desde el CMS
2. **Añade un servicio** en cada idioma
3. **Sube imágenes** de ejemplo
4. **Revisa que todo se guarde correctamente** en el repositorio
5. **Comparte el acceso** con tu equipo (si aplica)

---

## 💡 Consejos

1. **Backup regular**: Aunque el contenido está en Git, haz backups periódicos
2. **Workflow**: Establece un proceso claro para crear/editar contenido
3. **Formato**: Mantén consistencia en el formato de los posts
4. **Imágenes**: Usa nombres descriptivos para las imágenes
5. **SEO**: Asegúrate de llenar todos los campos (title, description, etc.)

---

**¿Necesitas ayuda?** Revisa la documentación oficial o los logs de Netlify para más detalles sobre errores específicos.
