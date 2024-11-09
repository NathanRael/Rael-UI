import {createContext, useContext, useEffect, useState} from "react";

type RadioGroupContext = {
    selectedValue: string,
    setSelectedValue: (value: string) => void,
    disabled: boolean;
    variant?: 'fill' | 'outline';
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
    name?: string;
}
export const useRadio = ({
                             defaultValue,
                             onChange = () => {
                             },
                             disabled,
                             name,
                         }: UseRadioProps) => {
    const [selectedValue, setSelectedValue] = useState("");
    const randomName = 'no-name-provided';

    useEffect(() => {
        if (selectedValue === "")
            setSelectedValue(defaultValue);
        onChange({target: {name : name || randomName, value: selectedValue}})

    }, [selectedValue]);
    

    return {selectedValue, setSelectedValue, disabled};
}

