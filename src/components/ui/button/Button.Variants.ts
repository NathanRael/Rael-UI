import {cva} from "class-variance-authority";

export const buttonVariants = cva('flex items-center justify-center  antialiased font-semibold hover:opacity-50',
    {
        variants: {
            variant: {
                primary: 'bg-primary text-white',
                secondary: '',
                ghost: '',
                outline : ''
            },
            size: {
                md: 'px-4 py-2 gap-2',
                lg: 'px-6 py-3 gap-3',
                xl: 'px-8 py-4 gap-4 font-bold',
            },
            radius: {
                none: 'rounded-none',
                sm: "rounded-sm",
                md: "rounded-md",
                lg: "rounded-lg",
                xl: "rounded-xl",
                "2xl": "rounded-2xl",
                full: "rounded-full",
            },
            block: {
                true: 'w-full',
                false: 'w-fit'
            },
            disabled: {
                true: 'opacity-50  cursor-not-allowed',
                false: 'cursor-pointer',
            }
        },
        defaultVariants: {
            variant: 'primary',
            size: 'lg',
            radius: 'xl',
            block: false,
            disabled: false,
        },
    });

export const LoaderVariants = cva('animate-spin', {
    variants: {
        size: {
            md: 'size-4',
            lg: 'size-6',
            xl: 'size-6',
        }
    },
    defaultVariants: {
        size: 'md'
    }
})