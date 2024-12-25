import {cva} from "class-variance-authority";
import {defaultVariants} from "@/components/default.ts";



export const switchVariants = cva(`peer h-6 w-11 rounded-full border after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border  after:transition-all after:content-['']  peer-checked:after:translate-x-full  `, {
    variants: {
        variant : {
            outline : 'border-neutral-light-60 after:border-neutral-light-60 peer-checked:after:bg-primary',
            fill : 'bg-neutral-light-60 after:bg-white-100 border-neutral-light-60 after:border-neutral-light-60 peer-checked:border-neutral-light-60  peer-checked:after:bg-primary-100 peer-checked:after:border-white dark:after:border-neutral-dark-60 dark:bg-neutral-dark-60  dark:border-neutral-dark-60 dark:peer-checked:border-neutral-dark-60 dark:peer-checked:after:border-neutral-dark-60 ',
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
