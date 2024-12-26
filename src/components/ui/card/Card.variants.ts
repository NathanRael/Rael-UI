import {cva} from "class-variance-authority";
import {defaultVariants} from "@/components/default.ts";

export const cardVariants = cva('flex flex-col p-6 gap-8 w-fit', {
    variants : {
        variant : {
            fill : 'bg-neutral-light-100  border-neutral-light-60 shadow-sm border dark:border-none dark:bg-neutral-dark-60',
            outline : 'bg-transparent   border-neutral-light-60 dark:border-neutral-dark-60 shadow-sm border  ',
        },
        radius : {
            none: "rounded-none",
            sm: "rounded-sm",
            md: "rounded-md",
            lg: "rounded-lg",
            xl: "rounded-xl",
            "2xl": "rounded-2xl",
            full: "rounded-full",
        }
    },
    defaultVariants:{
        variant : defaultVariants.variant ,
        radius : defaultVariants.radius,
    }
})

export const cardSectionVariants = cva('flex flex-col', {
    variants : {
        rFor : {
            meta : 'gap-1',
            content : 'gap-6',
        }
    },
    defaultVariants : {
        rFor : defaultVariants.rFor,
    }
})

export const cardTitleVariants = cva('text-3xl font-semibold', {
    variants : {
        variant : {
            fill : 'text-black-100 dark:text-white-100',
            outline : 'text-black-80 dark:text-white-80',
        }
    },
    defaultVariants : {
        variant : defaultVariants.variant,
    }
})

export const cardDescriptionVariants = cva('text-base', {
    variants : {
        variant : {
            fill : 'text-black-100 dark:text-white-100',
            outline : 'text-black-80 dark:text-white-80',
        }
    },
    defaultVariants : {
        variant : defaultVariants.variant,
    }
})