import {Eye, EyeOff} from "lucide-react";
import {InputHTMLAttributes, MouseEventHandler, useState} from "react";
import {cn} from "../../../utils/cn.ts";
import {passwordInputVariants} from "./PasswordInput.Variants.ts";

type PasswordInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & {
    variant?: "outline" | "fill";
    size?: "md" | "lg" | "xl";
    radius?: "none" | "sm" | "md" | "lg" | "xl";
    block?: boolean;
    showIcon?: boolean;
}

type ShowPasswordIconProps = {
    passwordShown?: boolean;
    className?: string;
    onClick? : MouseEventHandler;
};

const PasswordInput = ({variant, size, radius, block, className, showIcon = true, ...props}: PasswordInputProps) => {
    const userProps = {variant, size, radius, block};
    const [showPassword, setShowPassword] = useState(false)
    
    const handlePasswordIconClicked = () => {
        setShowPassword(prev => !prev)
    }
    
    return (
        <div tabIndex={-1} role="presentation" className={cn(passwordInputVariants(userProps), className)}>
            <input type={showPassword ? "text" : "password"}  {...props} className="bg-transparent px-0 py-0 flex-1 outline-none"/>
            {showIcon && <ShowPasswordIcon onClick={handlePasswordIconClicked}  passwordShown={showPassword} className="cursor-pointer"/>}
        </div>
    )
}

const ShowPasswordIcon = ({passwordShown, className, onClick}: ShowPasswordIconProps) => {
    return (passwordShown ? <EyeOff onClick={onClick} className={className}/> :
        <Eye onClick={onClick} className={className}/>)
}

export default PasswordInput

