# Stagehand: Guía de Implementación para Testing Frontend

## Introducción

**Stagehand** es un framework de automatización de navegadores de código abierto desarrollado por Browserbase que combina el poder de la IA con la precisión del código. A diferencia de herramientas tradicionales como Playwright o Puppeteer que requieren selectores CSS/XPath frágiles, Stagehand permite interactuar con páginas web usando **lenguaje natural**.

### ¿Por qué Stagehand?

| Problema Tradicional | Solución Stagehand |
|---------------------|-------------------|
| Selectores frágiles que se rompen con cambios de UI | Acciones adaptativas usando IA |
| Scripts de test complejos y difíciles de mantener | Instrucciones en lenguaje natural |
| Dificultad para manejar contenido dinámico | Comprensión visual de interfaces |
| Tests que fallan con pequeños cambios de layout | Auto-healing automático |

---

## Conceptos Fundamentales

Stagehand ofrece **4 primitivas principales**:

### 1. `act()` - Ejecutar Acciones

Permite realizar acciones individuales en una página web usando lenguaje natural.

```typescript
// Ejemplos de acciones
await stagehand.act("click the login button");
await stagehand.act("fill the email field with test@example.com");
await stagehand.act("select 'Spain' from the country dropdown");
await stagehand.act("scroll down to the contact section");
```

**Acciones soportadas:**
- Click
- Fill (llenar campos)
- Type (escribir texto)
- Press (presionar teclas)
- Scroll
- Select (seleccionar de dropdown)

### 2. `extract()` - Extraer Datos

Permite extraer datos estructurados de una página usando schemas Zod.

```typescript
import { z } from "zod";

// Extraer un valor simple
const price = await stagehand.extract("extract the price", z.number());

// Extraer objeto estructurado
const product = await stagehand.extract(
  "extract product details",
  z.object({
    name: z.string(),
    price: z.number(),
    inStock: z.boolean()
  })
);

// Extraer array de elementos
const services = await stagehand.extract(
  "extract all services listed",
  z.array(z.object({
    title: z.string(),
    description: z.string()
  }))
);
```

### 3. `observe()` - Analizar la Página

Descubre qué acciones están disponibles en la página actual.

```typescript
const actions = await stagehand.observe("find all clickable buttons");
console.log(actions); // Lista de acciones posibles con selectores

// Usar una acción observada
const [loginButton] = await stagehand.observe("find the login button");
if (loginButton) {
  await stagehand.act(loginButton);
}
```

### 4. `agent()` - Flujos Autónomos

Ejecuta tareas complejas de múltiples pasos de forma autónoma.

```typescript
const agent = stagehand.agent({
  mode: "cua", // Computer Use Agent
  model: "google/gemini-2.5-computer-use-preview-10-2025"
});

await agent.execute({
  instruction: "Navigate to the contact page and fill out the contact form",
  maxSteps: 20
});
```

---

## Instalación

### 1. Instalar Dependencias

```bash
# npm
npm install @browserbasehq/stagehand

# pnpm
pnpm add @browserbasehq/stagehand

# yarn
yarn add @browserbasehq/stagehand
```

### 2. Configurar Variables de Entorno

Crear archivo `.env` con las API keys necesarias:

```env
# Para usar modelos de IA (elige uno o más)
OPENAI_API_KEY=tu_api_key
GOOGLE_GENERATIVE_AI_API_KEY=tu_api_key
ANTHROPIC_API_KEY=tu_api_key

# Para navegador en la nube (opcional)
BROWSERBASE_API_KEY=tu_api_key
BROWSERBASE_PROJECT_ID=tu_project_id
```

### 3. Requisitos Adicionales

- **Node.js** runtime (Bun también soportado excepto con Playwright)
- **Chrome** instalado localmente (si no usas Browserbase)
- **Zod** para schemas de datos (`npm install zod`)

---

## Configuración Básica

### Ejemplo Mínimo

```typescript
import "dotenv/config";
import { Stagehand } from "@browserbasehq/stagehand";

async function main() {
  // Inicializar Stagehand
  const stagehand = new Stagehand({
    env: "LOCAL", // o "BROWSERBASE" para cloud
    model: "google/gemini-2.5-flash" // Modelo recomendado
  });
  
  await stagehand.init();
  
  // Obtener la página
  const page = stagehand.context.pages()[0];
  
  // Navegar y realizar acciones
  await page.goto("https://tu-sitio.com");
  await stagehand.act("click the services button");
  
  // Cerrar
  await stagehand.close();
}

main();
```

### Configuración Avanzada

```typescript
const stagehand = new Stagehand({
  env: "LOCAL",
  model: "google/gemini-2.5-flash",
  
  // Habilitar caché para reducir costos
  cacheDir: "./stagehand-cache",
  
  // Nivel de logging (0 = mínimo, 1 = normal, 2 = verbose)
  verbose: 1,
  
  // Viewport personalizado
  browserSettings: {
    viewport: { width: 1288, height: 711 }
  }
});
```

---

