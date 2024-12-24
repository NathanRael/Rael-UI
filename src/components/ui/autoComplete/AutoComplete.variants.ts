import {cva} from "class-variance-authority";
import {defaultVariants} from "@/components/default.ts";
import {Radius, Variant} from "@/components/global.types.ts";

export const autoCompleteContainerVariants = cva('space-y-2 relative', {
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

export const autoCompleteGroupContainerVariants = cva('absolute z-30 flex flex-col  w-full items-center justify-between p-2 gap-2 cursor-pointer max-h-[240px] hide-scrollbar', {
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
        variant : defaultVariants.variant as Variant,
        radius : defaultVariants.radius as Radius,
    }
})