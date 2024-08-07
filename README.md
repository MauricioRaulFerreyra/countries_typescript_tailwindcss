# Requerimiento del Proyecto

Desarrollar una aplicación web utilizando **React.js** con **TypeScript** y **Tailwind CSS** que permita a los usuarios buscar y filtrar información de países de manera eficiente. La aplicación debe implementar las siguientes funcionalidades y características:

## Funcionalidades del Usuario

1. **Visualización de Países:**

   - Mostrar una lista paginada de todos los países obtenidos desde una API externa en la página de inicio.

2. **Búsqueda de Países:**

   - Proporcionar un campo de entrada para buscar países por nombre de manera dinámica.

3. **Filtrado por Región:**

   - Implementar un menú desplegable para filtrar los países por región (África, América, Asia, Europa y Oceanía).

4. **Detalles del País:**

   - Permitir que los usuarios hagan clic en un país para ver información más detallada en una página separada.
   - Incluir la opción de hacer clic en los países limítrofes para ver sus detalles.

5. **Modo de Color:**
   - Habilitar la opción de alternar entre modos de color claro y oscuro para mejorar la experiencia del usuario.

## Requisitos Técnicos y de Arquitectura

1. **Arquitectura del Software:**

   - Utilizar principios de **arquitectura limpia** o **arquitectura hexagonal** para estructurar el proyecto, asegurando un desacoplamiento adecuado entre la lógica de negocio y las capas de infraestructura.

2. **Patrones de Diseño:**

   - Implementar patrones de diseño como **Repository**, **Factory**, y **Dependency Injection** para fomentar la modularidad y escalabilidad del código.

3. **Principios SOLID:**

   - Aplicar principios SOLID para garantizar que el código sea fácil de mantener, entender y extender.

4. **Pruebas Unitarias:**

   - Escribir pruebas unitarias para componentes y lógica de negocio utilizando frameworks como Jest y React Testing Library.

5. **Buenas Prácticas:**
   - Mantener un código limpio y bien documentado, utilizando herramientas como ESLint y Prettier para asegurar la consistencia y calidad del código.
   - Seguir una convención de commits semánticos para facilitar el seguimiento del historial de cambios.

## Consideraciones Adicionales

- **API:** Utilizar una API pública confiable (como REST Countries) para obtener la información de los países.
- **Rendimiento:** Asegurar que la aplicación sea performante, considerando prácticas de optimización como la carga diferida (lazy loading) de componentes y datos.
- **Accesibilidad:** Tener en cuenta la accesibilidad al desarrollar la interfaz de usuario, asegurando que sea utilizable para personas con diversas capacidades.
