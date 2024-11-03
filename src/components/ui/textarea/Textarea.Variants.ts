import {cva} from "class-variance-authority";

export const textareaVariants = cva('flex items-start outline-none min-h-[120px] ', {
    variants: {
        variant: {
            outline: 'bg-transparent border border-gray-200 text-white focus-within:ring-4 focus-within:ring-primary',
            fill: 'bg-neutral-300  text-black placeholder:text-neutral-500 focus-within:ring-4 focus-within:ring-primary',
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

