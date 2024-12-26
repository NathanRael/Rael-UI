import {LoaderCircle} from "lucide-react";
import {ComponentProps, forwardRef} from "react";
import {cn} from "@/utils";
import {buttonVariants, LoaderVariants} from "./Button.variants.ts";
import {ButtonVariant, Radius, Size} from "@/components/global.types.ts";

type ButtonProps = ComponentProps<'button'> & {
    variant?: ButtonVariant,
    size?: Size,
    radius?: Radius,
    block?: boolean,
    loading?: boolean,
    disabled?: boolean,
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({variant, size, radius, loading, disabled, className,block, children, onClick, ...props}, ref) => {

    const userProps = {variant, size, radius, loading, disabled, block};

    return (
        <button ref={ref} disabled={disabled} onClick={onClick} className={cn(buttonVariants(userProps), className)} {...props}>
            {loading && <LoaderCircle  className={LoaderVariants({size})}/>}
            {children}
        </button>)
})

export default Button

