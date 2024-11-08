import {createContext, useContext} from "react";

interface SwitchContext {
    switchId: string;
    disabled: boolean;
}

const SwitchContext = createContext<SwitchContext | undefined>(undefined);

export const useSwitchContext = () => {
    const context = useContext(SwitchContext);
    if (!context) {
        throw new Error("useSwitchContext must be used within Checkbox");
    }
    return context as SwitchContext;
}

export default SwitchContext;