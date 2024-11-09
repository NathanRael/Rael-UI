import {cva} from "class-variance-authority";
import {defaultVariants} from "@/components/default.ts";

export const cardVariants = cva('flex flex-col p-6 gap-8 w-fit', {
    variants : {
        variant : {
            fill : 'bg-meta-fill-l-bg  border border-meta-fill-l-border shadow-md dark:bg-meta-fill-d-bg dark:border-meta-fill-d-border',
            outline : 'border bg-meta-outline-l-bg dark:bg-meta-outline-d-bg border-meta-outline-l-border dark:border-meta-outline-d-border',
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
            fill : 'text-meta-fill-l-text dark:text-meta-fill-d-text',
            outline : 'text-meta-outline-l-text dark:text-meta-outline-d-text',
        }
    },
    defaultVariants : {
        variant : defaultVariants.variant,
    }
})

export const cardDescriptionVariants = cva('text-base', {
    variants : {
        variant : {
            fill : 'text-meta-fill-l-text-sec dark:text-meta-fill-d-text-sec',
            outline : 'text-meta-outline-l-text-sec dark:text-meta-outline-d-text-sec',
        }
    },
    defaultVariants : {
        variant : defaultVariants.variant,
    }
})