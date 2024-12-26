import {cva} from "class-variance-authority";
import {defaultVariants} from "@/components/default.ts";


export const sharedVariants = cva('', {
    variants: {
        disabled: {
            true: 'cursor-not-allowed',
            false: 'cursor-pointer'
        }
    },
    defaultVariants: {
        disabled: false
    }
})

export const radioVariants = cva('appearance-none size-4 rounded-full border-2  ', {
    variants: {
        variant : {
            outline : 'border-neutral-light-60 dark:border-neutral-dark-60 ',
            fill : 'bg-neutral-light-60 border-neutral-light-60 dark:bg-neutral-dark-60 dark:border-neutral-dark-60 checked:bg-primary checked:border-primary-100 dark:checked:border-primary-100  dark:checked:bg-primary-100',
        },
    },
    defaultVariants : {
        variant : defaultVariants.variant,
    }
})

export const radioIconVariants = cva(' absolute size-2 rounded-full  left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2', {
    variants: {
        variant : {
            outline : 'bg-primary-100',
            fill : 'bg-white-100'
        }
    },
})
