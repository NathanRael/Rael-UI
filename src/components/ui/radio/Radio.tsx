import {cva} from "class-variance-authority";
import {useRadio} from "./useRadio.ts";
import {RadioGroupContext, useRadioGroupContext} from "./RadioContext.ts";
import {useMemo} from "react";

type RadioGroupProps = {
    children: React.ReactNode,
    defaultValue: string,
    onChange?: (value: string) => void,
    disabled?: boolean,
}

type RadioItemProps = {
    value: string,
    label?: React.ReactNode,
    onChange?: (value: string) => void,
}

const defaultVariant = {
    disabled: false
}


export const RadioGroup = ({
                               children, defaultValue, onChange = () => {
    }, disabled = defaultVariant.disabled
                           }: RadioGroupProps) => {
    const {selectedValue, setSelectedValue} = useRadio({
        defaultValue,
        onChange,
        disabled,
    });


    return (
        <RadioGroupContext.Provider value={{selectedValue, setSelectedValue, disabled}}>
            <div className={"flex flex-col gap-2"}>
                {children}
            </div>
        </RadioGroupContext.Provider>

    )
}


const RadioItem = ({value, label}: RadioItemProps) => {
    const {selectedValue, setSelectedValue, disabled} = useRadioGroupContext();
    const selected = useMemo(() => selectedValue == value, [selectedValue, value]);

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
                           className={`${sharedVariants({disabled})} appearance-none size-4 rounded-full border-2 border-white checked:border-primary `}
                           id={value}
                           onChange={handleSelectedValue}
                           checked={selected}
                           type="radio"/>
                    {
                        selected && <span
                            className="absolute size-2 rounded-full bg-primary left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></span>
                    }
                </label>
            </div>
            {
                label && <label className={sharedVariants({disabled})} onClick={handleSelectedValue}
                                htmlFor={value}>{label}</label>
            }
        </div>
    )
}

RadioGroup.Item = RadioItem


const sharedVariants = cva('', {
    variants: {
        disabled: {
            true: 'cursor-not-allowed',
            false: 'cursor-pointer'
        }
    },
    defaultVariants: {
        disabled: defaultVariant.disabled
    }
})
