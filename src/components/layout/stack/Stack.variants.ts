import {cva} from "class-variance-authority";
import {defaultVariants} from "@/components/default.ts";

export const stackVariants = cva('flex items-center justify-center', {
    variants : {
        direction : {
            vertical: 'flex-col',
            horizontal: 'flex-row',
        },
        horizontalAlign : {
            start : 'justify-start',
            center : 'justify-center',
            end : 'justify-end'
        },
        verticalAlign : {
            start : 'items-start',
            center : 'items-center',
            end : 'items-end'
        }
    },
    defaultVariants : {
        direction : defaultVariants.stackDirection,
        horizontalAlign : 'center',
        verticalAlign : 'center',
    }
})