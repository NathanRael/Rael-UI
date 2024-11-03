import {cva} from "class-variance-authority";
import {defaultVariants} from "../../default.ts";

export const checkboxVariants = cva('peer   transition-all appearance-none border rounded shadow  hover:shadow-md ', {
    variants: {
        variant : {
          fill : 'checked:bg-primary checked:border-primary',
          outline : '',  
        },
        disabled: {
            true: 'disabled:bg-gray-600 disabled:border-gray-600',
            false: ''
        },
        size : {
            sm : 'size-4',
            md : 'size-[18px]'
        },
        radius: {
            none: "rounded-none",
            sm: "rounded-sm",
            md: "rounded-md",
            lg: "rounded-lg",
            xl: "rounded-xl",
            "2xl": "rounded-2xl",
            full: "rounded-full",
        },
    },
    defaultVariants: {...defaultVariants, radius : 'md', variant : 'fill', size : 'md'}
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