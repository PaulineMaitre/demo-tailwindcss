/** @type {import('tailwindcss').Config} */
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
