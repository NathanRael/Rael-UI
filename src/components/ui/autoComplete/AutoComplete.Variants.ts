import {cva} from "class-variance-authority";

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

export const autoCompleteGroupContainerVariants = cva('absolute z-30 flex flex-col  w-full items-center justify-between p-2 gap-2 cursor-pointer ', {
    variants : {
        variant: {
            outline: 'bg-transparent border border-gray-200 text-white focus-within:ring-4 focus-within:ring-primary',
            fill: 'bg-neutral-300  text-black placeholder:text-neutral-500 focus-within:ring-4 focus-within:ring-primary',
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
        variant : 'outline',
        radius : 'md'
    }
})