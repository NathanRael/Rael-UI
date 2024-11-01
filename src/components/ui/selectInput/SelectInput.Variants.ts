import {cva} from "class-variance-authority";

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
            outline: 'border border-gray-200 text-white focus-within:ring focus-within:ring-primary',
            fill: '',
        },
        size: {
            md: 'px-4 py-2',
            lg: 'px-6 py-3',
            xl: '',
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
        variant: 'outline',
        size: 'md',
        radius : 'md',
        focused : false,
    }
})


export const selectGroupContainerVariants = cva('absolute z-30 flex flex-col  w-full items-center justify-between p-2 gap-2 cursor-pointer ', {
    variants : {
        variant: {
            outline: 'border border-gray-200 bg-dark text-white ',
            fill: '',
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
