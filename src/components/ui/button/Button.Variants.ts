import {cva} from "class-variance-authority";

export const buttonVariants = cva(
    "flex items-center justify-center antialiased font-medium transition-all duration-200 hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2",
    {
        variants: {
            variant: {
                primary: "bg-primary text-white focus:ring-primary/50",
                secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500/50",
                ghost: "hover:bg-gray-100 hover:text-black text-white hover:opacity-100 ",
                outline: "border border-primary text-primary hover:bg-primary hover:text-white "
            },
            size: {
                sm: "text-[14px] px-3 py-2 gap-2",
                md: "text-base px-6 py-2 gap-2",
                lg: "text-lg px-8 py-4 gap-4 font-bold",
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
            block: {
                true: "w-full",
                false: "w-fit"
            },
            disabled: {
                true: "opacity-60 hover:opacity-60 cursor-not-allowed",
                false: "cursor-pointer",
            }
        },
        defaultVariants: {
            variant: "primary",
            size: "md",
            radius: "xl",
            block: false,
            disabled: false,
        },
    }
);


export const LoaderVariants = cva('animate-spin', {
    variants: {
        size: {
            sm: 'size-4',
            md: 'size-6',
            lg: 'size-6',
        }
    },
    defaultVariants: {
        size: 'sm'
    }
})