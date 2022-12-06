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

## Use custom properties

If you want to use a color that is not in the main Tailwind colors, you can use this color by adding properties into `[]` like this :
```tsx
<div className={'text-[#FF9494] text-[60px]'}> 
    Hello World 
</div>
```

These properties set font color to #FF9494 and font size to 60px.

## Overriding properties

You can custom Tailwind default properties by overriding theme properties in `tailwind.config.js` file.
For example, to define a primary color, juste add `primary: "#FF9494"` in the `colors` section :

```js
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#FF9494"
            },
            fontSize: {
                60: '60px'
            }
        },
    },
    plugins: [],
}
```

To use these properties juste replace them in your 'className' like this :

```tsx
<div className={'text-primary text-60'}> 
    Hello World 
</div>
```

# Useful links

Documentation -> https://tailwindcss.com/docs/installation

Icons -> https://heroicons.com/