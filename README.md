# Proyecto React con TypeScript y Tailwind CSS

Este proyecto está organizado siguiendo una estructura de carpetas clara y bien organizada para facilitar la gestión y el mantenimiento del código. A continuación se describe cada parte de la estructura y su propósito.

## Estructura de Carpetas

La estructura de carpetas está diseñada para mantener el proyecto modular y fácil de entender. Cada componente y funcionalidad tiene su propio directorio.

### Componentes

Los componentes se agrupan en subdirectorios para mantener el código modular. Por ejemplo:

- **CountryList**: Contiene el componente `CountryList` junto con su subcomponente `CountryCard`.
- **SearchBar**: Componente para la barra de búsqueda.
- **RegionFilter**: Componente para el filtrado por región.
- **ThemeToggle**: Componente para cambiar el tema.

### Páginas

Las páginas se encuentran en un directorio independiente llamado `pages`. Esto permite manejar rutas y vistas específicas de manera más organizada:

- **Home.tsx**: Página principal.
- **CountryPage.tsx**: Página de detalles de un país específico.

### Hooks

Los hooks personalizados están almacenados en el directorio `hooks`. Esto ayuda a reutilizar la lógica de estado y efectos en diferentes componentes:

- **useCountries.ts**: Hook para obtener y manejar datos de países.
- **useTheme.ts**: Hook para manejar el tema de la aplicación.

### Servicios

El directorio `services` se utiliza para la comunicación con APIs y centraliza todas las interacciones con servicios externos. Esto mantiene la lógica de negocio separada:

- **api/CountryAPI.ts**: Interacciones con la API de países.
- **HttpClient.ts**: Cliente HTTP genérico para hacer peticiones.

### Tipos

Definir tipos en un directorio dedicado llamado `types` asegura que las interfaces y tipos se gestionen de manera consistente en toda la aplicación:

- **country.ts**: Definiciones de tipos para datos de países.

### Utilidades

Las funciones auxiliares están en el directorio `utils`, encapsulando lógica común que puede ser utilizada en diferentes partes del proyecto:

- **errorHandling.ts**: Manejo de errores y definiciones de clases de error.

### Contexto

El directorio `context` se utiliza para manejar estados globales o configuraciones, como el tema de la aplicación. Esto facilita el manejo de contextos en React:

- **ThemeContext.tsx**: Contexto para el manejo del tema de la aplicación.

### Estilos

Los estilos globales se encuentran en el archivo `globals.css` dentro del directorio `styles`. Esto permite mantener estilos comunes y configuraciones de Tailwind en un solo lugar.

## Conclusión

Esta estructura de carpetas permite un desarrollo organizado y eficiente, asegurando que cada parte del proyecto esté claramente separada y sea fácil de mantener. Seguir esta organización ayuda a escalar el proyecto y facilita la colaboración entre desarrolladores.
