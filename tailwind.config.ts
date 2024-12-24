
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
                // Base colors
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

// Component colors 

                input: {
                    fill: {
                        d: {
                            'bg':
                                '#27272a',
                            'placeholder':
                                '#737373',
                            'text':
                            colors.white,
                            'border':
                            colors.black,
                        }
                        ,
                        l: {
                            'bg':
                                '#e5e5e5',
                            'placeholder':
                                '#737373',
                            'text':
                            colors.black,
                            'border':
                            colors.white,

                        }
                    }
                    ,
                    outline: {
                        d: {
                            'bg':
                            colors.black,
                            'border':
                                '#a3a3a3',
                            'placeholder':
                                '#a3a3a3',
                            'text':
                            colors.white,
                        }
                        ,
                        l: {
                            'bg':
                            colors.white,
                            'border':
                                '#a3a3a3',
                            'placeholder':
                                '#737373',
                            'text':
                            colors.black,
                        }
                    }
                }
                ,
                meta: {
                    fill: {
                        d: {
                            'bg':
                                '#18181b',
                            'border':
                                '#262626',
                            'text':
                            colors.white,
                            'text-sec':
                                '#9ca3af',
                        }
                        ,
                        l: {
                            'bg':
                                '#fff',
                            'border':
                                '#e4e4e7',
                            'text':
                            colors.black,
                            'text-sec':
                                '#4b5563',
                        }
                        ,
                    }
                    ,
                    outline: {
                        d: {
                            'bg':
                            colors.black,
                            'border':
                                '#a3a3a3',
                            'text':
                            colors.white,
                            'text-sec':
                                '#6b7280',
                        }
                        ,
                        l: {
                            'bg':
                            colors.white,
                            'border':
                                '#a3a3a3',
                            'text':
                            colors.black,
                            'text-sec':
                                '#6b7280',
                        }
                        ,
                    }
                    ,
                }
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
