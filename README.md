# Set up React project with Tailwind

## Create React App

```shell
npx create-react-app demo-tailwindcss --template typescript
cd demo-tailwindcss
```

## Install Tailwind CSS

```shell
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

## Configure path

Add path of all templates files in `tailwind.config.js` file.

```js
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

## Add Tailwind CSS

In your `index.css` file, add the following lines :
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Run app

```shell
npm start
```

# Custom Tailwind properties

## 

# Useful links

Documentation -> https://tailwindcss.com/docs/installation

Icons -> https://heroicons.com/