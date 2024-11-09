import {cva} from "class-variance-authority";

export const cardVariants = cva('flex flex-col p-6 gap-8 w-fit', {
    variants : {
        variant : {
            fill : 'bg-white  border border-gray-300 shadow-md dark:bg-zinc-900 dark:border-neutral-800',
            outline : 'border bg-white dark:bg-black border-neutral-400 dark:border-neutral-300',
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
})

export const cardSectionVariants = cva('flex flex-col', {
    variants : {
        rFor : {
            meta : 'gap-1',
            content : 'gap-6',
        }
    },
    defaultVariants : {
        rFor : 'content',
    }
})

export const cardTitleVariants = cva('text-3xl font-semibold', {
    variants : {
        variant : {
            fill : 'text-black dark:text-white',
            outline : 'text-black dark:text-white',
        }
    },
    defaultVariants : {
        variant : 'outline',
    }
})

export const cardDescriptionVariants = cva('text-base', {
    variants : {
        variant : {
            fill : 'text-gray-500 dark:text-gray-400',
            outline : 'text-gray-400',
        }
    },
    defaultVariants : {
        variant : 'outline',
    }
})