import {createContext, useContext} from "react";
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