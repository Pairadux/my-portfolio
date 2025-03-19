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
        },
    },
    plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
