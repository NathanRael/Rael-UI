import {InputHTMLAttributes} from "react";
import {cn} from "../../../utils/cn.ts";
import {realInputVariants, textInputVariants} from "./TextInput.Variants.ts";
import {useComponentStyle} from "../ComponentStyle.Context.ts";


type TextInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & {
    variant?: "outline" | "fill",
    size?: "sm" | "md" | "lg",
    radius?: "none" | "sm" | "md" | "lg" | "xl",
    block?: boolean,
    leftContent?: React.ReactNode,
    rightContent?: React.ReactNode,
    
}
const TextInput = ({variant, size, radius, block, className, leftContent, rightContent, ...props}: TextInputProps) => {
    const {cVariant} = useComponentStyle();
    const userProps = { variant : variant || cVariant, size, radius, block};

    return (
        <div tabIndex={-1} role="presentation"
             className={cn(textInputVariants(userProps), className)}>
            {leftContent}
            <input
                className={cn(realInputVariants({variant}), className)}
                {...props}
                />
            {rightContent}
        </div>
    // <input className={cn(textInputVariants(userProps), className)} {...props}/>
)
}


export default TextInput

