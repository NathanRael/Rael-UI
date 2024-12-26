
const colors = {
    'primary': '#421BDD',
    'secondary' : '#423A5E',
    'danger': '#e74c3c',
    'black': '#09090b',
    // 'black': '#09090b',
    'white': '#fafafa',
    'dark': '#12161C',
}

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: ['class', '[data-mode="dark"]', 'selector'],
    theme: {
        extend: {
            colors: {
                'danger': colors.danger,
                'dark': colors.dark,
                primary: {
                    DEFAULT: colors.primary,
                    100: 'hsl(var(--color-primary-100))',
                    80: 'hsl(var(--color-primary-80))',
                    60: 'hsl(var(--color-primary-60))',
                },
                secondary: {
                    DEFAULT: colors.secondary,
                    100: 'hsl(var(--color-secondary-100))',
                    80: 'hsl(var(--color-secondary-80))',
                },
                white: {
                    DEFAULT: colors.white,
                    100: 'hsl(var(--color-white-100))',
                    80: 'hsl(var(--color-white-80))',
                },
                black: { 
                    DEFAULT: colors.black,
                    100: 'hsl(var(--color-black-100))',
                    80: 'hsl(var(--color-black-80))',
                    60: 'hsl(var(--color-black-60))',
                },
                'neutral-dark': {
                    100: 'hsl(var(--color-neutral-dark-100))',
                    80: 'hsl(var(--color-neutral-dark-80))',
                    60: 'hsl(var(--color-neutral-dark-60))',
                    40: 'hsl(var(--color-neutral-dark-40))',
                }
                ,
                'neutral-light': {
                    100: 'hsl(var(--color-neutral-light-100))',
                    80: 'hsl(var(--color-neutral-light-80))',
                    60: 'hsl(var(--color-neutral-light-60))',
                }
                ,
            },
            fontSize: {
                "title":
                    "56px",
                "button":
                    "17px"
            }
            ,
            fontFamily: {
                sans: ['Roboto', 'sans-serif'],
            }
            ,
            animation: {
                'slide-in':
                    'slide-in 0.3s ease-out forwards',
                'slide-out':
                    'slide-out 0.3s ease-out forwards',
            }
            ,

        },
    },
    plugins: [],
}
;
