import {TextareaHTMLAttributes, useRef} from "react";
import {cn} from "@/utils/cn.ts";
import {realTextareaVariants, textareaVariants} from "./Textarea.variants.ts";
import {useComponentStyle} from "@/components";
import {Radius, Size, Variant} from "@/components/global.types.ts";


type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
    variant?: Variant;
    radius?: Radius;
    size?: Size;
    block?: boolean;
    inputClassName?: string;
    leftContent?: React.ReactNode;
    rightContent?: React.ReactNode;
}

const Textarea = ({variant, radius, block, className, size, leftContent, rightContent, inputClassName, ...props} : TextAreaProps) => {
    const  {cVariant} = useComponentStyle();
    const inputRef = useRef<HTMLTextAreaElement>(null);
    
    const userProps = {variant : variant || cVariant , radius, block, size};
    return (
        <div onClick={() => inputRef.current && inputRef.current.focus()} tabIndex={-1} role="presentation"
             className={cn(textareaVariants(userProps), className)}>
            {leftContent}
            <textarea  ref={inputRef} className={cn(realTextareaVariants({variant:  userProps.variant}), inputClassName)} {...props}/>
            {rightContent}
        </div>
    )
}

export default Textarea

