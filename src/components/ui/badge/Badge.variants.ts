import {cva} from "class-variance-authority";
import {defaultVariants} from "@/components/default.ts";
import {Radius, Size, Variant} from "@/components/global.types.ts";

export const badgeVariants = cva('rounded-full  w-fit min-w-3 min-h-3', {
    variants : {
        variant : {
            fill : 'bg-primary text-white hover:opacity-75',
            outline: "border border-primary text-primary hover:bg-primary hover:text-white "
        },
        size : {
            sm : 'py-1 px-3 text-[12px]',
            md : 'py-2 px-4 text-[12px]',
            // lg: 'py-2 px-4 text-[12px]'
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
    },
    defaultVariants: {
        variant : defaultVariants.variant as Variant,
        size : defaultVariants.size as Exclude<Size, 'lg'>,
        radius : defaultVariants.radius as Radius,
    }
})