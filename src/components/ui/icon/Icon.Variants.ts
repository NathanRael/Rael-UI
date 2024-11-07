import {cva} from "class-variance-authority";

export const iconVariants = cva('flex items-center  antialiased font-semibold hover:opacity-50', {
    variants: {
        variant: {
            primary: "bg-primary text-white focus:ring-primary/50",
            secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500/50",
            ghost: "hover:bg-gray-100 hover:text-black text-white hover:opacity-100",
            outline: "border border-primary text-primary hover:bg-primary hover:text-white"
        },
        size: {
            sm: 'p-2 size-8 gap-2',
            md: 'py-2 px-3 size-10 gap-3',
            lg: 'py-2 px-4 gap-4 size-12 font-bold',
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