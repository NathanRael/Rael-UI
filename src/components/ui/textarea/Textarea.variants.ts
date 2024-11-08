import {cva} from "class-variance-authority";

export const textareaVariants = cva('flex items-start outline-none min-h-[120px] ', {
    variants: {
        variant: {
            outline: 'bg-transparent border border-neutral-400 text-black  dark:border-neutral-300 dark:text-white focus-within:ring-[3px] focus-within:ring-primary',
            fill: 'bg-neutral-200 text-black dark:text-white dark:bg-zinc-800 focus-within:ring-[3px] focus-within:ring-primary',
        },
        size : {
            md: 'px-4 py-2',
            lg : 'px-6 py-3',
            xl : '',
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
        block: {
            true: 'w-full',
            false: 'w-[280px]',
        }
    },

    defaultVariants : {
        variant : 'outline',
        size : 'md',
        radius : 'md',
        block : false,
    }
})

