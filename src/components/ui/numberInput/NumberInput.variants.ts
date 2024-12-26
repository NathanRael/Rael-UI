import {cva} from "class-variance-authority";
import {defaultVariants} from "@/components/default.ts";

export const numberInputVariants = cva('flex flex-row items-center justify-start focus-within:ring-[2px] focus-within:ring-primary-80', {
    variants: {
        variant: {
            outline: 'border border-neutral-light-60 dark:border-neutral-dark-40 text-black-100-80 dark:text-white-80',
            fill: 'bg-neutral-light-80 text-black-100 border border-neutral-light-60 dark:bg-neutral-dark-80 dark:border-none dark:text-white-100 ',
        },
        size: {
            sm: 'px-2 py-1 gap-2 text-[14px]',
            md: 'px-4 py-2 gap-2',
            lg: 'px-[20px] py-3 gap-3',
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
        showButton: {
            true: '',
            false: '',
        },
        block: {
            true: 'w-full',
            false: 'w-[164px]',
        },
    },
    defaultVariants: {
        variant: defaultVariants.variant,
        size: defaultVariants.size,
        radius: defaultVariants.radius,
        block: defaultVariants.block,
    }
})

export const spinButtonVariants = cva('', {
    variants : {
        radius : {
            none: 'rounded-none',
            sm: 'rounded-sm',
            md: 'rounded-md',
            lg: 'rounded-lg',
            xl: 'rounded-xl',
            "2xl": 'rounded-2xl',
            full: 'rounded-full',
        },
        size : {
            sm : 'p-[2px]',
            md : 'p-1',
            lg : 'p-1',
        }
    },

    defaultVariants : {
        radius : defaultVariants.radius
    }
})
