import {TextareaHTMLAttributes} from "react";
import {cn} from "../../../utils/cn.ts";
import {textareaVariants} from "./Textarea.Variants.ts";
import {useComponentStyle} from "../ComponentStyle.Context.ts";


type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
    variant?: "outline" | "fill",
    radius?: "none" | "sm" | "md" | "lg" | "xl",
    block?: boolean,
}

const Textarea = ({variant, radius, block, className, ...props} : TextAreaProps) => {
    const  {cVariant} = useComponentStyle();
    
    const userProps = {variant : variant || cVariant , radius, block};
    return (
        <textarea className={cn(textareaVariants(userProps), className)} {...props}/>
    )
}

export default Textarea

