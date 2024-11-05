import {createContext, useContext, useEffect, useState} from "react";

type RadioGroupContext = {
    selectedValue: string,
    setSelectedValue: (value: string) => void,
    disabled: boolean,
}
export const RadioGroupContext = createContext<RadioGroupContext | undefined>(undefined)

export const useRadioGroupContext = () => {
    const context = useContext(RadioGroupContext);
    if (!context) {
        throw new Error("useRadioGroupContext must be used within RadioGroup");
    }
    return context;
}

type UseRadioProps = {
    defaultValue: string,
    onChange?: ({target: {name, value}}: { target: { name: string, value: string } }) => void,
    disabled: boolean;
    name: string;
}
export const useRadio = ({
                             defaultValue,
                             onChange = () => {
                             },
                             disabled,
                             name,
                         }: UseRadioProps) => {
    const [selectedValue, setSelectedValue] = useState("");


    useEffect(() => {
        if (selectedValue === "")
            setSelectedValue(defaultValue);
        onChange({target: {name, value: selectedValue}})

    }, [selectedValue]);

    return {selectedValue, setSelectedValue, disabled};
}

