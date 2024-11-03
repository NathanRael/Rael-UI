import {cva} from "class-variance-authority";

export const avatarVariants = cva('overflow-hidden object-cover flex bg-white font-bold items-center justify-center', {
    variants : {
        size : {
            sm : 'size-7 text-base',
            md : 'size-10 text-xl',
            lg : 'size-[54px] text-2xl',
        },
        radius: {
            none: 'rounded-none',
            sm: "rounded-sm",
            md: "rounded-md",
            lg: "rounded-lg",
            xl: "rounded-xl",
            "2xl": "rounded-2xl",
            full: "rounded-full",
        },
    },
    defaultVariants : {
        size : 'md',
        radius : 'full'
    }
})