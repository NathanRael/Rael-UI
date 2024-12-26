import {cva} from "class-variance-authority";
import {defaultVariants} from "@/components/default.ts";

export const buttonVariants = cva(
    "flex items-center justify-center transition-color duration-200  antialiased font-medium  hover:opacity-80 focus:outline-none focus:ring-1 focus:ring-white",
    {
        variants: {
            variant: {
                primary: "bg-primary text-white",
                secondary: "bg-secondary text-white",
                ghost: " dark:text-white text-black-100 hover:opacity-100 hover:bg-gray-300 dark:hover:bg-gray-200 hover:text-black-100 dark:hover:text-black-100",
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
            variant : defaultVariants.btnVariant,
            size : defaultVariants.size,
            radius : defaultVariants.radius,
            block: defaultVariants.block,
            disabled: defaultVariants.disabled,
        },
    }
);


export const LoaderVariants = cva('animate-spin', {
    variants: {
        size: {
            sm: 'size-[14px]',
            md: 'size-4',
            lg: 'size-6',
        }
    },
    defaultVariants: {
        size : defaultVariants.size,
    }
})