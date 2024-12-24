import {forwardRef, InputHTMLAttributes, useImperativeHandle, useRef} from "react";
import {cn} from "@/utils/cn.ts";
import {realInputVariants, textInputVariants} from "./TextInput.variants.ts";
import {useComponentStyle} from "@/components";
import {Radius, Size, Variant} from "@/components/global.types.ts";


type TextInputProps = InputHTMLAttributes<HTMLInputElement> & {
    variant?: Variant,
    size?: Size,
    radius?: Radius,
    block?: boolean,
    leftContent?: React.ReactNode,
    rightContent?: React.ReactNode,

}
const TextInput = forwardRef<HTMLInputElement, TextInputProps>(({
                                                                    variant,
                                                                    size,
                                                                    radius,
                                     
                                                                    block,
                                                                    className,
                                                                    leftContent,
                                                                    rightContent,
                                                                    ...props
                                                                }, ref) => {
    const {cVariant} = useComponentStyle();
    const userProps = {variant: variant || cVariant, size, radius, block};
    const inputRef = useRef<HTMLInputElement>(null);
    
    useImperativeHandle(ref, () => inputRef.current as HTMLInputElement, [inputRef]);

    return (
        <div onClick={() => inputRef.current && inputRef.current.focus()} tabIndex={-1} role="presentation"
             className={cn(textInputVariants(userProps), className)}>
            {leftContent}
            <input
                ref={inputRef}
                className={cn(realInputVariants({variant}))}
                {...props}
            />
            {rightContent}
        </div>
    )
}) as any;


export default TextInput

