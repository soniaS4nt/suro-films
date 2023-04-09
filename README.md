# Documentación del proyecto de la página de películas 🎬:

## Resumen

Este proyecto consiste en una página de películas donde el usuario puede ver películas populares, próximas a estrenarse y detalles de películas seleccionadas. El proyecto implementa componentes reutilizables, carga asincrónica de datos y infinite scroll.

Tecnologías utilizadas

- ReactJS
- Typescript
- TailwindCSS
- Axios

## Instalación y configuración

1. Clonar este repositorio en su máquina local
2. Instalar las dependencias ejecutando el comando:

```bash
npm install
```

3. Crear un archivo .env.local en la raíz del proyecto y agregar la siguiente variable de entorno:

```bash
NEXT_PUBLIC_API_KEY=aquí tu api key
```

La clave de API debe ser obtenida en de The Movie Database [(TMDb)](https://www.themoviedb.org/documentation/api).

4. Ejecutar el proyecto con el comando:

```bash
npm start
```

5. El proyecto estará disponible en [http://localhost:3000](http://localhost:3000)

La aplicación ha sido desplegada en Vercel, para acceder a la aplicación, simplemente visite [Suro Films](https://suro-films.vercel.app/).
