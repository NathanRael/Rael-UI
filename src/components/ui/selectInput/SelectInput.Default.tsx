import useSelectInput from "./useSelectInput.ts";
import {ChevronDownIcon} from "lucide-react";
import {
    SelectGroupContainerProps,
    SelectGroupProps,
    SelectInputDefaultProps,
    SelectItemProps,
} from "./SelectInput.types.ts";
import {cn} from "../../../utils/cn.ts";
import {selectContainerVariants, selectGroupContainerVariants, selectInputVariants} from "./SelectInput.Variants.ts";

export const SelectInputDefault = ({
                                       placeholder = 'Select something',
                                       items = [],
                                       onSelect = () => {
                                       },
                                       variant,
                                       size,
                                       radius,
                                       block,
                                       className,
                                   }: SelectInputDefaultProps) => {
    const userProps = {variant, size, radius, block};
    const {
        selectedItem,
        handleSelectedItem,
        selectRef,
        showSelectGroup,
        setShowSelectGroup
    } = useSelectInput({onSelect});

    return ( 
          
        <div ref={selectRef} className={cn(selectContainerVariants({block}), className)}>
            <div
                onClick={() => setShowSelectGroup(prev => !prev)}
                className={selectInputVariants(userProps)}>
                <p>{selectedItem || placeholder} </p>
                <ChevronDownIcon/>
            </div>

            <SelectGroupContainer visible={showSelectGroup}>
                {
                    items?.map(({title, values}) => (
                        <SelectGroup key={title} title={title} values={values} onSelect={handleSelectedItem}/>
                    ))
                }
            </SelectGroupContainer>
        </div>)
}

const SelectGroupContainer = ({children, visible = false, variant, radius, className}: SelectGroupContainerProps) => {

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

/*
const SelectTitle = ({children}: SelectTitleProps) => {
    return <div className={`mb-1 font-semibold  w-full py-1 px-4 `}>
        {children}
    </div>
}
*/


const SelectItem = ({
                        children, onClick = () => {
    }, value
                    }: SelectItemProps) => {
    return (
        <div onClick={() => onClick(value)} className={`w-full  hover:bg-primary rounded-md py-1 px-4 cursor-pointer`}>
            {children}
        </div>)
}
