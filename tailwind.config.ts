import {colors} from './src/constants/index.ts'


/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: ['class', '[data-mode="dark"]', 'selector'],
    theme: {
        extend: {
            colors: {
                
                // Base colors
                
                'primary': colors.primary,
                'secondary': colors.secondary,
                'danger': colors.danger,
                'black': colors.black,
                'white': colors.white,
                'dark': colors.dark,
                
                
                // Component colors 
                
                input: {
                    fill: {
                        d: {
                            'bg': '#27272a',
                            'placeholder' : '#737373',
                            'text' : colors.white,
                            'border' : colors.black,
                        },
                        l: {
                            'bg': '#e5e5e5',
                            'placeholder' : '#737373',
                            'text' : colors.black,
                            'border' : colors.white,
                            
                        }
                    },
                    outline: {
                        d: {
                            'bg': colors.black,
                            'border': '#a3a3a3',
                            'placeholder' : '#a3a3a3',
                            'text' : colors.white,
                        },
                        l: {
                            'bg': colors.white,
                            'border': '#a3a3a3',
                            'placeholder' : '#737373',
                            'text' : colors.black,
                        }
                    }
                },
                meta: {
                    fill : {
                        d: {
                            'bg': '#18181b',
                            'border': '#262626',
                            'text' : colors.white,
                            'text-sec' : '#9ca3af',
                        },
                        l: {
                            'bg': '#fff',
                            'border': '#e4e4e7',
                            'text' : colors.black,
                            'text-sec' : '#4b5563',
                        },
                    },
                    outline : {
                        d: {
                            'bg': colors.black,
                            'border': '#a3a3a3',
                            'text' : colors.white,
                            'text-sec' : '#6b7280',
                        },
                        l: {
                            'bg': colors.white,
                            'border': '#a3a3a3',
                            'text' : colors.black,
                            'text-sec' : '#6b7280',
                        },
                    },
                }
            },
            fontSize: {
                "title": "56px",
                "button": "17px"
            },
            fontFamily: {
                sans: ['Roboto', 'sans-serif'],
            },
            animation: {
                'slide-in': 'slide-in 0.3s ease-out forwards',
                'slide-out': 'slide-out 0.3s ease-out forwards',
            },

        },
    },
    plugins: [],
};
