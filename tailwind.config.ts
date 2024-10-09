

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: "selector",
    theme: {
        extend: {
            colors: {
                'primary': '#186DFF',
                'danger': '#e74c3c',
                'black' : '#09090b',
                'white' : '#fafafa',
                'dark' : '#12161C',
            },
            fontSize : {
                "title": "56px",
                "button" : "17px"
            },
            fontFamily: {
                sans : ["Helvetica", "Arial", "sans-serif"],
            }
            
        },
    },
    plugins: [],
};
