# Temas:

1. Set up e instalaciones
2. Empezando
---

## :star: 1. Set up e instalaciones

- Pre-requisitos: **git** y **gitbash**, **Node.js**(versión 5.2 o superior porque ya viene con **npm** que se utiliza para instalar las liberias).

- Herramientas: **React Developer Tools** (n el navegador que utilices) y **React Snippets** (extension de VSC) y **JS/JSX Snippets**

- Para la instalación del projecto se utiliza  [**create-react-app**](https://create-react-app.dev/), si ya la tenías instalada globalmente, para trabajar con la versión más actual es recomendable desinstalarla con: ```npm uninstall -g create-react-app```. Sujiere porner el proyecto en el escritorio, pero se puede guardar donde se prefiera. Entonces por consola:
```
npx create-react-app reactinterface
cd reactinterface
npm start
```

Creo la aplicación de React llamada **reactinterface**, entro a la carpeta creada y levando el proyecto para verlo en el navegador.

- Modulos de React: **Webpack** (un bundle de JavaScript, ensamblador de la aplicaicón), **Babel** (compilador a JavaScript, pudiendo escribir con ES6 o más y se convertirá para los navegadores con ES5 o anteriores), **ES Lint** (analiza el código con ciertas reglas y ayuda a fixear, hay una extensión en VSC), **Jest** es un framework de test, **Webvital** (para ver la performance, la accesibilidad y las buenas prácticas).

- Se utiliza **JSX**, or lo que vemos **calssName** en vez de **class**, las etiquetas deben ser auto conclusivas (por eso la de imagen se cierra), por ejemplo.

- Utilizo [**React Icons**](https://react-icons.github.io/react-icons/), [el link a npm](https://www.npmjs.com/package/react-icons) y tengo un codigo de ejemplo:

```JSX
import { FaBeer } from "react-icons/fa";

function Question() {
  return (
    <h3>
      {" "}
      Lets go for a <FaBeer />?{" "}
    </h3>
  );
}
```

Al importarlo luego de la / se aclara de que libreria se va a utilizar, el del ejemplo es FA de favicon, si es /bs es de bootstrap, por ejemplo.

Se instala con la terminal: ```npm install react-icons --save```


- Para los estilos se utiliza [***TailwindCSS**](https://tailwindcss.com/docs/guides/create-react-app), en el video utiliza con Craco, pero en la documentacion indican:

1. Intalacion: ```npm install -D tailwindcss postcss autoprefixer```

2. Correr el comando ```npx tailwindcss init -p``` para inicializar los archivos tailwind.config.js and postcss.config.js.


3. En tailwind.config.js agregamos todos los path de los tempaltes
```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

4. En **index.css**  agregar los directorios de Tailwind.

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

5. Correr el proyecto: ```npm run start```

6. Usar Tailwind en el poyecto, un ejemplo:

App.js
```JSX
export default function App() {
  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  )
}
```

*tip*: **All of the examples in Tailwind UI rely on the default Tailwind CSS configuration, but some rely on additional first-party plugins like** ```npm install @tailwindcss/forms```, ```npm install  @tailwindcss/typography``` **, and** ```npm install @tailwindcss/aspect-ratio```.

Tailwind UI for React depends on Headless UI to power all of the interactive behavior and Heroicons for icons, so you'll need to add these two libraries to your project:

```npm install @headlessui/react @heroicons/react```

-> En el video lo hace de este modo:

```npm install -D tailwindcss@npm:@tailwindcss/postcss7-compat @tailwindcss/postcss7-compart postcss@^7 autoprefixer@^9 @tailwindcss/forms```

Y usa CRACO (create react app configuration override) lo que va a ser es modificar los scripts, usa: ```npm install @craco```

Y en package.json en la parte de scripts cambia npm por **craco**

Y crea un archivo de configuración de craco:

```JSX
// craco.config.js
module.exports = {
  style: {
    postcss: {
      plugins: [
        require("tailwindss"),
        require("autoprefixer",)
      ],
    },
  },
}
```


---

## :star: Empezando


---


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
