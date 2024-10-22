import {cn} from "../../../utils/cn.ts";

import {TextInput} from "../textInput";
import {
    AutoCompleteInputContext,
    useAutoCompleteInput,
    useAutoCompleteInputContext
} from "./AutoCompleteInput.Context.ts";
import {PropsWithChildren, useEffect} from "react";
import {autoCompleteContainerVariants, autoCompleteGroupContainerVariants} from "./AutoCompleteInput.Variants.ts";
import {textInputVariants} from "../textInput/TextInput.Variants.ts";


export type AutoCompleteInputProps = Required<PropsWithChildren> & {
    onSelect?: (selectedItem: string) => void,
    placeholder?: string,

    variant?: "outline" | "fill",
    size?: "md" | "lg" | "xl",
    radius?: "none" | "sm" | "md" | "lg" | "xl",
    block?: boolean,
    className?: string,
}

type AutoCompleteHeaderProps = {
    placeholder?: string,
    className?: string,
}

type AutoCompleteGroupContainerProps = Required<PropsWithChildren> & {
    className?: string,
}

type AutoCompleteGroupProps = Required<PropsWithChildren>  &{
    className?: string,
}

type AutoCompleteGroupTitleProps = Required<PropsWithChildren> & {
    className?: string,
}

type AutoCompleteItemProps = Required<PropsWithChildren> & {
    value: string,
    onClick?: (value: string) => void,
    className?: string,
}


const AutoCompleteInput = ({
                               onSelect = () => {
                               },
                               variant,
                               size,
                               radius,
                               block,
                               className,
                               children
                           }: AutoCompleteInputProps) => {
    
    const {
        selectGroupVisible,
        setSelectGroupVisible,
        selectValue,
        handleSelectedItem,
        handleSearchItems,
        selectRef,
        setSelectValue,
    } = useAutoCompleteInput()

    /*useEffect(() => {
        onSelect(selectValue)
    }, [selectValue])*/


    return (
        <AutoCompleteInputContext.Provider value={{
            selectGroupVisible,
            setSelectGroupVisible,
            selectValue,
            handleSelectedItem,
            handleSearchItems,
            setSelectValue,
            variant : variant,
            size : size,
            radius : radius,
            block : block,
            onSelect : onSelect,
        }}>
            <div ref={selectRef} className={cn(autoCompleteContainerVariants({block}), className)}>
                {children}
            </div>
        </AutoCompleteInputContext.Provider>
    );
}

export const AutoCompleteHeader = ({placeholder, className}: AutoCompleteHeaderProps) => {
    const {
        setSelectGroupVisible,
        selectValue,
        handleSearchItems,
        variant,
        size,
        radius,
        block
    } = useAutoCompleteInputContext();


    return (
        <TextInput
            className={cn(textInputVariants({variant, size, block, radius}), className)}
            onFocus={() => {
                if (selectValue === "") setSelectGroupVisible(true)
            }}
            value={selectValue} 
            onChange={(e) => handleSearchItems(e.target.value.toLowerCase())}
            placeholder={placeholder}
        />)
}

export const AutoCompleteGroupContainer = ({children, className}: AutoCompleteGroupContainerProps) => {
    const {selectGroupVisible, variant, radius} = useAutoCompleteInputContext();
    return selectGroupVisible && (
        <div
            className={cn(autoCompleteGroupContainerVariants({variant, radius}), className)}>{children}</div>
    )
}

export const AutoCompleteGroup = ({children, className}: AutoCompleteGroupProps) => {
    return (
        <div className={cn(`w-full`, className)}>
            {children}
        </div>
    )
}

export const AutoCompleteGroupTitle = ({children, className}: AutoCompleteGroupTitleProps) => {
    return (
        <p className={cn(`mb-1 font-semibold  w-full py-1 px-4`, className)}>{children}</p>
    )
}

export const AutoCompleteItem = ({children, value, className}: AutoCompleteItemProps) => {
    const {handleSelectedItem, selectValue, onSelect} = useAutoCompleteInputContext();
    if (selectValue !== "" && !value.toLowerCase().includes(selectValue.toLowerCase()))
        return

    return (
        <div onClick={() => {
            handleSelectedItem(value);
            onSelect(value)
        }}
             className={cn("w-full  hover:bg-primary rounded-md py-1 px-4 cursor-pointer", className)}>
            {children}
        </div>
    )
}


AutoCompleteInput.Header = AutoCompleteHeader;
AutoCompleteInput.GroupContainer = AutoCompleteGroupContainer;
AutoCompleteInput.Group = AutoCompleteGroup;
AutoCompleteInput.GroupTitle = AutoCompleteGroupTitle;
AutoCompleteInput.Item = AutoCompleteItem;


export default AutoCompleteInput