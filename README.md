# 🍕 Pizzería Mamma Mía! - Hito 6: Context API

Este proyecto corresponde a la implementación del **Hito 6** del curso de Desarrollo Web Frontend con React. El objetivo principal de este hito es incorporar el manejo de estado global mediante **Context API**, permitiendo centralizar la lógica del carrito de compras y sincronizar en tiempo real el catálogo, la página del carrito y la barra de navegación.

---

## 🚀 Características del Hito

- **Estado Global con Context API (`CartContext`):** Administra el catálogo de productos agregados, cantidades por producto y cálculo del total en tiempo real.
- **Sincronización del Navbar:** El total de la compra se refleja de forma dinámica en la barra de navegación sin requerir prop drilling.
- **Agregar Productos desde Home:** Cada tarjeta de pizza (`CardPizza`) permite agregar productos directamente al estado global.
- **Gestión Interactiva del Carrito (`Cart`):** Vista dedicada para incrementar (`+`), decrementar (`-`) o eliminar productos al llegar a cero, actualizando el total automáticamente.
- **Integración con Router:** Mantiene la estructura de rutas SPA implementada en el Hito 5 con `react-router-dom` v6.

---

## 🛠️ Tecnologías Utilizadas

- **React 18** (Vite)
- **React Router DOM v6** (Navegación SPA)
- **Context API** (Gestión de estado global)
- **CSS Vanilla / HTML5 / JavaScript ES6+**

---

## 📁 Estructura del Proyecto

```text
src/
├── assets/            # Imágenes y recursos estáticos
├── components/        # Componentes reutilizables (Navbar, Footer, CardPizza, Header)
├── context/           # Proveedores y Contextos de React
│   └── CartContext.jsx # Contexto global para la gestión del carrito
├── pages/             # Vistas principales de la aplicación
│   ├── Home.jsx       # Catálogo principal conectado al backend y contexto
│   ├── Cart.jsx       # Página del carrito de compras interactivo
│   ├── Login.jsx      # Formulario de inicio de sesión
│   ├── Register.jsx   # Formulario de registro de usuario
│   ├── Pizza.jsx      # Vista de detalle de pizza
│   ├── Profile.jsx    # Perfil del usuario
│   └── NotFound.jsx   # Página 404
├── App.jsx            # Configuración de rutas principales
├── main.jsx           # Punto de entrada con BrowserRouter y CartProvider
└── index.css          # Estilos globales
