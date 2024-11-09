<div>
  <h1 align="center">
    RAEL-UI
  </h1>
  <h2 align="center">
    Your toolkit for elegant React UI — with themes, form management, and seamless styling.
  </h2> 
  <div align="center">
      <img src="https://img.shields.io/badge/-React-black?style=for-the-badge&logoColor=white&logo=react&color=3178C6" alt="typescript" />
      <img src="https://img.shields.io/badge/-Typescript-black?style=for-the-badge&logoColor=white&logo=react&color=3178C6" alt="typescript" />
      <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
      <img src="https://img.shields.io/badge/Storybook-black?style=for-the-badge&logoColor=white&logo=storybook&color=ff4785" alt="typescript" />
  </div>
</div>

<br>

**rael-ui** is a modern UI library for React that enables developers to build beautifully styled websites without having
to create styles from scratch. With built-in support for both light and dark themes, rael-ui ensures your components
follow best practices in UI/UX while maintaining full customization options. It leverages compound components for
seamless styling and includes a built-in form management system to simplify complex form handling.

## Key Features

- **Modern, UX-Friendly Styles**: Predefined styles that follow UI/UX best practices, saving time and enhancing user
  experience.
- **Built-In Theming**: Supports both dark and light themes with easy configuration.
- **Automatic Styling Sync**: Child components automatically inherit styles from parent elements (e.g., cards and their
  inputs).
- **Full Customizability**: Customizable like shadcn’s components, supporting outline and fill styles, plus compound
  component patterns.
- **Integrated Form Management**: Provides built-in form management to streamline form creation.

## Installation

To get started, install rael-ui via npm:

```bash
npm install rael-ui
```

After installation, make sure to include the predefined colors and animations in your project’s Tailwind configuration.
Add the following to your `tailwind.config.js` and `index.css` files:

### Tailwind Configuration
<details>
<summary><code>tailwind.config.ts</code></summary>

```js
const colors = {
    'primary': '#421BDD',
    'secondary': '#423A5E',
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
                            'placeholder': '#737373',
                            'text': colors.white,
                            'border': colors.black,
                        },
                        l: {
                            'bg': '#e5e5e5',
                            'placeholder': '#737373',
                            'text': colors.black,
                            'border': colors.white,

                        }
                    },
                    outline: {
                        d: {
                            'bg': colors.black,
                            'border': '#a3a3a3',
                            'placeholder': '#a3a3a3',
                            'text': colors.white,
                        },
                        l: {
                            'bg': colors.white,
                            'border': '#a3a3a3',
                            'placeholder': '#737373',
                            'text': colors.black,
                        }
                    }
                },
                meta: {
                    fill: {
                        d: {
                            'bg': '#18181b',
                            'border': '#262626',
                            'text': colors.white,
                            'text-sec': '#9ca3af',
                        },
                        l: {
                            'bg': '#fff',
                            'border': '#e4e4e7',
                            'text': colors.black,
                            'text-sec': '#4b5563',
                        },
                    },
                    outline: {
                        d: {
                            'bg': colors.black,
                            'border': '#a3a3a3',
                            'text': colors.white,
                            'text-sec': '#6b7280',
                        },
                        l: {
                            'bg': colors.white,
                            'border': '#a3a3a3',
                            'text': colors.black,
                            'text-sec': '#6b7280',
                        },
                    },
                }
            },
            animation: {
                'slide-in': 'slide-in 0.3s ease-out forwards',
                'slide-out': 'slide-out 0.3s ease-out forwards',
            },

        },
    },
    plugins: [],
};
```

</details>

### CSS Import

<details>
<summary><code>index.css</code></summary>

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

input[type="password"]::-ms-reveal,
input[type="password"]::-ms-clear {
    display: none;
}


@keyframes slide-in {
    from {
        opacity: 0;
        transform: translateY(10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes slide-out {
    from {
        opacity: 1;
        transform: translateY(0);
    }
    to {
        opacity: 0;
        transform: translateY(10px);
    }
}
```

</details>

## Documentation

Coming soon ...

