import {createContext, useCallback, useContext, useEffect, useRef, useState} from "react";
import {Items} from "../selectInput/SelectInput.types.ts";
import useOutsideClicked from "../../../hooks/useOutsideClicked.ts";
import {AutoCompleteInputProps} from "./AutoCompleteInput.tsx";

export type UseAutoCompleteInputProps = {
    items : Items[];
};

export type AutoCompleteInputContext = {
    searchedItems : Items[],
    setSearchedItems : (items: Items[]) => void,
    selectValue : string,
    setSelectValue : (value : string) => void,
    selectGroupVisible : boolean,
    setSelectGroupVisible : (visible: boolean) => void,
    filterItems : (searchValue : string)  => Items[],
    handleSearchItems : (searchValue : string) => void,
    handleSelectedItem : (selectedItem: string) => void,
    
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


// {items} : UseAutoCompleteInputProps

export const useAutoCompleteInput = () => {
    // const [searchedItems, setSearchedItems] = useState<Items[]>(items);
    const [selectValue, setSelectValue] = useState("");
    const selectRef = useRef<HTMLDivElement>(null);
    const [selectGroupVisible, setSelectGroupVisible] = useState(true);

    useOutsideClicked({
        ref : selectRef,
        action : () => setSelectGroupVisible(false)
    })
    
    const filterItems = useCallback((searchValue: string): Items[] => {
        if (searchValue === "") return [...items];

        const filteredItems = items.map(item => ({
            ...item,
            values: item.values.filter(v =>
                v.name.toLowerCase().includes(searchValue.toLowerCase())
            ),
        }));

        return filteredItems;
    }, []);

    const handleSearchItems = useCallback((searchValue: string) => {
        // setSearchedItems(filterItems(searchValue));
        setSelectValue(searchValue);
        setSelectGroupVisible(true);
    }, []);

    const handleSelectedItem = useCallback((itemName: string) => {
        setSelectValue(itemName);
        // setSearchedItems(filterItems(""));
        setSelectGroupVisible(false);
    }, []);

/*    useEffect(() => {
        setSearchedItems(items);
    }, [items]);*/
    
    return {
/*        searchedItems,
        setSearchedItems,*/
        selectValue,
        setSelectValue,
        selectGroupVisible,
        setSelectGroupVisible,
        filterItems,
        handleSearchItems,
        handleSelectedItem,
        selectRef,
    }
    
}

/*export const useAutoCompleteInput = () => {
// const [searchedItems, setSearchedItems] = useState<Items[]>(items);
const [selectValue, setSelectValue] = useState("");
const selectRef = useRef<HTMLDivElement>(null);
const [selectGroupVisible, setSelectGroupVisible] = useState(true);

useOutsideClicked({
    ref : selectRef,
    action : () => setSelectGroupVisible(false)
})

const filterItems = useCallback((searchValue: string): Items[] => {
    if (searchValue === "") return [...items];

    const filteredItems = items.map(item => ({
        ...item,
        values: item.values.filter(v =>
            v.name.toLowerCase().includes(searchValue.toLowerCase())
        ),
    }));

    return filteredItems;
}, []);

const handleSearchItems = useCallback((searchValue: string) => {
    // setSearchedItems(filterItems(searchValue));
    setSelectValue(searchValue);
    setSelectGroupVisible(true);
}, []);

const handleSelectedItem = useCallback((itemName: string) => {
    setSelectValue(itemName);
    // setSearchedItems(filterItems(""));
    setSelectGroupVisible(false);
}, []);

/!*    useEffect(() => {
    setSearchedItems(items);
}, [items]);*!/

return {
/!*        searchedItems,
    setSearchedItems,*!/
    selectValue,
    setSelectValue,
    selectGroupVisible,
    setSelectGroupVisible,
    filterItems,
    handleSearchItems,
    handleSelectedItem,
    selectRef,
}*/