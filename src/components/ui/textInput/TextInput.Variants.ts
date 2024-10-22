import {cva} from "class-variance-authority";

export const textInputVariants = cva('flex items-start outline-none ', {
    variants: {
        variant: {
            outline: 'bg-transparent border border-gray-200 text-white focus:ring-4 focus:ring-primary',
            fill: 'bg-gray-500 text-black placeholder-black',
        },
        size: {
            md: 'px-4 py-2',
            lg: 'px-6 py-3',
            xl  : '',
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
        variant: 'outline',
        size: 'md',
        radius: 'md',
        block: false,
    }
})