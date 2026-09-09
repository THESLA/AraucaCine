# Changelog - AraucaCine

Historial de cambios importantes del proyecto.

---

## 2026-09-09

### feat: restore hamburguesa news + new color palette + limpieza-cunetas news
- **Commit:** `4c158ab`
- **Cambios:**
  - Restaurada noticia parrilla-mordisco (hamburguesas)
  - Aplicada paleta de colores saiga antelope (#1a1a6e, #f5e6c8, #b5899a)
  - Agregada noticia limpieza-cunetas
  - Corregidas reacciones con fallback localStorage
  - Corregido contador de visitas con fallback localStorage

### fix: visitor counter and reactions show values immediately
- **Commit:** `ac76f43`
- **Cambios:**
  - Contador de visitas muestra valor inmediatamente desde localStorage
  - Reacciones muestran valores inmediatamente
  - Sincronización automática con CountAPI cuando está disponible

---

## 2026-09-07

### feat: add news article - limpieza de cunetas en Barrio Porvenir
- **Commit:** `cb6cb42`
- **Cambios:**
  - Nueva noticia sobre jornada de limpieza de cunetas
  - Imagen extraída del video C0007.MP4
  - Marcelo Arramires, presidente del barrio
  - Colaboración de Caribabare y equipo "escobitas"

---

## 2026-09-06

### feat: update color palette to match saiga antelope mascot
- **Commit:** `d7d4ce2`
- **Cambios:**
  - Dark theme: azul marino (#1a1a6e) background
  - Light theme: crema claro (#f5f0e8) background
  - Accents: rosa mauve (#b5899a)
  - Cards: azul medio (#2a2a7e) dark, crema (#ede5d8) light

---

## 2026-08-XX

### add: noticia Parrilla del Mordisco tricampeonato
- **Commit:** `f8cc68d`
- **Cambios:**
  - Noticia sobre hamburguesas de la Parrilla de Elvis
  - Tricampeonato de la hamburguesa #Reina
  - Colaboración con el barrio

### add: Separator shadcn + organización tarjeta noticias
- **Commit:** `3d65721`
- **Cambios:**
  - Componente Separator de shadcn/ui
  - Layout mejorado de tarjetas de noticias

### add: sección noticias en página principal + ruta dedicada
- **Commit:** `b49712a`
- **Cambios:**
  - News agregado a MainPage
  - Ruta /noticias funcional

### add: carrusel de noticias con navegación tipo testimonial
- **Commit:** `59f5165`
- **Cambios:**
  - Carrusel con framer-motion
  - Navegación por teclado, swipe, dots

### add: botón Noticias magnético
- **Commit:** `48838ea`
- **Cambios:**
  - MagneticButton con framer-motion
  - Botón "Noticias" magnético en Nav

---

## REGLAS APRENDIDAS

1. **NUNCA borrar noticias** - Solo agregar al inicio del array
2. **SIEMPRE IDs únicos** - No usar índices numéricos
3. **SIEMPRE fallback localStorage** - CountAPI puede fallar
4. **SIEMPRE verificar build** - `npm run build` antes de commit
5. **SIEMPRE deploy después de push** - `npx gh-pages -d dist`
