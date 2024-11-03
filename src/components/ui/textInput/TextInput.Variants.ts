import {cva} from "class-variance-authority";

export const textInputVariants = cva('flex text-base  items-center justify-center outline-none ', {
    variants: {
        variant: {
            outline: 'bg-transparent border border-gray-200 text-white focus-within:ring-4 focus-within:ring-primary',
            fill: 'bg-neutral-300  text-black placeholder:text-neutral-500 focus-within:ring-4 focus-within:ring-primary',
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
        variant: 'outline',
        size: 'md',
        radius: 'md',
        block: false,
    }
})

export const realInputVariants = cva('bg-transparent px-0 py-0 flex-1 outline-none placeholder:text-gray-500', {
    variants: {
        variant: {
            'outline' : 'placeholder:text-gray-400',
            'fill' : 'placeholder:text-neutral-700',
        },
    }
})



