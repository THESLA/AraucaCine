# Graph Report - AraucaCine  (2026-07-28)

## Corpus Check
- 47 files · ~322,695 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 263 nodes · 286 edges · 27 communities (20 shown, 7 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `48838ead`
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
- What You Must Do When Invoked
- graphify reference: extra exports and benchmark
- graphify reference: query, path, explain
- opencode.json
- graphify reference: add a URL and watch a folder
- graphify reference: commit hook and native CLAUDE.md integration
- graphify reference: incremental update and cluster-only
- graphify reference: GitHub clone and cross-repo merge
- graphify reference: transcribe video and audio
- AGENTS.md
- extraction-spec.md

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 18 edges
2. `What You Must Do When Invoked` - 12 edges
3. `/graphify` - 10 edges
4. `scripts` - 8 edges
5. `graphify reference: extra exports and benchmark` - 8 edges
6. `cn()` - 7 edges
7. `Button` - 5 edges
8. `graphify reference: query, path, explain` - 5 edges
9. `categories` - 4 edges
10. `news` - 4 edges

## Surprising Connections (you probably didn't know these)
- `Reactions()` --calls--> `useReaction()`  [EXTRACTED]
  src/components/News.tsx → src/hooks/useReaction.ts
- `ThemeToggle()` --calls--> `useTheme()`  [EXTRACTED]
  src/components/ThemeToggle.tsx → src/hooks/useTheme.ts
- `VisitCounter()` --calls--> `useVisitCounter()`  [EXTRACTED]
  src/components/VisitCounter.tsx → src/hooks/useVisitCounter.ts

## Import Cycles
- None detected.

## Communities (27 total, 7 thin omitted)

### Community 0 - "devDependencies"
Cohesion: 0.06
Nodes (33): gh-pages, jsdom, devDependencies, gh-pages, jsdom, rollup-plugin-visualizer, sharp, tailwindcss (+25 more)

### Community 1 - "compilerOptions"
Cohesion: 0.08
Nodes (23): DOM, DOM.Iterable, ES2020, src, compilerOptions, allowImportingTsExtensions, baseUrl, isolatedModules (+15 more)

### Community 2 - "dependencies"
Cohesion: 0.08
Nodes (25): class-variance-authority, clsx, framer-motion, lucide-react, dependencies, class-variance-authority, clsx, framer-motion (+17 more)

### Community 3 - "App.tsx"
Cohesion: 0.14
Nodes (9): News, About(), items, Help(), items, Hero(), programs, Button (+1 more)

### Community 4 - "Contact.tsx"
Cohesion: 0.12
Nodes (9): images, ButtonProps, buttonVariants, DialogContent, DialogOverlay, Input, Label, Textarea (+1 more)

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
Cohesion: 0.23
Nodes (8): Nav(), scrollToSection(), sections, ThemeToggle(), MagneticButton(), MagneticButtonProps, SPRING_CONFIG, useTheme()

### Community 16 - "What You Must Do When Invoked"
Cohesion: 0.08
Nodes (24): For /graphify add and --watch, For /graphify query, For the commit hook and native CLAUDE.md integration, For --update and --cluster-only, /graphify, Honesty Rules, Interpreter guard for subcommands, Part A - Structural extraction for code files (+16 more)

### Community 17 - "graphify reference: extra exports and benchmark"
Cohesion: 0.22
Nodes (8): graphify reference: extra exports and benchmark, Step 6b - Wiki (only if --wiki flag), Step 7 - Neo4j export (only if --neo4j or --neo4j-push flag), Step 7a - FalkorDB export (only if --falkordb or --falkordb-push flag), Step 7b - SVG export (only if --svg flag), Step 7c - GraphML export (only if --graphml flag), Step 7d - MCP server (only if --mcp flag), Step 8 - Token reduction benchmark (only if total_words > 5000)

### Community 18 - "graphify reference: query, path, explain"
Cohesion: 0.33
Nodes (5): For /graphify explain, For /graphify path, graphify reference: query, path, explain, Step 0 — Constrained query expansion (REQUIRED before traversal), Step 1 — Traversal

### Community 19 - "opencode.json"
Cohesion: 0.50
Nodes (3): plugin, $schema, .opencode/plugins/graphify.js

### Community 20 - "graphify reference: add a URL and watch a folder"
Cohesion: 0.50
Nodes (3): For /graphify add, For --watch, graphify reference: add a URL and watch a folder

### Community 21 - "graphify reference: commit hook and native CLAUDE.md integration"
Cohesion: 0.50
Nodes (3): For git commit hook, For native CLAUDE.md integration, graphify reference: commit hook and native CLAUDE.md integration

### Community 22 - "graphify reference: incremental update and cluster-only"
Cohesion: 0.50
Nodes (3): For --cluster-only, For --update (incremental re-extraction), graphify reference: incremental update and cluster-only

## Knowledge Gaps
- **131 isolated node(s):** `$schema`, `.opencode/plugins/graphify.js`, `name`, `private`, `version` (+126 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **7 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `devDependencies` connect `devDependencies` to `scripts`?**
  _High betweenness centrality (0.050) - this node is a cross-community bridge._
- **Why does `dependencies` connect `dependencies` to `scripts`?**
  _High betweenness centrality (0.040) - this node is a cross-community bridge._
- **What connects `$schema`, `.opencode/plugins/graphify.js`, `name` to the rest of the system?**
  _131 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `devDependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.06060606060606061 - nodes in this community are weakly interconnected._
- **Should `compilerOptions` be split into smaller, more focused modules?**
  _Cohesion score 0.08333333333333333 - nodes in this community are weakly interconnected._
- **Should `dependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.08 - nodes in this community are weakly interconnected._
- **Should `App.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.1368421052631579 - nodes in this community are weakly interconnected._