import {cva} from "class-variance-authority";

export const defaultVariants = {
    disabled: true,
    checked: false,

}

export const switchVariants = cva(`peer h-6 w-11 rounded-full border after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border  after:transition-all after:content-['']  peer-checked:after:translate-x-full  `, {
    variants: {
        variant : {
            outline : 'border-neutral-400 after:border-neutral-400 peer-checked:after:bg-primary',
            fill : 'bg-gray-700 after:bg-white border-gray-700 after:border-gray-300 peer-checked:bg-white peer-checked:after:bg-primary peer-checked:after:border-white',
        },
        disabled: {
            true: 'after:bg-black after:border-black  cursor-not-allowed ',
            false: ''
        },


    },
    defaultVariants: {
        variant : 'fill' ,
        disabled : true,
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
