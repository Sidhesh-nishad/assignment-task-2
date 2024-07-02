/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            backgroundColor: {
                primary: "#024EF3",
                lightPrimary: "#024EF31A",
                cpWhite: "#F8FBFF",
                cpWhite2: "#EDEDED",
                cpGrey: "#787878",
            },
        },
    },
    plugins: [],
};
