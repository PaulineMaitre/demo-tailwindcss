# Set up React project with Tailwind

## Create React App

```shell
npx create-react-app demo-tailwindcss --template typescript
cd demo-tailwindcss
```

## Install Tailwind CSS

```shell

npm install tailwindcss
npx tailwindcss init
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

To run the app, the following command line and go to http://localhost:3000.

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

## Extract style classes with @apply

If you often use the same combination of tailwind properties, or if you are tired of long lines of `className` 
properties, you can extract style classes.

To do so, simply copy and paste all the Tailwind classes into your `index.css` file, into a new class `big-title`,
using the keyword `@apply` :

```css

.big-title {
    @apply text-primary text-60 m-40
}
```

In your `.tsx` file, replace all the style classes by the new `big-title` class created :

```tsx
<div className={'big-title'}> 
    Hello World 
</div>
```

# Useful links

Documentation -> https://tailwindcss.com/docs/installation

Icons -> https://heroicons.com/