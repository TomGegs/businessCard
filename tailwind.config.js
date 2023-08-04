/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#1bb7cc",
                secondary: "#0cb5a4",
                altSecond: "#8553F4",
                primaryDark: "#192442",
                bgPrimary: "#232323",
                bgSecondary: "#090909",
            },
            animation: {
                gradient: "gradient 5s infinite",
                gradientFast: "gradientSpin 3s infinite linear",
            },

            keyframes: {
                gradient: {
                    "0%, 100%": {
                        "background-size": "200% 200%",
                        "background-position": "left center",
                    },
                    "50%": {
                        "background-size": "200% 200%",
                        "background-position": "right center",
                    },
                },
            },
        },
    },
    plugins: [],
};