## Modelos Disponibles

### Modelos Recomendados

| Caso de Uso | Modelo | Razón |
|-------------|--------|-------|
| **Producción** | `google/gemini-2.5-flash` | Rápido, preciso, económico |
| **Máxima inteligencia** | `google/gemini-3-pro-preview` | Mejor precisión en tareas difíciles |
| **Velocidad** | `google/gemini-2.5-flash` | Tiempos de respuesta más rápidos |
| **Bajo costo** | `google/gemini-2.5-flash` | Mejor valor por token |
| **Local/Offline** | `ollama/qwen3` | Sin costos de API |

### Modelos con Soporte CUA (Computer Use Agents)

Para el modo `agent()` con visión computacional:

| Proveedor | Modelo |
|-----------|--------|
| Google | `google/gemini-2.5-computer-use-preview-10-2025` |
| Anthropic | `anthropic/claude-sonnet-4-5-20250929` |
| OpenAI | `openai/computer-use-preview` |

---

## Implementación para Testing de fisio-landing

### Estructura Propuesta de Tests

```
tests/
├── e2e/
│   ├── navigation.test.ts      # Tests de navegación
│   ├── services.test.ts        # Tests de página de servicios
│   ├── contact.test.ts         # Tests de formulario de contacto
│   ├── gallery.test.ts         # Tests de galería
│   └── i18n.test.ts            # Tests de multiidioma
├── utils/
│   └── stagehand-setup.ts      # Configuración compartida
└── stagehand.config.ts         # Configuración global
```

### Ejemplo: Test de Navegación

```typescript
// tests/e2e/navigation.test.ts
import "dotenv/config";
import { Stagehand } from "@browserbasehq/stagehand";
import { z } from "zod";

describe("Navigation Tests", () => {
  let stagehand: Stagehand;
  
  beforeAll(async () => {
    stagehand = new Stagehand({
      env: "LOCAL",
      model: "google/gemini-2.5-flash",
      cacheDir: "./test-cache"
    });
    await stagehand.init();
  });
  
  afterAll(async () => {
    await stagehand.close();
  });
  
  test("should navigate to services page", async () => {
    const page = stagehand.context.pages()[0];
    await page.goto("http://localhost:4321");
    
    // Navegar a servicios
    await stagehand.act("click on the services link in the navigation");
    
    // Verificar que estamos en la página correcta
    const pageTitle = await stagehand.extract(
      "extract the main heading of the page",
      z.string()
    );
    
    expect(pageTitle.toLowerCase()).toContain("servei");
  });
  
  test("should change language to Spanish", async () => {
    const page = stagehand.context.pages()[0];
    await page.goto("http://localhost:4321");
    
    // Cambiar idioma
    await stagehand.act("click on the language selector");
    await stagehand.act("select Spanish from the dropdown");
    
    // Verificar URL
    const url = page.url();
    expect(url).toContain("/es/");
  });
});
```

### Ejemplo: Test de Servicios

```typescript
// tests/e2e/services.test.ts
import "dotenv/config";
import { Stagehand } from "@browserbasehq/stagehand";
import { z } from "zod";

describe("Services Page Tests", () => {
  let stagehand: Stagehand;
  
  beforeAll(async () => {
    stagehand = new Stagehand({
      env: "LOCAL",
      model: "google/gemini-2.5-flash"
    });
    await stagehand.init();
  });
  
  afterAll(async () => {
    await stagehand.close();
  });
  
  test("should display all services", async () => {
    const page = stagehand.context.pages()[0];
    await page.goto("http://localhost:4321/es/servicios");
    
    // Extraer todos los servicios mostrados
    const services = await stagehand.extract(
      "extract all service cards with their titles and descriptions",
      z.array(z.object({
        title: z.string(),
        description: z.string().optional()
      }))
    );
    
    expect(services.length).toBeGreaterThan(0);
    console.log(`Found ${services.length} services`);
  });
  
  test("should navigate to service detail page", async () => {
    const page = stagehand.context.pages()[0];
    await page.goto("http://localhost:4321/es/servicios");
    
    // Click en el primer servicio
    await stagehand.act("click on the first service card");
    
    // Verificar que estamos en página de detalle
    const hasDetailContent = await stagehand.extract(
      "is there detailed service information on this page?",
      z.boolean()
    );
    
    expect(hasDetailContent).toBe(true);
  });
});
```

### Ejemplo: Test con Agent (Flujo Completo)

```typescript
// tests/e2e/contact-flow.test.ts
import "dotenv/config";
import { Stagehand } from "@browserbasehq/stagehand";

describe("Contact Flow - Agent Mode", () => {
  let stagehand: Stagehand;
  
  beforeAll(async () => {
    stagehand = new Stagehand({
      env: "LOCAL",
      model: "google/gemini-2.5-flash"
    });
    await stagehand.init();
  });
  
  afterAll(async () => {
    await stagehand.close();
  });
  
  test("should complete contact form flow", async () => {
    const page = stagehand.context.pages()[0];
    await page.goto("http://localhost:4321");
    
    // Usar agent para flujo completo
    const agent = stagehand.agent({
      systemPrompt: "You are testing a physiotherapy clinic website."
    });
    
    const result = await agent.execute({
      instruction: `
        1. Navigate to the contact section
        2. Fill out the contact form with test data:
           - Name: Test User
           - Email: test@example.com
           - Message: This is a test message
        3. Verify the form is filled correctly
      `,
      maxSteps: 15
    });
    
    expect(result.success).toBe(true);
  });
});
```

