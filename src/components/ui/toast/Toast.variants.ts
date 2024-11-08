import {cva} from "class-variance-authority";

export const toastVariants = cva('flex flex-col gap-2 p-4 w-[360px] max-[360px]:w-full', {
    variants: {
        variant: {
            fill: 'bg-white border border-gray-300 shadow-sm dark:bg-black dark:border-none',
            outline: 'border border-gray-500 bg-black',
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
            fill: 'text-black dark:text-white',
            outline: 'text-white'
        },
    },
    defaultVariants: {
        variant: 'outline'
    }
})

export const toastMessageVariants = cva('text-[14px]', {
    variants: {
        variant: {
            fill: 'text-black dark:text-white',
            outline: 'text-white'
        },
    },
    defaultVariants: {
        variant: 'outline'
    }
})