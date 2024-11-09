import {cva} from "class-variance-authority";

export const toastVariants = cva('flex flex-col gap-2 p-4 w-[360px] max-[360px]:w-full', {
    variants: {
        variant: {
            fill: 'bg-meta-fill-l-bg border border-meta-fill-l-border shadow-sm dark:bg-meta-fill-d-bg dark:border-meta-fill-d-border',
            outline: 'border border-meta-outline-l-border bg-meta-outline-l-bg dark:border-meta-outline-d-border dark:bg-meta-outline-d-bg',
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
        variant : 'outline',
        radius : 'lg',
    }
});

export const toastTitleVariants = cva('text-lg', {
    variants: {
        variant: {
            fill: 'text-meta-fill-l-text dark:text-meta-fill-d-text',
            outline: 'text-meta-outline-l-text dark:text-meta-outline-d-text'
        },
    },
    defaultVariants: {
        variant: 'outline'
    }
})

export const toastMessageVariants = cva('text-[14px]', {
    variants: {
        variant: {
            fill: 'text-meta-fill-l-text-sec  dark:text-meta-fill-d-text-sec',
            outline: 'text-meta-outline-l-text-sec dark:text-meta-outline-d-text-sec'
        },
    },
    defaultVariants: {
        variant: 'outline'
    }
})