import {Items} from "../selectInput/SelectInput.types.ts";

import {cn} from "../../../utils/cn.ts";
import {
    selectContainerVariants,
    selectGroupContainerVariants,
} from "../selectInput/SelectInput.Variants.ts";
import {TextInput} from "../textInput";
import {
    AutoCompleteInputContext,
    useAutoCompleteInput,
    useAutoCompleteInputContext
} from "./AutoCompleteInputContext.ts";
import {PropsWithChildren, useEffect} from "react";

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

type AutoCompleteGroupProps = PropsWithChildren & {}

type AutoCompleteGroupTitleProps = PropsWithChildren

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
    const userProps = {variant, size, radius, block};

    const {
        selectGroupVisible,
        setSelectGroupVisible,
        selectValue,
        handleSelectedItem,
        handleSearchItems,
        // searchedItems,
        selectRef,
        // setSearchedItems,
        setSelectValue,
        filterItems,
    } = useAutoCompleteInput()
    
    useEffect(() => {
        onSelect(selectValue) 
    }, [selectValue])


    return (
        <AutoCompleteInputContext.Provider value={{
            selectGroupVisible,
            setSelectGroupVisible,
            selectValue,
            handleSelectedItem,
            handleSearchItems,
            // searchedItems,
            // setSearchedItems,
            setSelectValue,
            filterItems,
            variant,
            size,
            radius,
            block
        }}>
            <div ref={selectRef} className={cn(selectContainerVariants({block}), className)}>
                {/*<TextInput
                    onFocus={() => {
                        if (selectValue === "") setSelectGroupVisible(true)
                    }}
                    value={selectValue}
                    onChange={(e) => handleSearchItems(e.target.value.toLowerCase())}
                    placeholder="Select designer tool"
                    variant={variant}
                    size={size}
                    radius={radius}
                    block={block}
                />
                <SelectGroupContainer visible={selectGroupVisible}>
                    {searchedItems?.map(({title, values}) => (
                        <SelectGroup
                            onSelect={(itemName) => handleSelectedItem(itemName)}
                            key={title}
                            title={title}
                            values={values}
                        />
                    ))}
                </SelectGroupContainer>*/}
                {children}
            </div>
        </AutoCompleteInputContext.Provider>
    );
}

const AutoCompleteHeader = ({placeholder, className}: AutoCompleteHeaderProps) => {
    const {setSelectGroupVisible, selectValue, handleSearchItems, variant, size, radius, block} = useAutoCompleteInputContext()
    return (<TextInput
        onFocus={() => {
            if (selectValue === "") setSelectGroupVisible(true)
        }}
        value={selectValue}
        onChange={(e) => handleSearchItems(e.target.value.toLowerCase())}
        placeholder={placeholder}
        variant={variant}
        size={size}
        radius={radius}
        block={block}
    />)
}

const AutoCompleteGroupContainer = ({children, className}: AutoCompleteGroupContainerProps) => {
    const {selectGroupVisible, variant, radius} = useAutoCompleteInputContext();
    return selectGroupVisible && (
        <div
            className={cn(selectGroupContainerVariants({variant, radius}), className)}>{children}</div>
    )
}

const AutoCompleteGroup = ({children}: AutoCompleteGroupProps) => {
    return (
        <div className={`w-full`}>
            {children}
        </div>
    )
}

const AutoCompleteGroupTitle = ({children}: AutoCompleteGroupTitleProps) => {
    return (
        <p className={`mb-1 font-semibold  w-full py-1 px-4`}>{children}</p>
    )
}

const AutoCompleteItem = ({children, value, className}: AutoCompleteItemProps) => {
    const {handleSelectedItem, selectValue} = useAutoCompleteInputContext();
    if (selectValue !== "" && !value.toLowerCase().includes(selectValue.toLowerCase()))
        return
    
    return (
        <div onClick={() => handleSelectedItem(value)}
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

/*const SelectGroupContainer = ({children, visible = false, variant, radius, className}: SelectGroupContainerProps) => {

    return visible && (
        <div
            className={cn(selectGroupContainerVariants({variant, radius}), className)}>{children}</div>
    )
}


const SelectGroup = ({
                         title,
                         values,
                         onSelect = () => {
                         }

                     }: SelectGroupProps) => {
    return (
        <div className={`w-full`}>
            <p className={`mb-1 font-semibold  w-full py-1 px-4`}>{title}</p>
            {
                values?.map(v => (
                    <SelectItem
                        onClick={() => onSelect(v.name)}
                        value={v.name}
                        key={v.name}>
                        {v.content}
                    </SelectItem>))
            }
        </div>
    )
}

const SelectItem = ({
                        children, onClick = () => {
    }, value
                    }: SelectItemProps) => {
    return (
        <div onClick={() => onClick(value)} className={`w-full  hover:bg-primary rounded-md py-1 px-4 cursor-pointer`}>
            {children}
        </div>)
}*/

export default AutoCompleteInput