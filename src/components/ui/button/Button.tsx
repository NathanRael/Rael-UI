import {LoaderCircle} from "lucide-react";
import {ButtonHTMLAttributes} from "react";
import {cn} from "../../../utils/cn.ts";
import {buttonVariants, LoaderVariants} from "./Button.Variants.ts";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "primary" | "secondary" | "ghost" | "outline",
    size?: "sm" | "md" | "lg",
    radius?: "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "full",
    block?: boolean,
    loading?: boolean,
    disabled?: boolean,
}

const Button = ({variant, size, radius, loading, disabled, className,block, children, onClick, ...props}: ButtonProps) => {

    const userProps = {variant, size, radius, loading, disabled, block};

    return (
        <button disabled={disabled} onClick={onClick} className={cn(buttonVariants(userProps), className)} {...props}>
            {loading && <LoaderCircle className={LoaderVariants({size})}/>}
            {children}
        </button>)
}

export default Button

