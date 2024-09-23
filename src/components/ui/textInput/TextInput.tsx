import {cva} from "class-variance-authority";
import {cn} from "@utils/cn.ts";


type TextInputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> & {
    variant?: "outline" | "fill",
    size? : "md" | "lg" | "xl",
    radius? : "sm" | "md" | "lg" | "xl",   
    block? : boolean
}
const TextInput = ({variant, size, radius, block, disabled, className, children, ...props}: TextInputProps) => {
    
    const userProps = {variant, size, radius, block};
    
    return (
        <input  className={cn(textInputVariants(userProps), className)} {...props}/>
    )
}

export default TextInput

const textInputVariants = cva('flex items-start outline-none ', {
    variants : {
        variant: {
            outline : 'bg-transparent border border-gray-200 text-white focus:ring focus:ring-4 focus:ring-primary',
        },
        size: {
            md : 'px-4 py-2',
            lg : 'px-6 py-3',
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
        block : {
            true : 'w-full',
            false: 'w-[280px]',
        }
    },
    defaultVariants : {
        variant: 'outline',
        size: 'md',
        radius: 'md',
        block : false
    }
})