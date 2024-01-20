/** @type {import('tailwindcss').Config} */
export default {
    content: ["index.html"],
    theme: {
        extend: {
            backgroundImage: {
                "about": "url('/about-bg.png')",
                "gradientTitle": "linear-gradient(90deg, #0F77EA 0%, #00D9D0 30%)",
                "aboutBtn": "linear-gradient(to right, rgb(12, 95, 187), rgb(0, 174, 166))",
				"grid-simple": "linear-gradient(300deg, #0081FF 5.83%, #4EA7FF 78.12%)",
				"grid-developer-friendly": "linear-gradient(300deg, #F60 5.83%, #F8893F 78.12%)",
				"grid-free": "linear-gradient(300deg, #00D9D0 5.83%, #15EEE5 78.12%)",
				"grid-item-border": "linear-gradient(to bottom, #00D9D0, #0081ff)"
            },

        },
    },
    plugins: [],
};
