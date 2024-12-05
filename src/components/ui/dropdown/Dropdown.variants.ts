import {cva} from "class-variance-authority";
import {defaultVariants} from "@/components/default.ts";

export const dropdownVariants = cva('absolute top-12 left-0 z-30 p-2 max-h-[240px] overflow-y-auto overflow-x-hidden hide-scrollbar', {
    variants : {
        variant: {
            outline: 'bg-white dark:bg-black border border-neutral-400 text-black  dark:border-neutral-300 dark:text-white focus-within:ring-[3px] focus-within:ring-primary',
            fill: 'bg-neutral-200 text-black dark:text-white dark:bg-zinc-800 focus-within:ring-[3px] focus-within:ring-primary',
        },
        radius : {
            none: 'rounded-none',
            sm: 'rounded-sm',
            md: 'rounded-md',
            lg: 'rounded-lg',
            xl: 'rounded-xl',
            "2xl": 'rounded-2xl',
            full: 'rounded-full',
        },
    },
    defaultVariants : {
        variant : defaultVariants.variant,
        radius : defaultVariants.radius,
    }
})

export const dropdownItemVariants = cva('', {
    variants : {
        variant : {
            
        }
    }
})