import {ButtonHTMLAttributes, PropsWithChildren} from "react";
import {cn} from "../../../utils/cn.ts";
import {iconVariants} from "./Icon.variants.ts";

type IconProps = ButtonHTMLAttributes<HTMLButtonElement> & Required<PropsWithChildren> & {
    variant?: "primary" | "secondary" | "ghost" | "outline",
    size?: "sm" | "md" | "lg",
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



export default Icon