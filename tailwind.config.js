/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "selector",
    content: ["./src/**/*.{html,js,ts,svelte}"],
    theme: {
        extend: {
            colors: {
                black: "#0f172a",
                white: "#f1f5f9",
            },
            fontFamily: {
                sans: ['"Atkinson Hyperlegible"', "ui-sans-serif", "system-ui", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"],
            },
        },
    },
    plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