---

## Buenas Prácticas

### 1. Usar Acciones Simples y Específicas

```typescript
// ✅ Correcto: Acciones simples y claras
await stagehand.act("click the login button");
await stagehand.act("type 'test@email.com' in the email field");
await stagehand.act("click submit");

// ❌ Incorrecto: Demasiado complejo
await stagehand.act("login with test@email.com and password123");
```

### 2. Validar con `observe()` Antes de Actuar

```typescript
// Verificar que el elemento existe antes de actuar
const [button] = await stagehand.observe("find the submit button");
if (button) {
  await stagehand.act(button);
} else {
  throw new Error("Submit button not found");
}
```

### 3. Usar Caché para Reducir Costos

```typescript
const stagehand = new Stagehand({
  env: "LOCAL",
  model: "google/gemini-2.5-flash",
  cacheDir: "./stagehand-cache" // Las acciones se cachean automáticamente
});
```

### 4. Proteger Datos Sensibles con Variables

```typescript
// Las variables NO se envían al proveedor de LLM
await stagehand.act("type %password% into the password field", {
  variables: {
    password: process.env.TEST_PASSWORD
  }
});
```

### 5. Manejar Timeouts Apropiadamente

```typescript
await stagehand.act("click the slow loading button", {
  timeout: 30000 // 30 segundos para elementos lentos
});
```

---

## Comparación: Stagehand vs Playwright Tradicional

### Playwright Tradicional

```typescript
// Frágil: depende de selectores específicos
await page.locator('[data-testid="login-btn"]').click();
await page.locator('#email').fill('test@email.com');
await page.locator('button[type="submit"]').click();
```

### Stagehand

```typescript
// Robusto: se adapta a cambios de UI
await stagehand.act("click the login button");
await stagehand.act("fill the email field with test@email.com");
await stagehand.act("click the submit button");
```

---

## Integración con Playwright

Stagehand puede integrarse con proyectos Playwright existentes:

```typescript
import { Stagehand } from "@browserbasehq/stagehand";
import { chromium } from "playwright";

// Usar Playwright page con Stagehand
const browser = await chromium.launch();
const playwrightPage = await browser.newPage();

const stagehand = new Stagehand({ env: "LOCAL" });
await stagehand.init();

// Usar act con página de Playwright
await playwrightPage.goto("https://example.com");
await stagehand.act("click the login button", { page: playwrightPage });
```

---

## Costos Estimados

| Modelo | Costo Aproximado por 1000 acciones |
|--------|-----------------------------------|
| `google/gemini-2.5-flash` | ~$0.10 - $0.50 |
| `anthropic/claude-haiku-4-5` | ~$0.25 - $1.00 |
| `openai/gpt-4o-mini` | ~$0.15 - $0.75 |
| `ollama/qwen3` (local) | $0 (solo recursos de CPU/GPU) |

**Nota:** El uso de caché puede reducir costos en 80-90% para tests repetitivos.

---

## Recursos Adicionales

- **Documentación oficial:** https://docs.stagehand.dev/
- **GitHub:** https://github.com/browserbase/stagehand
- **Evals (comparación de modelos):** https://stagehand.dev/evals
- **Discord:** https://stagehand.dev/discord
- **Director (generador de scripts con IA):** https://director.ai

---

## Próximos Pasos Recomendados

1. **Configurar el entorno**
   - Instalar dependencias
   - Configurar API keys
   - Crear estructura de carpetas para tests

2. **Crear tests básicos**
   - Test de navegación principal
   - Test de cambio de idioma
   - Test de carga de páginas de servicios

3. **Implementar tests avanzados**
   - Tests de formulario de contacto
   - Tests de galería con extracción de datos
   - Tests de flujos completos con agent

4. **Optimizar**
   - Implementar caché
   - Ajustar modelos según necesidades
   - Configurar CI/CD para ejecución automática

---

## Conclusión

Stagehand representa un avance significativo en testing de frontend, permitiendo crear tests más resilientes y fáciles de mantener gracias a su enfoque basado en IA. Para el proyecto fisio-landing, implementar Stagehand permitirá:

- **Tests multiidioma** más fáciles de escribir y mantener
- **Validación visual** del contenido de servicios
- **Flujos de usuario completos** con el modo agent
- **Menor fragilidad** ante cambios de diseño

La inversión inicial en configurar Stagehand se amortiza rápidamente con la reducción en mantenimiento de tests y la capacidad de detectar problemas que los tests tradicionales podrían pasar por alto.
