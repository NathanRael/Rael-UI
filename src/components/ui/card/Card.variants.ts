import {cva} from "class-variance-authority";

export const cardVariants = cva('flex flex-col p-6 gap-7 w-fit', {
    variants : {
        variant : {
            fill : 'bg-white',
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
            content : 'gap-7',
        }
    },
    defaultVariants : {
        rFor : 'content',
    }
})