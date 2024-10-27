import {ButtonHTMLAttributes, PropsWithChildren} from "react";
import {cva} from "class-variance-authority";
import {cn} from "../../../utils/cn.ts";

type IconProps = ButtonHTMLAttributes<HTMLButtonElement> & Required<PropsWithChildren> & {
    variant?: "primary" | "secondary" | "ghost" | "outline",
    size?: "md" | "lg" | "xl",
    radius?: "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "full",
    block?: boolean,
    loading?: boolean,
    disabled?: boolean,
}
 const Icon = ({variant, size, radius, loading, disabled, className, children, ...props}: IconProps) => {
     const userProps = {variant, size, radius, loading, disabled};
    
    return (
        <button disabled={disabled} className={cn(iconVariants(userProps), className)} {...props}>
            {children}
        </button>
    )
}

const iconVariants = cva('flex items-center  antialiased font-semibold hover:opacity-50', {
    variants: {
        variant: {
            primary: 'bg-primary text-white',
                secondary: '',
                ghost: '',
                outline : ''
        },
        size: {
            md: 'p-2 size-10 gap-2',
            lg: 'py-2 px-3 size-12 gap-3',
            xl: 'py-2 px-4  gap-4 size-14 font-bold',
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
            size: 'md',
            radius: 'full',
            block: false,
            disabled: false,
    },
})

export default Icon