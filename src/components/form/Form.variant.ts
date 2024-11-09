import {cva} from "class-variance-authority";

export const formLabelVariants = cva('text-base', {
    variants : {
        variant : {
            fill : 'text-meta-fill-l-text dark:text-meta-fill-d-text',
            outline : 'text-meta-outline-l-text dark:text-meta-outline-d-text',
        }
    },
    defaultVariants : {
        variant : 'outline',
    }
})

export const formDescriptionVariants = cva('text-[14px]', {
    variants : {
        variant : {
            fill : 'text-meta-fill-l-text-sec dark:text-meta-fill-d-text-sec',
            outline : 'text-meta-outline-l-text-sec dark:text-meta-outline-d-text-sec',
        }
    }
})
