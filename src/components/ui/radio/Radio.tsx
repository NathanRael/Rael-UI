import {cva} from "class-variance-authority";
import {useRadio} from "./useRadio.ts";
import {RadioGroupContext, useRadioGroupContext} from "./RadioContext.ts";

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

    const handleSelectedValue = () => {
        if (disabled)
            return;
        setSelectedValue(value);
    }

    return (
        <div className={"flex items-center gap-2 text-white"}>
            <input disabled={disabled} className={sharedVariants({disabled})} id={value} onChange={handleSelectedValue}
                   checked={selectedValue === value} type="radio"/>
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
