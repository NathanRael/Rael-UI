import {cva} from "class-variance-authority";
import {defaultVariants} from "@/components/default.ts";

export const selectContainerVariants = cva(' outline-none relative space-y-2', {
    variants : {
        block : {
            true : 'w-full',
            false: 'w-[280px]',
        },
    },

    defaultVariants : {
        block : false,
    }
})
export const SelectTriggerVariants = cva('flex w-full items-center justify-between cursor-pointer ', {
    variants: {
        variant: {
            outline : 'border border-neutral-light-60 dark:border-neutral-dark-40 text-black-100 dark:text-white-100',
            fill : 'bg-neutral-light-80 text-black-100 border border-neutral-light-60 dark:bg-neutral-dark-80 dark:border-none dark:text-white-100 ',
        },
        size: {
            sm : 'px-2 py-1 gap-2 text-[14px]',
            md: 'px-4 py-2 gap-2',
            lg: 'px-6 py-3 gap-3',
        },
        radius : {
            none: 'rounded-none',
            sm: 'rounded-sm',
            md: 'rounded-md',
            lg: 'rounded-lg',
            xl: 'rounded-xl',
            "2xl": 'rounded-2xl',
            full: 'rounded-full',
        },
        focused : {
            true : 'ring-4 ring-primary',
            false : ''
        }

    },
    defaultVariants: {
        variant : defaultVariants.variant,
        size : defaultVariants.size,
        radius : defaultVariants.radius,
    }
})


export const selectGroupContainerVariants = cva('absolute z-30 flex overflow-y-auto hide-scrollbar max-h-[240px] flex-col  w-full items-center justify-between p-2 gap-2 cursor-pointer ', {
    variants : {
        variant: {
            fill : 'bg-neutral-light-80 text-black-100 border border-neutral-light-60 dark:bg-neutral-dark-80 dark:border-none dark:text-white-100 ',
            outline : 'border border-neutral-light-60 dark:border-neutral-dark-40 text-black-100 dark:text-white-100',

        },
        radius : {
            none: 'rounded-none',
            sm: 'rounded-sm',
            md: 'rounded-md',
            lg: 'rounded-lg',
            xl: 'rounded-xl',
            "2xl": 'rounded-2xl',
            full: 'rounded-full',
        },
    },
    defaultVariants : {
        variant : defaultVariants.variant,
        radius : defaultVariants.radius,
    }
})
