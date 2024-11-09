import {cva} from "class-variance-authority";
import {defaultVariants} from "@/components/default.ts";



export const switchVariants = cva(`peer h-6 w-11 rounded-full border after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border  after:transition-all after:content-['']  peer-checked:after:translate-x-full  `, {
    variants: {
        variant : {
            outline : 'border-input-outline-l-border after:border-input-outline-l-border peer-checked:after:bg-primary',
            fill : 'bg-input-fill-l-bg after:bg-white border-input-fill-l-border after:border-gray-300 peer-checked:border-input-fill-l-bg  peer-checked:after:bg-primary peer-checked:after:border-white dark:after:border-bg-input-fill-bg dark:bg-input-fill-d-bg  dark:border-input-fill-d-bg dark:peer-checked:border-input-fill-d-bg dark:peer-checked:after:border-input-fill-d-bg ',
        },
        disabled: {
            true: 'after:bg-black after:border-black  cursor-not-allowed ',
            false: ''
        },
        
    },
    defaultVariants: {
        variant :  defaultVariants.variant,
        disabled : defaultVariants.disabled,
    }
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
        disabled: defaultVariants.disabled
    }
})
