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

```

</details>

### CSS Import

<details>
<summary><code>index.css</code></summary>

```css
@tailwind base;
@tailwind components;
@tailwind utilities;


@layer base {
  .rael-password-input::-ms-reveal,
  .rael-password-input::-ms-clear {
    display: none;
  }

  .rael-number-input::-webkit-inner-spin-button {
    display: none;
  }

  .hide-scrollbar::-webkit-scrollbar {
    background: transparent;
    width: 8px;
  }

  .hide-scrollbar::-webkit-scrollbar-thumb {
    border-radius: 10px;
    border: none;
    background: #9ca3af;
  }

  :root {
    --color-primary-100: 252 78% 49%;
    --color-primary-80: 252 78% 60%;
    --color-primary-60: 252 78% 80%;

    --color-secondary-100: 253 24% 30%;
    --color-secondary-80: 254 78% 40%;

    --color-white-100: 255 80% 98%;
    --color-white-80: 255 80% 90%;

    --color-black-100: 255 80% 10%;
    --color-black-80: 240 19% 39%;
    --color-black-60: 240 19% 45%;

    --color-neutral-dark-100: 215 22% 9%;
    --color-neutral-dark-80: 215 22% 16%;
    --color-neutral-dark-60: 215 22% 20%;
    --color-neutral-dark-40: 215 22% 30%;

    --color-neutral-light-100: 0 0% 100%;
    --color-neutral-light-80: 0 0% 93%;
    --color-neutral-light-60: 0 0% 84%;
  }
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

You can check the documentation  at : https://rael-ui-doc.vercel.app/

## Form Management Example

<details>
<summary>Form management example</summary>

````tsx
import {Button, Card,
  CardDescription,
  CardSection,
  CardTitle, Checkbox,
  Form,
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
  PasswordInput,
  Select, SelectGroup,
  SelectGroupContainer, SelectGroupTitle, SelectItem,
  SelectLabel,
  SelectTrigger,
  TextInput,
  useForm,
  ValidationRules, useToast,
  CheckboxLabel,
} from "rael-ui"
const FormTest = () => {
    const validations: ValidationRules<FormField>[] = [
        {
            name : 'email',
            pattern : /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            required: true,
            message : 'Please enter a valid email address'
        },
        {
            name : 'password',
            valid : ({password}) => password!.length >= 5,
            required: true,
            message : 'Password must be at least 5 characters',
        },
        {
            name : 'confirm',
            valid : ({confirm, password}) => confirm === password,
            required : true,
            message : "The password doesn't match"
        },
        {
            name : 'country',
            required : true,
        },
        {
            name : 'condition',
            required : true,
            valid : ({condition}) => condition!,
            message : 'We cannot create your account unless you accept the terms and conditions'
        }
    ]

    const form = useForm<FormField>({
        defaultValue : {
            password : '',
            country : '',
            confirm: '',
            email : '',
            condition : false,
        },
        validations
    });
    
    const {renderToastContainer, toast} = useToast();

    const {formData} = form;

    const onSubmit = async () => {
        await new Promise<void>((resolve) => {
            setTimeout(() => resolve(), 2000)
        })
        console.log(formData);
        toast({
            title : 'Login success',
            message : 'Login successfully done',
        })
    }
    return (
        <Form form={form} onSubmit={onSubmit} className={"flex flex-col w-full justify-center items-center h-screen gap-4"}>
            {renderToastContainer()}
            <Card  className={'w-[420px]'}>
                <CardSection rFor={'meta'}>
                    <CardTitle>Create your account</CardTitle>
                    <CardDescription>Delve into the world of ...</CardDescription>
                </CardSection>
                <CardSection>
                    <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl name={'email'} type={'input'} render={({...fields}) => (
                            <TextInput block {...fields} placeholder={'eg : rael@gmail.com'}/>
                        )}/>
                        <FormDescription>We recommend to use a professional email</FormDescription>
                        <FormMessage name={'email'}/>
                    </FormItem>
                    <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl name={'password'} type={'input'} render={({...fields}) => (
                            <PasswordInput block {...fields} placeholder={''}/>
                        )}/>
                        <FormMessage name={'password'}/>
                    </FormItem>
                    <FormItem>
                        <FormLabel>Confirm</FormLabel>
                        <FormControl name={'confirm'} type={'input'} render={({...fields}) => (
                            <PasswordInput block {...fields} placeholder={''}/>
                        )}/>
                        <FormDescription>Confirm your password</FormDescription>
                        <FormMessage name={'confirm'}/>
                    </FormItem>
                    <FormItem>
                        <FormLabel>Country</FormLabel>
                        <FormControl type={'select'} name={'country'} render={({...fields}) => (
                            <Select block {...fields}>
                                <SelectTrigger>
                                    <SelectLabel placeholder={'Select your country'}/>
                                    <ChevronDown/>
                                </SelectTrigger>
                                <SelectGroupContainer>
                                    <SelectGroup>
                                        <SelectGroupTitle>Countries</SelectGroupTitle>
                                        {
                                            countries.map(country => (
                                                <SelectItem key={country} value={country}>{country}</SelectItem>))
                                        }
                                    </SelectGroup>
                                </SelectGroupContainer>
                            </Select>
                        )}/>
                        <FormDescription>This wont be publicly displayed</FormDescription>
                        <FormMessage name={'country'}/>
                    </FormItem>
                    <FormItem>
                        <FormControl name={'condition'} type={'checkbox'} render={({...fields}) => (
                            <Checkbox {...fields}>
                                <CheckboxLabel>I accept terms and conditions</CheckboxLabel>
                            </Checkbox>
                        )}/>
                        <FormMessage name={'condition'}/>
                    </FormItem>
                </CardSection>
                <CardSection>
                    <Button type={'submit'} onClick={() => {
                        toast({
                            title : 'Toast'
                        })
                    }} loading={form.isSubmitting} block>Login</Button>
                </CardSection>
            </Card>
        </Form>
    )
}

````

</details>

## Author

- Full name : Natanaël RALAIVOAVY
- Github : https://github.com/NathanRael
- Email : [ralaivoavy.natanael@gmail.com](mailto:ralaivoavy.natanael@gmail.com)


