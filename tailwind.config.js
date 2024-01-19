/** @type {import('tailwindcss').Config} */
export default {
    content: ["index.html"],
    theme: {
        extend: {
            backgroundImage: {
                "about": "url('/about-bg.png')",
                "gradientTitle": "linear-gradient(90deg, #0F77EA 0%, #00D9D0 30%)",
                "aboutBtn": "linear-gradient(to right, rgb(12, 95, 187), rgb(0, 174, 166))"
            }
        },
    },
    plugins: [],
};
