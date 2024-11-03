import {cva} from "class-variance-authority";

export const badgeVariants = cva('rounded-full  w-fit min-w-3 min-h-3', {
    variants : {
        variant : {
            fill : 'bg-primary text-white hover:opacity-75',
            outline: "border border-primary text-primary hover:bg-primary hover:text-white "
        },
        size : {
            sm : 'py-1 px-3 text-[12px]',
            md : 'py-2 px-4 text-[12px]',
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
    defaultVariants: {
        variant : 'fill',
        size : 'sm',
        radius : 'full',
    }
})