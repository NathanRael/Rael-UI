import {cva} from "class-variance-authority";
import {defaultVariants} from "@/components/default.ts";

export const passwordInputVariants = cva('flex items-center justify-between  ', {
    variants : {
        variant: {
            outline: 'bg-transparent border border-neutral-400 text-black  dark:border-neutral-300 dark:text-white focus-within:ring-[3px] focus-within:ring-primary',
            fill: 'bg-neutral-200 text-black dark:text-white dark:bg-zinc-800 focus-within:ring-[3px] focus-within:ring-primary',
        },
        size: {
            sm : 'px-2 py-1 gap-2 text-[14px]',
            md: 'px-4 py-2 gap-2',
            lg: 'px-6 py-3 gap-3',
        },
        radius: {
            none: 'rounded-none',
            sm: 'rounded-sm',
            md: 'rounded-md',
            lg: 'rounded-lg',
            xl: 'rounded-xl',
            "2xl": 'rounded-2xl',
            full: 'rounded-full',
        },
        block : {
            true : 'w-full',
            false: 'w-[280px]',
        }
    },
    defaultVariants : {
        ...defaultVariants,
    }
})

export const realInputVariants = cva(' bg-transparent px-0 py-0 flex-1 outline-none placeholder:text-gray-500', {
    variants: {
        variant: {
            'outline' : 'placeholder:text-neutral-500 dark:placeholder:text-neutral-400',
            'fill' : 'placeholder:text-neutral-500',
        },
    }
})