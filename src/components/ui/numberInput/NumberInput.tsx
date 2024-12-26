import {ComponentProps, forwardRef, useEffect, useImperativeHandle, useRef, useState} from "react";
import {Icon, useComponentStyle} from "@/components";
import {cn} from "@/utils";
import {realInputVariants} from "@/components/ui/textInput/TextInput.variants.ts";
import {numberInputVariants, spinButtonVariants} from "@/components/ui/numberInput/NumberInput.variants.ts";
import {VariantProps} from "class-variance-authority";
import {Minus, Plus} from "lucide-react";

type NumberInputProps = Omit<ComponentProps<'input'>, 'size' & 'type'> & VariantProps<typeof numberInputVariants> & {
    leftContent?: React.ReactNode,
    rightContent?: React.ReactNode,
    showButton?: boolean,
};

const NumberInput = forwardRef<HTMLInputElement, NumberInputProps>(({
                                                                        variant,
                                                                        size,
                                                                        radius,
                                                                        block,
                                                                        className,
                                                                        leftContent,
                                                                        rightContent,
                                                                        onChange,
                                                                        showButton = true,
                                                                        value,
                                                                        ...props
                                                                    }, ref) => {
    const [localValue, setLocalValue] = useState(Number(value) || 0);

    const {cVariant} = useComponentStyle();
    const userProps = {variant: variant || cVariant, size, radius, block, showButton};
    const inputRef = useRef<HTMLInputElement>(null);


    useImperativeHandle(ref, () => inputRef.current as HTMLInputElement, [inputRef]);

    useEffect(() => {
        if (value === undefined || value === null) return;
        setLocalValue(Number(value))
    }, [value, onChange])


    return (
        <div onClick={() => inputRef.current && inputRef.current.focus()} tabIndex={-1} role="presentation"
             className={cn("relative", numberInputVariants(userProps), className)}>
            {leftContent}
            <input
                type={'number'}
                autoComplete={'off'}
                value={localValue}
                onChange={(e) => {
                    setLocalValue(Number(e.target.value))
                    onChange?.(e);
                }}
                ref={inputRef}
                className={cn("rael-number-input", realInputVariants({variant}), 'w-full')}
                {...props}
            />
            {showButton &&
                <SpinButton value={localValue}
                            onChange={(newValue) => {
                                setLocalValue(newValue);
                                onChange?.({target: {value: newValue}} as any);
                            }}
                            size={size} radius={radius}
                />}
            {rightContent}
        </div>
    )
});

const SpinButton = ({radius, size, onChange, value}: {
    onChange: (newValue: number) => void
    value: number;
} & Pick<VariantProps<typeof numberInputVariants>, "radius" | "size">) => {
    const userProps = {radius, size}

    const handleMinus = () => {
        onChange(Number(value - 1));
    }

    const handlePlus = () => {
        onChange(Number(value + 1));
    }

    return (
        <div className={`flex flex-row gap-1 items-center justify-center `}>
            <Icon onClick={handleMinus} size={'sm'} variant={'ghost'} className={cn(spinButtonVariants(userProps))}>
                <Minus size={16}/>
            </Icon>
            <Icon onClick={handlePlus} size={'sm'} variant={'ghost'} className={cn(spinButtonVariants(userProps))}>
                <Plus size={16}/>
            </Icon>
        </div>
    )
}

export default NumberInput
