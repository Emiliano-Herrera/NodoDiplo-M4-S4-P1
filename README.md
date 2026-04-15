NodoDiplo-M4-S4-P1
# 📌 Trabajo Práctico 4 - Integración con APIs

## 🎯 **Objetivo General**

Desarrollar una aplicación completa en **React + Vite** que consuma una **API externa**, renderice los datos en pantalla y permita al usuario realizar acciones a través de **formularios** y la interacción con la API.

Se evaluará la correcta aplicación de:
- ✅ **HTTP y APIs REST**
- ✅ **Uso de Fetch o Axios**
- ✅ **Manejo de datos con useState y useEffect**
- ✅ **Buenas prácticas en peticiones y manejo de errores**
- ✅ **Notificaciones con react-toastify**
- ✅ **Formularios controlados y validaciones básicas**
- ✅ **Asincronía y promesas**

---

## 🔥 **Consigna Principal**

### 📌 **Aplicación: "Buscador de Personajes de Series"**

La app permitirá:

- **Buscar personajes** por nombre en una API pública.
- **Visualizar los resultados** de la búsqueda en pantalla.
- **Agregar una descripción del personaje** (ejemplo: edad, especie, locación) visible al visualizar cada personaje.
- **Agregar personajes favoritos** a una lista persistente (localStorage).
- **Ver y eliminar favoritos**.

### 🌐 **API Sugerida** (pueden proponer otra):

```
https://rickandmortyapi.com/api/character/
```
> dejar en el readme la documentacion de la api usada
---

## 📂 **Requerimientos Técnicos**

### 1️⃣ **Uso de Fetch o Axios (pueden usar el que prefieran en la app)**

- Realizar la búsqueda principal usando `fetch` o `axios`, a elección.
- Mostrar los resultados de la API en pantalla.
- Explicar en el código o README por qué se eligió esa opción.

### 2️⃣ **Renderizado de Datos y uso de useEffect**

- Mostrar las citas o personajes en tarjetas con diseño (TailwindCSS).
- Usar `useState` y `useEffect` para manejar la data.
- Implementar un **loader** mientras se cargan los datos.

### 3️⃣ **Manejo de Formulario Básico**

- Formulario para ingresar la cantidad de personajes a buscar.

### 4️⃣ **Manejo de Errores y Mensajes**

- Capturar errores con `try/catch`.
- Mostrar mensajes de error si la API falla.
- Usar `react-toastify` para:
  - Éxito al obtener datos.
  - Error si la petición falla.
- uso de un Loader

### 5️⃣ **Agregar a Favorito**

- Permitir guardar personajes como favoritos.
- Mostrar la lista de favoritos.
- Eliminar favoritos.
- Persistencia con localStorage.

### 6️⃣ **Asincronía y Buenas Prácticas**

- Evitar renderizados o peticiones innecesarias.
- Aplicar `useMemo` si es necesario.

### 7️⃣ **Despliegue en Netlify o Vercel**

- La app debe estar online y el enlace debe enviarse junto al repositorio. (en el README)

---

## ✅ **Criterios de Evaluación**

- Uso correcto de HTTP y comprensión de APIs REST.
- Aplicación de `fetch`, `axios`, `useState`, `useEffect` y `react-toastify`.
- Buenas prácticas de programación y estructura de carpetas.
- Validaciones y manejo de errores.
- Persistencia de datos con localStorage.
- Diseño responsive con TailwindCSS.
- Documentación clara (README).

---

## 💡 **Sugerencias**

- Consulten APIs públicas como:
  - [https://rickandmortyapi.com/](https://rickandmortyapi.com/)
  - [https://pokeapi.co/](https://pokeapi.co/)
  - [https://drangovski.github.io/#breaking-bad-api](https://drangovski.github.io/#breaking-bad-api)

---
- Api utilizada:
  - [https://rickandmortyapi.com/](https://rickandmortyapi.com/)
\
🚀 ¡Manos a la obra y mucha suerte! 🎬🧑🏻‍💻👨🏻‍💻👩🏻‍💻

