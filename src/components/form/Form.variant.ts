import {cva} from "class-variance-authority";

export const formLabelVariants = cva('text-base', {
    variants : {
        variant : {
            fill :'text-black dark:text-white',
            outline : 'text-white'
        }
    },
    defaultVariants : {
        variant : 'outline',
    }
})

export const formDescriptionVariants = cva('text-[14px]', {
    variants : {
        variant : {
            fill : 'text-gray-600 dark:text-gray-400',
            outline : 'text-gray-400'
        }
    }
})
