import {cva} from "class-variance-authority";
import {defaultVariants} from "../../default.ts";

export const checkboxVariants = cva('peer size-4  transition-all appearance-none border rounded shadow  hover:shadow-md ', {
    variants: {
        disabled: {
            true: 'disabled:bg-gray-600 disabled:border-gray-600',
            false: ''
        },
        checked: {
            true: 'checked:bg-primary checked:border-primary',
            false: 'border-white',
        }
    },
    defaultVariants: {...defaultVariants}
})

export const sharedVariants = cva(' ', {
    variants: {
        disabled: {
            true: 'cursor-not-allowed',
            false: 'cursor-pointer'
            ,
        }
    },
    defaultVariants: {
        disabled : defaultVariants.disabled
    }
})