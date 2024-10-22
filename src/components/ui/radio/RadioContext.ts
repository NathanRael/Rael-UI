import {createContext, useContext, useEffect, useState} from "react";
type RadioGroupContext = {
    selectedValue : string,
    setSelectedValue: (value: string) => void,
    disabled: boolean,
}
export const RadioGroupContext = createContext<RadioGroupContext | undefined >(undefined)

export const useRadioGroupContext = () => {
    const context = useContext(RadioGroupContext);
    if (!context) {
        throw new Error("useRadioGroupContext must be used within RadioGroup");
    }
    return context;
}

type UseRadioProps = {
    defaultValue: string,
    onChange?: (value: string) => void,
    disabled: boolean,
}
export const useRadio = ({
                             defaultValue, onChange = () => {
    }, disabled
                         }: UseRadioProps) => {
    const [selectedValue, setSelectedValue] = useState("");


    useEffect(() => {
        if (selectedValue === "")
            setSelectedValue(defaultValue);
        onChange(selectedValue)

    }, [selectedValue]);

    return {selectedValue, setSelectedValue, disabled};
}

