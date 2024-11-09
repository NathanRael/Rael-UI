import {Eye, EyeOff} from "lucide-react";
import {InputHTMLAttributes, MouseEventHandler, useState} from "react";
import {cn} from "@/utils/cn.ts";
import {passwordInputVariants, realInputVariants} from "./PasswordInput.variants.ts";
import {useComponentStyle} from "@/components/ui/ComponentStyle.Context.ts";
import {Radius, Size, Variant} from "@/components/global.types.ts";

type PasswordInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & {
    variant?: Variant;
    size?: Size;
    radius?: Radius;
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
    const {cVariant} = useComponentStyle();
    const userProps = {variant : variant || cVariant, size, radius, block};
    const [showPassword, setShowPassword] = useState(false)
    
    const handlePasswordIconClicked = () => {
        setShowPassword(prev => !prev)
    }
    
    return (
        <div tabIndex={-1} role="presentation" className={cn(passwordInputVariants(userProps), className)}>
            {leftContent}
            <input  type={showPassword ? "text" : "password"}  {...props} className={cn(` secure ${realInputVariants({variant})}`, className)}/>
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

