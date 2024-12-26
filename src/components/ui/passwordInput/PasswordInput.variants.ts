import {cva} from "class-variance-authority";
import {defaultVariants} from "@/components/default.ts";

export const passwordInputVariants = cva('flex items-center justify-between focus-within:ring-[2px] focus-within:ring-primary-80 ', {
    variants: {
        variant: {
            outline: 'border border-neutral-light-60 dark:border-neutral-dark-40 text-white-100  dark:text-white-100',
            fill: 'bg-neutral-light-80 text-black-100 border border-neutral-light-60 dark:bg-neutral-dark-80 dark:border-none dark:text-white-100 ',
        },
        size: {
            sm: 'px-2 py-1 gap-2 text-[14px]',
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
        block: {
            true: 'w-full',
            false: 'w-[280px]',
        }
    },
    defaultVariants: {
        ...defaultVariants,
    }
})

export const realInputVariants = cva(' bg-transparent px-0 py-0 flex-1 outline-none placeholder:text-gray-500', {
    variants: {
        variant: {
            'outline' : 'placeholder:text-black-100-60 dark:placeholder:text-white-60',
            'fill' : 'placeholder:text-black-100-60 dark:placeholder:text-white-60',
        },
    }
})