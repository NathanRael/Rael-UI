import {createContext, useContext} from "react";

interface CheckboxContext {
    checkboxId: string;
    disabled: boolean;
}

const CheckboxContext = createContext<CheckboxContext | undefined>(undefined);

export const useCheckboxContext = () => {
    const context = useContext(CheckboxContext);
    if (!context) {
        throw new Error("useCheckboxContext must be used within Checkbox");
    }
    return context as CheckboxContext;
}

export default CheckboxContext;