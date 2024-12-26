import {ComponentProps, forwardRef, useImperativeHandle, useRef} from "react";
import {useComponentStyle} from "@/components";
import {cn} from "@/utils";
import {realInputVariants} from "@/components/ui/textInput/TextInput.variants.ts";
import {numberInputVariants} from "@/components/ui/numberInput/NumberInput.variants.ts";
import {VariantProps} from "class-variance-authority";

type NumberInputProps = Omit<ComponentProps<'input'>, 'size' & 'type'> & VariantProps<typeof numberInputVariants> & {
    leftContent?: React.ReactNode,
    rightContent?: React.ReactNode,
};

const NumberInput = forwardRef<HTMLInputElement, NumberInputProps>(({
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
             className={cn(numberInputVariants(userProps), className)}>
            {leftContent}
            <input
                type={'number'}
                autoComplete={'off'}
                ref={inputRef}
                className={cn("rael-number-input",realInputVariants({variant}), 'w-full')}
                {...props}
            />
            {rightContent}
        </div>
    )
});

export default NumberInput
