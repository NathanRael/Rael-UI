import {TextareaHTMLAttributes} from "react";
import {cn} from "../../../utils/cn.ts";
import {textAreaVariants} from "./TextArea.Variants.ts";

type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
    variant?: "outline" | "fill",
    size?: "md" | "lg" | "xl",
    radius?: "none" | "sm" | "md" | "lg" | "xl",
    block?: boolean,
}

const TextArea = ({variant, size, radius, block, className, ...props} : TextAreaProps) => {
    const userProps = {variant, size, radius, block};
    return (
        <textarea className={cn(textAreaVariants(userProps), className)} {...props}/>
    )
}

export default TextArea

