import {cn} from "../../../utils/cn.ts";

import {
    AutoCompleteInputContext,
    useAutoCompleteInput,
    useAutoCompleteInputContext
} from "./AutoComplete.Context.ts";
import {PropsWithChildren} from "react";
import {autoCompleteContainerVariants, autoCompleteGroupContainerVariants} from "./AutoComplete.Variants.ts";
import {realInputVariants, textInputVariants} from "../textInput/TextInput.Variants.ts";
import {useComponentStyle} from "../ComponentStyle.Context.ts";



export type AutoCompleteInputProps = Required<PropsWithChildren> & {
    onChange?: ({target: {name, value}}: {
        target: {
            name: string;
            value?: unknown;
            checked?: boolean;
        }
    }) => void;
    placeholder?: string;

    variant?: "outline" | "fill";
    size?: "sm" | "md" | "lg" ;
    radius?: "none" | "sm" | "md" | "lg" | "xl";
    block?: boolean;
    className?: string;
    name : string;
}

type AutoCompleteTriggerProps = {
    className?: string;
    leftContent?: React.ReactNode;
    rightContent?: React.ReactNode;
    placeholder?: string;
}

type AutoCompleteGroupContainerProps = Required<PropsWithChildren> & {
    className?: string;
}

type AutoCompleteGroupProps = Required<PropsWithChildren> & {
    className?: string;
}

type AutoCompleteGroupTitleProps = Required<PropsWithChildren> & {
    className?: string;
}

type AutoCompleteItemProps = Required<PropsWithChildren> & {
    value: string;
    onClick?: (value: string) => void;
    className?: string;
}


const AutoComplete = ({
                          onChange = () => {
                          },
                          variant,
                          size,
                          radius,
                          block,
                          className,
                          children,
                      name,
                      }: AutoCompleteInputProps) => {

    const {
        selectGroupVisible,
        setSelectGroupVisible,
        selectValue,
        handleSelectItem,
        // handleSearchItems,
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
            handleSelectItem,
            // handleSearchItems,
            setSelectValue,
            variant: variant,
            size: size,
            radius: radius,
            block: block,
            onChange: onChange,
            name : name,
        }}>
            <div ref={selectRef} className={cn(autoCompleteContainerVariants({block}), className)}>
                {children}
            </div>
        </AutoCompleteInputContext.Provider>
    );
}

export const AutoCompleteTrigger = ({placeholder, className, leftContent, rightContent}: AutoCompleteTriggerProps) => {
    const {
        setSelectGroupVisible,
        selectValue,
        handleSelectItem,
        onChange,
        variant,
        size,
        radius,
        block,
        name,
    } = useAutoCompleteInputContext();

    const  {cVariant} = useComponentStyle();

    return (
        <>
            <div tabIndex={-1} role="presentation"
                 className={cn(textInputVariants({variant : variant ||cVariant, size, block, radius}), className)}>
                {leftContent}
                <input
                    className={realInputVariants({variant})}
                    onFocus={() => {
                        setSelectGroupVisible(true)
                    }}
                    name={name}
                    // onBlur={() => setSelectGroupVisible(false)}
                    value={selectValue}
                    onChange={(e) => {
                        handleSelectItem(e.target.value.toLowerCase());
                        setSelectGroupVisible(true);
                        onChange({target: {name: name, value: e.target.value}})
                    }}
                    placeholder={placeholder}/>
                {rightContent}
            </div>
        </>

    )
}

export const AutoCompleteGroupContainer = ({children, className}: AutoCompleteGroupContainerProps) => {
    const {selectGroupVisible, variant, radius} = useAutoCompleteInputContext();
    const  {cVariant} = useComponentStyle();
    return selectGroupVisible && (
        <div
            className={cn(autoCompleteGroupContainerVariants({variant : variant ||cVariant, radius}), className)}>{children}</div>
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
    const {handleSelectItem, selectValue, onChange, setSelectGroupVisible, name} = useAutoCompleteInputContext();
    if (selectValue !== "" && !value.toLowerCase().includes(selectValue.toLowerCase()))
        return

    return (
        <div onClick={() => {
            handleSelectItem(value);
            onChange({target : {name : name, value: value}});
            setSelectGroupVisible(false);
        }}
             className={cn("w-full  hover:bg-primary rounded-md py-1 px-4 cursor-pointer", className)}>
            {children}
        </div>
    )
}


AutoComplete.Trigger = AutoCompleteTrigger;
AutoComplete.GroupContainer = AutoCompleteGroupContainer;
AutoComplete.Group = AutoCompleteGroup;
AutoComplete.GroupTitle = AutoCompleteGroupTitle;
AutoComplete.Item = AutoCompleteItem;


export default AutoComplete