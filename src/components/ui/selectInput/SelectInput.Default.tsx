import {cn} from "../../../utils/cn.ts";
import {selectContainerVariants, selectGroupContainerVariants, selectInputVariants} from "./SelectInput.Variants.ts";
import {PropsWithChildren} from "react";
import {SelectInputContext, useSelectInput, useSelectInputContext} from "./SelectInput.Context.ts";

export type SelectInputDefaultProps = Required<PropsWithChildren> & {
    onSelect?: (selectedItem: string) => void,
    placeholder?: string,

    variant?: "outline" | "fill",
    size?: "md" | "lg" | "xl",
    radius?: "none" | "sm" | "md" | "lg" | "xl",
    block?: boolean,
    className?: string,

}

type SelectHeaderProps = Required<PropsWithChildren> & {
    className?: string
}

type SelectLabelProps = {
    className?: string,
    placeholder: string,
}

type SelectGroupContainerProps = Required<PropsWithChildren> & {
    className?: string,

}

type SelectGroupProps = Required<PropsWithChildren> & {
    className?: string
}

type SelectGroupTitleProps = Required<PropsWithChildren> & {
    className?: string,
}

type SelectItemProps = Required<PropsWithChildren> & {
    className?: string,
    value: string,
}

export const SelectInputDefault = ({
                                       children,
                                       onSelect = () => {
                                       },
                                       variant,
                                       size,
                                       radius,
                                       block,
                                       className,
                                   }: SelectInputDefaultProps) => {
    const {
        selectRef,
        setShowSelectGroup,
        showSelectGroup,
        selectedItem,
        setSelectedItem,
    } = useSelectInput();

    return (
        <SelectInputContext.Provider value={{
            showSelectGroup,
            setShowSelectGroup,
            selectedItem,
            setSelectedItem,
            variant: variant,
            size: size,
            radius: radius,
            block: block,
            onSelect: onSelect,
        }}>
            <div ref={selectRef} className={cn(selectContainerVariants({block}), className)}>
                {children}
            </div>
        </SelectInputContext.Provider>
    )
}

export const SelectHeader = ({children, className}: SelectHeaderProps) => {
    const {setShowSelectGroup, variant, size, radius} = useSelectInputContext();
    return (
        <div
            onClick={() => setShowSelectGroup(prev => !prev)}
            className={cn(selectInputVariants({variant, size, radius}), className)}>
            {children}
        </div>
    )
}

export const SelectLabel = ({placeholder, className}: SelectLabelProps) => {
    const {selectedItem} = useSelectInputContext();
    return <p className={cn("", className)}>{selectedItem || placeholder}</p>
}

export const SelectGroupContainer = ({className, children}: SelectGroupContainerProps) => {
    const {showSelectGroup, radius, variant} = useSelectInputContext();
    return showSelectGroup && (
        <div
            className={cn(selectGroupContainerVariants({variant, radius}), className)}>{children}</div>
    )
}

export const SelectGroup = ({children, className}: SelectGroupProps) => {
    return (
        <div className={cn(`w-full`, className)}>
            {children}
        </div>
    )
}

export const SelectGroupTitle = ({children, className}: SelectGroupTitleProps) => {
    return (<p className={cn(`mb-1 font-semibold  w-full py-1 px-4`, className)}>{children}</p>)
}

export const SelectItem = ({children, value, className}: SelectItemProps) => {
    const {onSelect, setShowSelectGroup, setSelectedItem} = useSelectInputContext();
    ;
    return (
        <div onClick={() => {
            setSelectedItem(value);
            onSelect(value);
            setShowSelectGroup(false);
        }} className={cn(`w-full  hover:bg-primary rounded-md py-1 px-4 cursor-pointer`, className)}>
            {children}
        </div>
    )
}
