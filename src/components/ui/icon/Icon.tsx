import {ButtonHTMLAttributes, PropsWithChildren} from "react";
import {cn} from "@/utils/cn.ts";
import {iconVariants} from "./Icon.variants.ts";
import {ButtonVariant, Radius, Size} from "@/components/global.types.ts";

type IconProps = ButtonHTMLAttributes<HTMLButtonElement> & Required<PropsWithChildren> & {
    variant?: ButtonVariant,
    size?: Size,
    radius?: Radius,
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