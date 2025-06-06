import {PropsWithChildren, useEffect} from "react";
import {SelectInputContext, useSelectInput, useSelectInputContext} from "./SelectInput.context.ts";
import {cn} from "@/utils/cn.ts";
import {selectContainerVariants, selectGroupContainerVariants, SelectTriggerVariants} from "./SelectInput.variants.ts";
import {useComponentStyle} from "@/components";
import {Radius, Size, Variant} from "@/components/global.types.ts";

export type SelectInputDefaultProps = Required<PropsWithChildren> & {
    onChange?: ({target: {name, value}}: {
        target: {
            name: string;
            value?: unknown;
            checked?: boolean;
        }
    }) => void;
    placeholder?: string;

    variant?: Variant;
    size?: Size;
    radius?: Radius;
    block?: boolean;
    className?: string;
    name?: string;
    defaultValue?: string;

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
    className?: string;
    value: string;
    // selected?: boolean;
}

const Select = ({
                    children,
                    onChange = () => {
                    },
                    variant,
                    size,
                    radius,
                    block,
                    className,
                    name,
    defaultValue = '',
                }: SelectInputDefaultProps) => {
    const {
        selectRef,
        setShowSelectGroup,
        showSelectGroup,
        selectedItem,
        setSelectedItem,
        focused,
        setFocused,registerValue,
    } = useSelectInput({defaultValue});
    
    useEffect(() => {
        setSelectedItem(defaultValue);
        onChange({target: {name: name || 'no-name-provided', value: defaultValue}});
    }, [defaultValue])
    
    
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
            onSelect: onChange,
            focused,
            setFocused,
            name: name,
            defaultValue : defaultValue,
            registerValue
        }}>

            <div ref={selectRef} className={cn(selectContainerVariants({block}), className)}>
                {children}
            </div>
        </SelectInputContext.Provider>
    )
}

export const SelectTrigger = ({children, className}: SelectHeaderProps) => {
    const {setShowSelectGroup, setFocused, variant, size, radius, focused} = useSelectInputContext();
    const  {cVariant} = useComponentStyle();
    return (
        <div
            tabIndex={0} role={'textbox'} onBlur={() => {
            setFocused(false);
        }} onFocus={() => {
            setFocused(true);
            setShowSelectGroup(true);
        }} onClick={() => {
            setFocused(prev => !prev);
            setShowSelectGroup(true);
        }}
            className={cn(SelectTriggerVariants({variant : variant || cVariant, size, radius, focused}), className)}>
            {children}
        </div>
    )
}

export const SelectLabel = ({placeholder, className}: SelectLabelProps) => {
    const {selectedItem} = useSelectInputContext();
    return <p className={cn("", className)}>{selectedItem || placeholder}</p>
}

export const SelectGroupContainer = ({className, children}: SelectGroupContainerProps) => {
    const  {cVariant} = useComponentStyle();
    const {showSelectGroup, radius, variant} = useSelectInputContext();
    return showSelectGroup && (
        <div
            className={cn(selectGroupContainerVariants({variant : variant || cVariant, radius}), className)}>{children}</div>
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
    const {onSelect, setShowSelectGroup, setSelectedItem, name} = useSelectInputContext();
    const randomName = 'no-name-provided';
    
    
    return (
        <div onClick={() => {
            setSelectedItem(value);
            onSelect({target: {name: name || randomName, value: value}});
            setShowSelectGroup(false);
        }} className={cn(`w-full  hover:bg-primary rounded-md py-1 px-4 cursor-pointer`, className)}>
            {children}
        </div>
    )
}


export default Select;
