import {cva} from "class-variance-authority";

export const formLabelVariants = cva('text-base', {
    variants : {
        variant : {
            fill : 'text-black-100 dark:text-white-100',
            outline : 'text-black-100 dark:text-white-100',
        }
    },
    defaultVariants : {
        variant : 'outline',
    }
})

export const formDescriptionVariants = cva('text-[14px]', {
    variants : {
        variant : {
            fill : 'text-black-80 dark:text-white-80',
            outline : 'text-black-80 dark:text-white-80',
        }
    }
})
