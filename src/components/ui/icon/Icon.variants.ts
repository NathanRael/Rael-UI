import {cva} from "class-variance-authority";
import {defaultVariants} from "@/components/default.ts";

export const iconVariants = cva('flex items-center  antialiased font-semibold hover:opacity-50', {
    variants: {
        variant: {
            primary: "bg-primary text-white",
            secondary: "bg-secondary text-white",
            ghost: " dark:text-white text-black-100 hover:opacity-100 hover:bg-gray-300 dark:hover:bg-gray-200 hover:text-black-100 dark:hover:text-black-100",
            outline: "border border-primary text-primary hover:bg-primary hover:text-white "
        },
        size: {
            sm: 'p-2  gap-2',
            md: 'py-3 px-3  gap-3',
            lg: 'py-4 px-4 gap-4  font-bold',
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
        variant: defaultVariants.btnVariant,
        size: defaultVariants.size,
        block: defaultVariants.block,
        disabled: defaultVariants.disabled,
        radius : 'full',
    },
})