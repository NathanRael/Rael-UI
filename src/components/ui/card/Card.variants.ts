import {cva} from "class-variance-authority";

export const cardVariants = cva('flex flex-col p-6 gap-7 w-fit', {
    variants : {
        variant : {
            fill : 'bg-white border border-gray-300 shadow-sm',
            outline : 'border border-gray-300',
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
            content : 'gap-4',
        }
    },
    defaultVariants : {
        rFor : 'content',
    }
})

export const cardTitleVariants = cva('text-3xl font-semibold', {
    variants : {
        variant : {
            fill : 'text-black',
            outline : 'text-white',
        }
    },
    defaultVariants : {
        variant : 'outline',
    }
})

export const cardDescriptionVariants = cva('text-base', {
    variants : {
        variant : {
            fill : 'text-gray-600',
            outline : 'text-gray-400',
        }
    },
    defaultVariants : {
        variant : 'outline',
    }
})