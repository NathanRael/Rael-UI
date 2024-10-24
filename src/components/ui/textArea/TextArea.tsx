import {TextareaHTMLAttributes} from "react";
import {cva} from "class-variance-authority";
import {cn} from "../../../utils/cn.ts";

type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
    variant?: "outline" | "fill",
    size?: "md" | "lg" | "xl",
    radius?: "none" | "sm" | "md" | "lg" | "xl",
    block?: boolean,
}

const TextArea = ({variant, size, radius, block, className, ...props} : TextAreaProps) => {
    const userProps = {variant, size, radius, block};
    return (
        <textarea className={cn(textAreaVariants(userProps), className)} {...props}/>
    )
}

export default TextArea

const textAreaVariants = cva('flex items-start outline-none min-h-[120px] ', {
    variants: {
        variant : {
          outline: 'bg-transparent border border-gray-200 text-white focus:ring-4 focus:ring-primary',
          fill : '',  
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
