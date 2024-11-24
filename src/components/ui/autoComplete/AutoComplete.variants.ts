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
            outline: 'bg-transparent border border-input-outline-l-border  text-input-outline-l-text  dark:border-input-outline-d-border dark:text-input-outline-d-text focus-within:ring-[3px] focus-within:ring-primary',
            fill: 'bg-input-fill-l-bg text-input-fill-l-text dark:text-input-fill-d-text dark:bg-input-fill-d-bg focus-within:ring-[3px] focus-within:ring-primary',
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