import {cva} from "class-variance-authority";
import {defaultVariants} from "@/components/default.ts";

export const toastVariants = cva('flex flex-col gap-2 p-4 w-[360px] max-[360px]:w-full', {
    variants: {
        variant: {
            fill: 'bg-neutral-light-100 shadow-sm border border-neutral-light-60 dark:bg-neutral-dark-80 dark:border-none',
            outline: 'border bg-neutral-light-100 dark:bg-neutral-dark-100 border-neutral-light-60 dark:border-neutral-dark-60',
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
        variant : defaultVariants.variant,
        radius : defaultVariants.radius,
    }
});

export const toastTitleVariants = cva('text-lg', {
    variants: {
        variant: {
            fill: 'text-black-100 dark:text-white-100',
            outline: 'text-black-100 dark:text-white-100',
        },
    },
    defaultVariants: {
        variant: 'outline'
    }
})

export const toastMessageVariants = cva('text-[14px]', {
    variants: {
        variant: {
            fill: 'text-black-60 dark:text-white-80',
            outline: 'text-black-60 dark:text-white-80'
        },
    },
    defaultVariants: {
        variant: defaultVariants.variant,
    }
})