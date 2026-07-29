# Graph Report - E:\proyectos\AraucaCine  (2026-07-26)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 191 nodes · 224 edges · 16 communities (13 shown, 3 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `67719290`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- devDependencies
- compilerOptions
- dependencies
- App.tsx
- Contact.tsx
- News.tsx
- manifest.json
- scripts
- Nav.tsx
- graphify.js
- optimize-images.mjs
- vite.config.ts

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 18 edges
2. `scripts` - 8 edges
3. `cn()` - 7 edges
4. `Button` - 5 edges
5. `categories` - 4 edges
6. `news` - 4 edges
7. `ThemeToggle()` - 4 edges
8. `useReaction()` - 4 edges
9. `lib` - 4 edges
10. `Footer()` - 3 edges

## Surprising Connections (you probably didn't know these)
- `Reactions()` --calls--> `useReaction()`  [EXTRACTED]
  src/components/News.tsx → src/hooks/useReaction.ts
- `ThemeToggle()` --calls--> `useTheme()`  [EXTRACTED]
  src/components/ThemeToggle.tsx → src/hooks/useTheme.ts
- `VisitCounter()` --calls--> `useVisitCounter()`  [EXTRACTED]
  src/components/VisitCounter.tsx → src/hooks/useVisitCounter.ts

## Import Cycles
- None detected.

## Communities (16 total, 3 thin omitted)

### Community 0 - "devDependencies"
Cohesion: 0.06
Nodes (33): gh-pages, jsdom, devDependencies, gh-pages, jsdom, rollup-plugin-visualizer, sharp, tailwindcss (+25 more)

### Community 1 - "compilerOptions"
Cohesion: 0.08
Nodes (23): DOM, DOM.Iterable, ES2020, src, compilerOptions, allowImportingTsExtensions, baseUrl, isolatedModules (+15 more)

### Community 2 - "dependencies"
Cohesion: 0.09
Nodes (23): class-variance-authority, clsx, lucide-react, dependencies, class-variance-authority, clsx, lucide-react, @radix-ui/react-dialog (+15 more)

### Community 3 - "App.tsx"
Cohesion: 0.12
Nodes (11): News, About(), items, Help(), items, Hero(), programs, Button (+3 more)

### Community 4 - "Contact.tsx"
Cohesion: 0.13
Nodes (7): images, DialogContent, DialogOverlay, Input, Label, Textarea, cn()

### Community 5 - "News.tsx"
Cohesion: 0.18
Nodes (12): Footer(), techs, encode(), getNewsImageUrl(), news, Reactions(), reactionsConfig, updateOGMeta() (+4 more)

### Community 6 - "manifest.json"
Cohesion: 0.13
Nodes (14): background_color, categories, description, display, icons, lang, name, orientation (+6 more)

### Community 7 - "scripts"
Cohesion: 0.15
Nodes (12): name, private, scripts, build, deploy, dev, optimize-images, preview (+4 more)

### Community 8 - "Nav.tsx"
Cohesion: 0.36
Nodes (5): Nav(), scrollToSection(), sections, ThemeToggle(), useTheme()

## Knowledge Gaps
- **84 isolated node(s):** `name`, `private`, `version`, `type`, `dev` (+79 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `devDependencies` connect `devDependencies` to `scripts`?**
  _High betweenness centrality (0.091) - this node is a cross-community bridge._
- **Why does `dependencies` connect `dependencies` to `scripts`?**
  _High betweenness centrality (0.069) - this node is a cross-community bridge._
- **What connects `name`, `private`, `version` to the rest of the system?**
  _84 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `devDependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.06060606060606061 - nodes in this community are weakly interconnected._
- **Should `compilerOptions` be split into smaller, more focused modules?**
  _Cohesion score 0.08333333333333333 - nodes in this community are weakly interconnected._
- **Should `dependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.08695652173913043 - nodes in this community are weakly interconnected._
- **Should `App.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.1225296442687747 - nodes in this community are weakly interconnected._