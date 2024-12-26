import {cva} from "class-variance-authority";
import {defaultVariants} from "@/components/default.ts";
import {Size} from "@/components/global.types.ts";

export const checkboxVariants = cva('peer   transition-all appearance-none border border-neutral-light-60 dark:border-white-60 rounded ', {
    variants: {
        variant: {
            fill: 'checked:bg-primary-100 checked:border-primary-100',
            outline: 'text-black-100',
        },
        disabled: {
            true: 'disabled:bg-gray-600 disabled:border-gray-600',
            false: ''
        },
        size: {
            sm: 'size-4',
            md: 'size-[18px]'
        },
        radius: {
            none: "rounded-none",
            sm: "rounded-sm",
            md: "rounded-md",
            lg: "rounded-lg",
            xl: "rounded-xl",
            "2xl": "rounded-2xl",
            full: "rounded-full",
        },
    },
    defaultVariants: {
        ...defaultVariants,
        size : defaultVariants.size as Exclude<Size, 'lg'>,
    }
})

export const sharedVariants = cva(' ', {
    variants: {
        disabled: {
            true: 'cursor-not-allowed',
            false: 'cursor-pointer'
            ,
        }
    },
    defaultVariants: {
        disabled: defaultVariants.disabled
    }
})

export const checkboxIconVariants = cva('absolute  opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none ', {
    variants : {
        variant : {
            outline : 'text-black-100 dark:text-white',
            fill : 'text-white',
        }
    }
})