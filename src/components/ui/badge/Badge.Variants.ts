import {cva} from "class-variance-authority";

export const badgeVariants = cva('rounded-full  w-fit min-w-3 min-h-3', {
    variants : {
        variant : {
            fill : 'bg-primary text-white hover:opacity-75',
            outline : ''
        },
        size : {
            sm : '',
            md : 'py-1 px-3 text-[12px]',
            lg : '',
        }
    },
    defaultVariants: {
        variant : 'fill',
        size : 'md',
    }
})