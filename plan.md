# 🚀 Plan de Ejecución: AI Developer Assistant

## 📋 Fase 1: Cimientos y Backend (Prioridad Alta)
*El objetivo aquí es tener la "inteligencia" funcionando, aunque no haya interfaz.*

- [ ] **Setup Inicial**
    - [ ] Inicializar repositorio Git.
    - [ ] Crear carpeta `/backend` e iniciar proyecto Node.js (`npm init`).
    - [ ] Instalar dependencias: `express`, `cors`, `dotenv` y el SDK de la IA (ej. `openai`).
- [ ] **Configuración de IA**
    - [ ] Obtener API Key (OpenAI, Anthropic o Google Gemini).
    - [ ] Crear archivo `.env` para proteger la Key.
    - [ ] Crear un archivo `services/ai.service.js` para centralizar la lógica de las llamadas a la API.
- [ ] **Desarrollo de Endpoints**
    - [ ] **POST** `/api/improve-text`: Configurar el *System Prompt* para que actúe como editor técnico.
    - [ ] **POST** `/api/explain-code`: Configurar el *System Prompt* para que explique lógica de programación de forma sencilla.
- [ ] **Pruebas de Backend**
    - [ ] Probar ambos endpoints usando Postman o Insomnia.

---

## 🎨 Fase 2: Frontend Base (Prioridad Media)
*Conectar la interfaz con la lógica que ya creaste.*

- [ ] **Setup de Angular**
    - [ ] Crear proyecto con Angular CLI (`ng new ai-assistant`).
    - [ ] Generar componentes: `InputArea`, `OutputDisplay` y `Dashboard`.
    - [ ] Configurar `HttpClientModule` para las peticiones.
- [ ] **Capa de Servicios**
    - [ ] Crear `services/ai-api.service.ts` para conectar con el backend de Node.js.
- [ ] **Lógica de Interfaz**
    - [ ] Implementar `FormGroup` o `ngModel` para capturar el texto del usuario.
    - [ ] Crear funciones para los botones: `onImproveText()` y `onExplainCode()`.
    - [ ] Manejar estados de carga (un simple spinner o texto de "Procesando...").

---

## ✨ Fase 3: Pulido y UX (Prioridad Estética)
*Hacer que la herramienta sea agradable de usar.*

- [ ] **Diseño Visual**
    - [ ] Implementar un layout limpio (puedes usar CSS puro o Tailwind para ir rápido).
    - [ ] Diferenciar visualmente el área de código del área de texto (usar fuentes monoespaciadas para el código).
- [ ] **Mejoras de UX**
    - [ ] Agregar un botón de "Copiar al portapapeles" en el output.
    - [ ] Implementar manejo de errores (si la API falla, avisar al usuario).
- [ ] **Documentación del Proyecto**
    - [ ] Redactar el `README.md` final (¡puedes usar tu propia app para mejorarlo!).

---

## 🛠️ Detalles Técnicos Sugeridos

| Componente | Tecnología | Nota |
| :--- | :--- | :--- |
| **Runtime** | Node.js v18+ | Estabilidad para Express. |
| **Estilos** | CSS Grid / Flexbox | Diseño simple: una columna en móvil, dos en desktop. |
| **Prompting** | System Messages | "Eres un tutor de programación senior, explica este código línea por línea". |