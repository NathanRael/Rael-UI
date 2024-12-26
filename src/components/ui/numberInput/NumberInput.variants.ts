import {cva} from "class-variance-authority";
import {defaultVariants} from "@/components/default.ts";

export const numberInputVariants = cva(' focus-within:ring-[2px] focus-within:ring-primary-80', {
    variants: {
        variant: {
            outline : 'border border-neutral-light-60 dark:border-neutral-dark-40 text-black-100-80 dark:text-white-80',
            fill : 'bg-neutral-light-80 text-black-100 border border-neutral-light-60 dark:bg-neutral-dark-80 dark:border-none dark:text-white-100 ',
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
        block: {
            true: 'w-full',
            false: 'w-[86px]',
        }
    },
    defaultVariants: {
        variant : defaultVariants.variant,
        size : defaultVariants.size,
        radius : defaultVariants.radius,
        block: defaultVariants.block,
    }
})