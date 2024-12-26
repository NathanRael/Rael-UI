import {cva} from "class-variance-authority";
import {defaultVariants} from "@/components/default.ts";

export const dropdownVariants = cva('absolute top-12 left-0 z-30 p-2 max-h-[240px] overflow-y-auto overflow-x-hidden hide-scrollbar', {
    variants : {
        variant: {
            fill : 'bg-neutral-light-80 text-black-100 border border-neutral-light-60 dark:bg-neutral-dark-80 dark:border-none dark:text-white-100 ',
            outline : 'border border-neutral-light-60 dark:border-neutral-dark-40 text-black-100 dark:text-white-100',
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