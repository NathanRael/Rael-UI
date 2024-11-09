import {TextareaHTMLAttributes} from "react";
import {cn} from "@/utils/cn.ts";
import {textareaVariants} from "./Textarea.variants.ts";
import {useComponentStyle} from "@/components";
import {Radius, Size, Variant} from "@/components/global.types.ts";


type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
    variant?: Variant;
    radius?: Radius;
    size?: Size;
    block?: boolean;
}

const Textarea = ({variant, radius, block, className, size, ...props} : TextAreaProps) => {
    const  {cVariant} = useComponentStyle();
    
    const userProps = {variant : variant || cVariant , radius, block, size};
    return (
        <textarea className={cn(textareaVariants(userProps), className)} {...props}/>
    )
}

export default Textarea

