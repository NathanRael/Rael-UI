import {ComponentProps, forwardRef, useImperativeHandle, useRef} from "react";
import {cn} from "@/utils/cn.ts";
import {realInputVariants, textInputVariants} from "./TextInput.variants.ts";
import {useComponentStyle} from "@/components";
import {VariantProps} from "class-variance-authority";


type TextInputProps = ComponentProps<'input'> & VariantProps<typeof textInputVariants> &{
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
                autoComplete={'off'}
                ref={inputRef}
                className={cn(realInputVariants({variant}))}
                {...props}
            />
            {rightContent}
        </div>
    )
});


export default TextInput

