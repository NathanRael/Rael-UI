import {RadioGroupContext, useRadioGroupContext, useRadio} from "./Radio.context.ts";
import {useMemo} from "react";
import { radioIconVariants, radioVariants, sharedVariants} from "./Radio.variants.ts";
import {cn} from "@/utils/cn.ts";
import {useComponentStyle} from "@/components";
import {Variant} from "@/components/global.types.ts";

type RadioGroupProps = {
    children: React.ReactNode,
    defaultValue: string,
    onChange?: ({target: {name, value}}: { target: { name: string, value: string } }) => void,
    disabled?: boolean;
    name?: string;
    className?: string;
    variant?: Variant;
}

type RadioItemProps =  {
    value: string;
    label?: React.ReactNode;
    className?: string;
    // onChange?: (value: string) => void,
}

const RadioGroup = (props: RadioGroupProps) => {

    const {
        children,
        defaultValue,
        onChange = () => {
        },
        disabled = false,
        name,
        className,
        variant,
    } = props;
    
    const {selectedValue, setSelectedValue} = useRadio({
        defaultValue,
        onChange,
        disabled,
        name,
    });


    return (
        <RadioGroupContext.Provider value={{selectedValue, setSelectedValue, disabled, variant : variant}}>
            <div className={cn("flex flex-col gap-2", className)}>
                {children}
            </div>
        </RadioGroupContext.Provider>

    )
}

export default RadioGroup;


export const RadioItem = ({value, label, className}: RadioItemProps) => {
    const {selectedValue, setSelectedValue, disabled, variant} = useRadioGroupContext();
    const {cVariant} = useComponentStyle();
    const selected = useMemo(() => selectedValue == value, [selectedValue, value]);
    const radioId = useMemo(() => `radio-${Math.random().toString(36).slice(2, 9)}-${value}`, [value]);

    const handleSelectedValue = () => {
        if (disabled)
            return;
        setSelectedValue(value);
    }

    return (
        <div className={"flex items-center gap-2 text-white"}>
            <div className={"inline-flex items-center"}>
                <label htmlFor={value} className="relative flex items-center">
                    <input disabled={disabled}
                           className={`${sharedVariants({disabled})} ${radioVariants({variant : variant || cVariant})} `}
                           id={radioId}
                           onChange={handleSelectedValue}
                           checked={selected}
                           type="radio"/>
                    {
                        selected && <span
                            className={radioIconVariants({variant: variant || cVariant })}></span>
                    }
                </label>
            </div>
            {
                label && <label className={cn(`text-base text-black-100 dark:text-white ${sharedVariants({disabled})}`, className)} onClick={handleSelectedValue}
                                htmlFor={radioId}>{label}</label>
            }
        </div>
    )
}

/*export const RadioLabel = ({children, className}: Pick<RadioGroupProps, 'className' | 'children'>) => {
    const {disabled, value, handleSelectedValue} = useRadioGroupContext();
    return (
        <label onClick={handleSelectedValue} htmlFor={value}
               className={cn(`text-base text-black-100 dark:text-white ${sharedVariants({disabled})}`, className)}>{children}</label>
    )
}*/

RadioGroup.Item = RadioItem


