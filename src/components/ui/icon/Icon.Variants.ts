import {cva} from "class-variance-authority";
const defaultVariants = {
    disabled: false,
    checked: false,
}

export const iconVariants = cva('flex items-center  antialiased font-semibold hover:opacity-50', {
    variants: {
        variant: {
            primary: 'bg-primary text-white',
            secondary: '',
            ghost: '',
            outline : ''
        },
        size: {
            md: 'p-2 size-10 gap-2',
            lg: 'py-2 px-3 size-12 gap-3',
            xl: 'py-2 px-4  gap-4 size-14 font-bold',
        },
        radius: {
            none: 'rounded-none',
            sm: "rounded-sm",
            md: "rounded-md",
            lg: "rounded-lg",
            xl: "rounded-xl",
            "2xl": "rounded-2xl",
            full: "rounded-full",
        },
        block: {
            true: 'w-full',
            false: 'w-fit'
        },
        disabled: {
            true: 'opacity-50  cursor-not-allowed',
            false: 'cursor-pointer',
        }
    },
    defaultVariants: {
        variant: 'primary',
        size: 'md',
        radius: 'full',
        block: false,
        disabled: false,
    },
})