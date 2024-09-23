import {cva} from "class-variance-authority";
import {cn} from "../../../utils/cn.ts";
import {Eye, EyeOff} from "lucide-react";
import {MouseEventHandler, useState} from "react";

type PasswordInputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> & {
    variant?: "outline" | "fill",
    size?: "md" | "lg" | "xl",
    radius?: "sm" | "md" | "lg" | "xl",
    block?: boolean
}

type ShowPasswordIconProps = {
    passwordShown?: boolean
    className?: string
    onClick? : MouseEventHandler
};

const PasswordInput = ({variant, size, radius, block, className, ...props}: PasswordInputProps) => {
    const userProps = {variant, size, radius, block};
    const [showPassword, setShowPassword] = useState(false)
    
    const handlePasswordIconClicked = () => {
        setShowPassword(prev => !prev)
    }
    
    return (
        <div className={cn(passwordInputVariants(userProps), className)}>
            <input type={showPassword ? "text" : "password"}  {...props} className="bg-transparent px-0 py-0 flex-1 outline-none"/>
            <ShowPasswordIcon onClick={handlePasswordIconClicked}  passwordShown={showPassword} className="cursor-pointer"/>
        </div>
    )
}

const ShowPasswordIcon = ({passwordShown, className, onClick}: ShowPasswordIconProps) => {


    return (passwordShown ? <EyeOff onClick={onClick} className={className}/> :
        <Eye onClick={onClick} className={className}/>)
}

export default PasswordInput

const passwordInputVariants = cva('flex items-start justify-between  ', {
    variants: {
        variant: {
            outline: 'bg-transparent border border-gray-200 text-white focus:ring focus:ring-4 focus:ring-primary',
        },
        size: {
            md: 'px-4 py-2 ',
            lg: 'px-6 py-3 ',
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
            false: 'w-[280px]',
        }
    },
    defaultVariants: {
        variant: 'outline',
        size: 'md',
        radius: 'md',
        block: false
    }
})