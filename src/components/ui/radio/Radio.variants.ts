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
            outline : 'border-input-outline-l-border dark:border-input-outline-d-border ',
            fill : 'bg-input-fill-l-bg border-input-fill-l-bg dark:bg-input-fill-d-bg dark:border-input-fill-d-bg checked:bg-primary checked:border-primary dark:checked:border-primary  dark:checked:bg-primary',
        },
    },
    defaultVariants : {
        variant : defaultVariants.variant,
    }
})

export const radioIconVariants = cva(' absolute size-2 rounded-full  left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2', {
    variants: {
        variant : {
            outline : 'bg-primary',
            fill : 'bg-white'
        }
    },
})
