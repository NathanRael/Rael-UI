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
            outline: 'bg-transparent border border-neutral-400 text-black  dark:border-neutral-300 dark:text-white focus-within:ring-[3px] focus-within:ring-primary',
            fill: 'bg-neutral-200 text-black dark:text-white dark:bg-zinc-800 focus-within:ring-[3px] focus-within:ring-primary',
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
        variant: 'outline',
        size: 'md',
        radius : 'md',
        focused : false,
    }
})


export const selectGroupContainerVariants = cva('absolute z-30 flex overflow-y-scroll max-h-[240px] flex-col  w-full items-center justify-between p-2 gap-2 cursor-pointer ', {
    variants : {
        variant: {
            outline: 'bg-transparent border border-neutral-400 text-black  dark:border-neutral-300 dark:text-white focus-within:ring-[3px] focus-within:ring-primary',
            fill: 'bg-neutral-200 text-black dark:text-white dark:bg-zinc-800 focus-within:ring-[3px] focus-within:ring-primary',
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
