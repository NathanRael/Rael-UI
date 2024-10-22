import {createContext, useCallback, useContext, useRef, useState} from "react";
import useOutsideClicked from "../../../hooks/useOutsideClicked.ts";
import {AutoCompleteInputProps} from "./AutoCompleteInput.tsx";

export type AutoCompleteInputContext = {
    selectValue : string,
    setSelectValue : (value : string) => void,
    selectGroupVisible : boolean,
    setSelectGroupVisible : (visible: boolean) => void,
    handleSearchItems : (searchValue : string) => void,
    handleSelectedItem : (selectedItem: string) => void,
    
    onSelect : (value : string) => void,
    
    variant : AutoCompleteInputProps['variant'],
    size : AutoCompleteInputProps['size'],
    radius : AutoCompleteInputProps['radius'],
    block : AutoCompleteInputProps['block'],
}

export const AutoCompleteInputContext = createContext<AutoCompleteInputContext | undefined>(undefined);

export const useAutoCompleteInputContext = () => {
    const context = useContext(AutoCompleteInputContext);

    if (!context) {
        throw new Error("useAutoCompleteInputContext must be used within RadioGroup");
    }
    return context;
    
}

export const useAutoCompleteInput = () => {
    const [selectValue, setSelectValue] = useState("");
    const selectRef = useRef<HTMLDivElement>(null);
    const [selectGroupVisible, setSelectGroupVisible] = useState(true);

    useOutsideClicked({
        ref : selectRef,
        action : () => setSelectGroupVisible(false)
    })
    

    const handleSearchItems = useCallback((searchValue: string) => {
        setSelectValue(searchValue);
        setSelectGroupVisible(true);
    }, []);

    const handleSelectedItem = useCallback((itemName: string) => {
        setSelectValue(itemName);
        setSelectGroupVisible(false);
    }, []);
    
    
    return {

        selectValue,
        setSelectValue,
        selectGroupVisible,
        setSelectGroupVisible,
        handleSearchItems,
        handleSelectedItem,
        selectRef,
    }
    
}
