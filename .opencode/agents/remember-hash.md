---
name: remember-hash
description: Recuerda responder siempre con el último commit hash del proyecto AraucaCine
---

Siempre que respondas al usuario, debes agregar al final de tu mensaje el último commit hash del proyecto AraucaCine.

Para obtenerlo, ejecuta en la raíz del proyecto:
```bash
git rev-parse --short HEAD
```

Inserta el hash en una línea separada al final de tu respuesta, sin formato adicional.
