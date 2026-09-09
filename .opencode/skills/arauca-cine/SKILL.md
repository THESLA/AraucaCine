# Skill: AraucaCine

Reglas obligatorias y documentación completa del proyecto AraucaCine.

---

## ESTRUCTURA DEL PROYECTO

### Arquitectura
```
src/
├── components/
│   ├── Nav.tsx              # Navegación fija superior
│   ├── Hero.tsx             # Sección principal con imagen de fondo
│   ├── About.tsx            # Sección "Sobre Nosotros"
│   ├── Programs.tsx         # Programas del NGO
│   ├── Gallery.tsx          # Galería de fotos
│   ├── Videos.tsx           # Sección de videos
│   ├── News.tsx             # Sistema de noticias (carrusel)
│   ├── Contact.tsx          # Formulario de contacto
│   ├── Footer.tsx           # Pie de página + contador de visitas
│   ├── ThemeToggle.tsx      # Botón cambiar tema claro/oscuro
│   ├── VisitCounter.tsx     # Contador de visitas globales
│   └── ui/                  # Componentes shadcn/ui
├── hooks/
│   ├── useReaction.ts       # Sistema de reacciones globales
│   └── useVisitCounter.ts   # Contador de visitas con fallback
├── App.tsx                  # Router principal
└── index.css                # Paleta de colores y estilos globales
```

### Flujo de datos
```
Usuario visita → useVisitCounter incrementa → CountAPI o localStorage
Usuario da like → useReaction incrementa → CountAPI o localStorage
Nueva noticia → Se agrega AL INICIO del array → Las anteriores se conservan
```

---

## REGLAS OBLIGATORIAS

### 1. NOTICIAS - NUNCA BORRAR, SOLO AGREGAR
```typescript
// Estructura de noticia
{
  id: "nombre-unico-descriptivo",  // NUNCA usar números
  img: "images/nombre-imagen.jpg", // Optimizada, max 100KB
  date: "DD Mes YYYY",             // Formato español
  title: "Título descriptivo",
  excerpt: "Descripción detallada...",
  shareText: "Texto para compartir"
}
```

**REGLA:** Las noticias se AGREGAN al inicio del array `news` en `News.tsx`.
NUNCA se reemplazan ni se eliminan existentes.
El array crece: nuevas al inicio, anteriores se conservan.

### 2. PALETA DE COLORES - CAMBIABLE EN CUALquier MOMENTO
```css
/* index.css - Variables CSS */
@theme {
  --color-background: #1a1a6e;      /* Fondo principal */
  --color-foreground: #f5e6c8;      /* Texto principal */
  --color-card: #2a2a7e;            /* Fondo de cards */
  --color-card-foreground: #f5e6c8; /* Texto de cards */
  --color-accent: #f5e6c8;          /* Acentos */
  --color-accent-hover: #f0deb4;    /* Hover states */
  --color-muted: rgba(181,137,154,0.7); /* Texto secundario */
  --color-border: rgba(181,137,154,0.3); /* Bordes */
}
```

**REGLA:** Para cambiar colores, solo modificar estas variables.
Los componentes usan estas variables automáticamente.

### 3. REACCIONES - SISTEMA GLOBAL CON FALLBACK
```typescript
// useReaction.ts
- CountAPI global: cualquier persona en el mundo puede dar like
- Fallback: localStorage si CountAPI falla
- Keys: arauacine-news-{id}-{reaction}
- Cada noticia tiene ID único (no índice)
```

**REGLA:** Al crear noticia, verificar que el `id` es único y descriptivo.

### 4. CONTADOR DE VISITAS - GLOBAL CON FALLBACK
```typescript
// useVisitCounter.ts
- CountAPI global: cuenta visitas de todos los usuarios
- Fallback: localStorage si CountAPI falla
- Key: arauacine-visits
```

**REGLA:** VisitCounter siempre en Footer.tsx.

---

## CHECKLIST POST-CAMBIO

Antes de hacer commit, VERIFICAR:

- [ ] `npm run build` exitoso
- [ ] Noticias: NUEVAS agregadas al inicio, EXISTENTES conservadas
- [ ] Reacciones: IDs únicos, no índices
- [ ] Colores: variables CSS actualizadas si es necesario
- [ ] VisitCounter: presente en Footer
- [ ] Imágenes: optimizadas en public/images/
- [ ] Commit con hash descriptivo
- [ ] Push a master
- [ ] Deploy ejecutado

---

## COMMITS - FORMATO

```
tipo: descripción corta

- Detalle 1
- Detalle 2
- Detalle 3
```

Tipos:
- `feat:` nueva funcionalidad
- `fix:` corrección de bug
- `restore:` restaurar estado anterior
- `optim:` optimización
- `docs:` documentación

Ejemplo:
```
feat: add news article - limpieza de cunetas

- New news entry with ID limpieza-cunetas
- Image optimized to 96KB
- Added at beginning of news array
- All previous news preserved
```

---

## DESPLIEGUE

```bash
# 1. Build
npm run build

# 2. Commit
git add .
git commit -m "tipo: descripción"

# 3. Push
git push origin master

# 4. Deploy
npx gh-pages -d dist -m "Deploy {hash}"
```

---

## CAMBIAR COLORES

1. Editar `src/index.css`
2. Modificar variables CSS en `@theme` y `.light`
3. Actualizar hardcoded colors si es necesario:
   - `Nav.tsx`: inline styles
   - `index.css`: `.nav-underline`, `.alert-dot`, `.nav-hover`
4. Build y deploy

---

## AGREGAR NOTICIA

1. Crear imagen optimizada en `public/images/`
2. Abrir `src/components/News.tsx`
3. Agregar objeto al INICIO del array `news`
4. Verificar `id` único
5. Build y deploy

---

## SOLUCIÓN DE PROBLEMAS

### Reacciones no funcionan
- Verificar IDs únicos en noticias
- Verificar que CountAPI no está bloqueado
- Fallback a localStorage debería funcionar

### Contador de visitas no funciona
- Verificar que VisitCounter está en Footer
- Verificar que useVisitCounter tiene fallback
- Hard refresh para limpiar caché

### Colores no se ven
- Verificar index.css tiene variables correctas
- Verificar que no hay hardcoded colors sobreescribiendo
- Hard refresh para limpiar caché

### Noticias desaparecieron
- NUNCA hacer reset a commits anteriores
- Verificar que se agregaron al inicio del array
- No reemplazar array completo
