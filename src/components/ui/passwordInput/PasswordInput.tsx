import {Eye, EyeOff} from "lucide-react";
import {forwardRef, MouseEventHandler, useImperativeHandle, useRef, useState} from "react";
import {cn} from "@/utils/cn.ts";
import {passwordInputVariants, realInputVariants} from "./PasswordInput.variants.ts";
import {useComponentStyle} from "@/components/ui/ComponentStyle.Context.ts";
import {VariantProps} from "class-variance-authority";

type PasswordInputProps = Omit<React.ComponentProps<'input'>, 'size'> & VariantProps<typeof passwordInputVariants> &  {
    // variant?: Variant;
    // size?: Size;
    // radius?: Radius;
    // block?: boolean;
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

const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(({variant, size, radius, block, className, showIcon = true, leftContent, rightContent, ...props}, ref) => {
    const {cVariant} = useComponentStyle();
    const userProps = {variant : variant || cVariant, size, radius, block};
    const inputRef = useRef<HTMLInputElement | null>(null)
    const [showPassword, setShowPassword] = useState(false);
    
    useImperativeHandle(ref, () =>  inputRef.current as HTMLInputElement, [inputRef])
    
    const handlePasswordIconClicked = () => {
        setShowPassword(prev => !prev)
    }
    
    return (
        <div tabIndex={-1} role="presentation" className={cn(passwordInputVariants(userProps), className)}>
            {leftContent}
            <input ref={inputRef}  type={showPassword ? "text" : "password"}  {...props} className={cn(` secure ${realInputVariants({variant})}`, className)}/>
            {showIcon && <ShowPasswordIcon onClick={handlePasswordIconClicked}  passwordShown={showPassword} className="cursor-pointer"/>}
            {rightContent}
        </div>
    )
});

const ShowPasswordIcon = ({passwordShown, className, onClick}: ShowPasswordIconProps) => {
    return (passwordShown ? <EyeOff onClick={onClick} className={className}/> :
        <Eye onClick={onClick} className={className}/>)
}

export default PasswordInput

