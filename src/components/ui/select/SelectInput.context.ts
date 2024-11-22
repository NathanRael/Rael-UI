import {createContext, useContext, useRef, useState} from "react";
import useOutsideClicked from "../../../hooks/useOutsideClicked.ts";
import {SelectInputDefaultProps} from "./Select.tsx";

type SelectInputContext = {
    showSelectGroup: boolean;
    selectedItem: string;
    setShowSelectGroup: React.Dispatch<React.SetStateAction<boolean>>;
    setSelectedItem: React.Dispatch<React.SetStateAction<string>>;
    focused: boolean;
    setFocused: React.Dispatch<React.SetStateAction<boolean>>;

    onSelect: ({target: {name, value}}: {
        target: {
            name: string;
            value?: unknown;
            checked?: boolean;
        }
    }) => void;

    variant: SelectInputDefaultProps['variant'];
    size: SelectInputDefaultProps['size'];
    radius: SelectInputDefaultProps['radius'];
    block: SelectInputDefaultProps['block'];
    name?: string;
    defaultValue? : string;
    registerValue : (value: string) => void;

}


export const SelectInputContext = createContext<SelectInputContext | undefined>(undefined);

export const useSelectInputContext = () => {
    const context = useContext(SelectInputContext);
    if (!context) {
        throw new Error("useSelectInputContext must be used within SelectInput");
    }

    return context;
}

export const useSelectInput = ({defaultValue} : {defaultValue?: string}) => {
    const [selectedItem, setSelectedItem] = useState(defaultValue || '');
    const [showSelectGroup, setShowSelectGroup] = useState(false);
    const selectRef = useRef<HTMLDivElement>(null);
    const [focused, setFocused] = useState(false);
    const [registeredOptions, setRegisteredOptions] = useState<string[]>([]);

    useOutsideClicked({
        ref: selectRef,
        action: () => {
            setShowSelectGroup(false);
            /* if (focused)
                 setFocused(false)*/
        }
    })
    
    
    const registerValue = (value : string) => {
        setRegisteredOptions(prev => [...prev, value])
    };
    

    return {
        selectedItem,
        showSelectGroup,
        setSelectedItem,
        selectRef,
        setShowSelectGroup,
        focused,
        registerValue,
        registeredOptions,
        setFocused,
    }
}