/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        fontFamily: {
            Alexandria: ["Alexandria", "sans-serif"],
            Candal: ["Candal", "sans-serif"],
            Capriola: ["Capriola", "sans-serif"],
            Julius: ["Julius Sans One", "sans-serif"],
            Jura: ["Jura", "sans-serif"],
            Lalezar: ["Lalezar", "cursive"],
            Nanum: ["Nanum Pen Script", "cursive"],
            Poppins: ["Poppins", "sans-serif"],
            Readex: ["Readex Pro", "sans-serif"],
            Syncopate: ["Syncopate", "sans-serif"],
            Unbounded: ["Unbounded", "cursive"],
        },
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
                gradient:
                    "gradient 3.5s cubic-bezier(0.4, 0, 0.6, 1) infinite ",
                gradientFast: "gradient 2s infinite linear",
                slideInText: "slideInText 1.5s ease-in-out",
                slideOutText: "slideOutText 1.5s ease-out",
                appearText: "appearText 1.5s ease-out",
                disappearText: "disappearText 1.5s ease-out",
            },

            keyframes: {
                gradient: {
                    "0%, 100%": {
                        "background-size": "200% 200%",
                        "background-position": "left center",
                        opacity: 1,
                    },
                    "50%": {
                        "background-size": "200% 200%",
                        "background-position": "right center",
                        opacity: 0.65,
                    },
                },
                gradientSpin: {
                    "0%, 50%, 100%": {
                        transform: "rotate(0deg)",
                    },
                    "25%": {
                        transform: "rotate(1deg)",
                    },
                    "75%": {
                        transform: "rotate(-1deg)",
                    },
                },
                slideInText: {
                    "0%, 20%": {
                        transform: "translate3d(-5%, -50%, 0)",
                        opacity: 0.1,
                    },
                    "90%, 100%": {
                        transform: "translate3d(0%, 50%, 0)",
                        opacity: 1,
                    },
                },
                appearText: {
                    "0%, 50%": {
                        transform: "translate3d(-5%, 50%, 0)",
                        opacity: 0,
                    },

                    "90%, 100%": {
                        transform: "translate3d(-5%, 50%, 0)",
                        opacity: 0.1,
                    },
                },
                slideOutText: {
                    "0%, 20%": {
                        transform: "translate3d(0, -50%, 0)",
                        opacity: 1,
                    },
                    "90%, 100%": {
                        transform: "translate3d(-5%, 50%, 0)",
                        opacity: 0.2,
                    },
                },
                disappearText: {
                    "0%, 50%": {
                        transform: "translate3d(-5%, -50%, 0)",
                        opacity: 0.2,
                    },

                    "60%": {
                        transform: "translate3d(-5%, -50%, 0)",
                        opacity: 0.1,
                    },
                    "65%, 100%": {
                        transform: "translate3d(-5%, -50%, 0)",
                        opacity: 0,
                    },
                },
            },
        },
    },
    plugins: [],
};
