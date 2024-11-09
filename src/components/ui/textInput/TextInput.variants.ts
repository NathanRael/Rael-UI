import {cva} from "class-variance-authority";
import {defaultVariants} from "@/components/default.ts";

export const textInputVariants = cva('flex text-base items-center justify-center outline-none', {
    variants: {
        variant: {
            outline: 'bg-transparent border border-input-outline-l-border  text-input-outline-l-text  dark:border-input-outline-d-border dark:text-input-outline-d-text focus-within:ring-[3px] focus-within:ring-primary',
            fill: 'bg-input-fill-l-bg text-input-fill-l-text dark:text-input-fill-d-text dark:bg-input-fill-d-bg focus-within:ring-[3px] focus-within:ring-primary',
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
            false: 'w-[280px]',
        }
    },
    defaultVariants: {
        variant : defaultVariants.variant,
        size : defaultVariants.size,
        radius : defaultVariants.radius,
        block: defaultVariants.block,
    }
})

export const realInputVariants = cva('bg-transparent px-0 py-0 flex-1 outline-none placeholder:text-gray-500', {
    variants: {
        variant: {
            'outline' : 'placeholder:text-input-outline-l-placeholder dark:placeholder:text-input-outline-d-placeholder',
            'fill' : 'placeholder:text-input-fill-l-placeholder dark:placeholder:text-input-fill-d-placeholder',
        },
    }
})



