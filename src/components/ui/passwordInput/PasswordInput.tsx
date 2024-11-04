import {Eye, EyeOff} from "lucide-react";
import {InputHTMLAttributes, MouseEventHandler, useState} from "react";
import {cn} from "../../../utils/cn.ts";
import {passwordInputVariants, realInputVariants} from "./PasswordInput.Variants.ts";

type PasswordInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & {
    variant?: "outline" | "fill";
    size?: "sm" | "md" | "lg";
    radius?: "none" | "sm" | "md" | "lg" | "xl";
    block?: boolean;
    showIcon?: boolean;
    className? : string;
    leftContent?: React.ReactNode,
    rightContent?: React.ReactNode,
}

type ShowPasswordIconProps = {
    passwordShown?: boolean;
    className?: string;
    onClick? : MouseEventHandler;
};

const PasswordInput = ({variant, size, radius, block, className, showIcon = true, leftContent, rightContent, ...props}: PasswordInputProps) => {
    const userProps = {variant, size, radius, block};
    const [showPassword, setShowPassword] = useState(false)
    
    const handlePasswordIconClicked = () => {
        setShowPassword(prev => !prev)
    }
    
    return (
        <div tabIndex={-1} role="presentation" className={cn(passwordInputVariants(userProps), className)}>
            {leftContent}
            <input type={showPassword ? "text" : "password"}  {...props} className={cn(realInputVariants({variant}, className))}/>
            {showIcon && <ShowPasswordIcon onClick={handlePasswordIconClicked}  passwordShown={showPassword} className="cursor-pointer"/>}
            {rightContent}
        </div>
    )
}

const ShowPasswordIcon = ({passwordShown, className, onClick}: ShowPasswordIconProps) => {
    return (passwordShown ? <EyeOff onClick={onClick} className={className}/> :
        <Eye onClick={onClick} className={className}/>)
}

export default PasswordInput

