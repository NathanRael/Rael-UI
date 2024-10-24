import {InputHTMLAttributes} from "react";
import {cn} from "../../../utils/cn.ts";
import {textInputVariants} from "./TextInput.Variants.ts";


type TextInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & {
    variant?: "outline" | "fill",
    size?: "md" | "lg" | "xl",
    radius?: "none" | "sm" | "md" | "lg" | "xl",
    block?: boolean,
    leftContent?: React.ReactNode,
    rightContent?: React.ReactNode,
    
}
const TextInput = ({variant, size, radius, block, className, leftContent, rightContent, ...props}: TextInputProps) => {

    const userProps = {variant, size, radius, block};

    return (
        <div tabIndex={-1} role="presentation"
             className={cn(textInputVariants(userProps), className)}>
            {leftContent}
            <input
                className={"bg-transparent px-0 py-0 flex-1 outline-none"}
                {...props}
                />
            {rightContent}
        </div>
    // <input className={cn(textInputVariants(userProps), className)} {...props}/>
)
}


export default TextInput

