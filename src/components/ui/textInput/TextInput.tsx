import {InputHTMLAttributes} from "react";
import {cn} from "../../../utils/cn.ts";
import {textInputVariants} from "./TextInput.Variants.ts";


type TextInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & {
    variant?: "outline" | "fill",
    size?: "md" | "lg" | "xl",
    radius?: "none" | "sm" | "md" | "lg" | "xl",
    block?: boolean,
}
const TextInput = ({variant, size, radius, block, className, ...props}: TextInputProps) => {

    const userProps = {variant, size, radius, block};

    return (
        <input className={cn(textInputVariants(userProps), className)} {...props}/>
    )
}


export default TextInput

