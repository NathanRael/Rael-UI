import {cva} from "class-variance-authority";
import {cn} from "../../utils/cn.ts";
import {LoaderCircle} from "lucide-react";

type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
    variant?: "primary" | "secondary",
    size?: "md" | "lg" | "xl",
    radius?: "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "full",
    block?: boolean,
    loading?: boolean,
    disabled?: boolean,
}

const Button = ({variant, size, radius, loading, disabled, className, children, ...props}: ButtonProps) => {

    const userProps = {variant, size, radius, loading, disabled};

    return (
        <button className={cn(buttonVariants(userProps), className)} {...props}>
            {loading && <LoaderCircle className={LoaderVariants({size})}/>}
            {children}
        </button>)
}

export default Button

const buttonVariants = cva('flex items-center   font-medium hover:opacity-50',
    {
        variants: {
            variant: {
                primary: 'bg-primary text-black',
                secondary: '',
                ghost: '',
            },
            size: {
                md: 'px-4 py-2 gap-2',
                lg: 'px-6 py-3 gap-3',
                xl: 'px-8 py-4 gap-4 font-bold',
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
            radius: 'xl',
            block: false,
            disabled: false,
        },
    });

const LoaderVariants = cva('animate-spin', {
    variants: {
        size: {
            md: 'size-4',
            lg: 'size-6',
            xl: 'size-6',
        }
    },
    defaultVariants: {
        size: 'md'
    }
})