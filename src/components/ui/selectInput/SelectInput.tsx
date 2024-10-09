import {ChevronRightIcon} from "lucide-react";
import * as React from "react";
import {cva} from "class-variance-authority";
import {useRef, useState} from "react";
import useOutsideClicked from "../../../hooks/useOutsideClicked.ts";


interface ItemValues {
    name: string,
    content: string,
}

interface Items {
    title: string,
    values: ItemValues[]
}


type SelectInputProps = {
    items: Items[],
    onSelect?: (selectedItem: string) => void,
    placeholder?: string,
}

type SelectGroupContainerProps = {
    children: React.ReactNode,
    className?: string,
    visible?: boolean,
}

type SelectGroupProps = {
    onSelect?: (selectedItem: string) => void,
    values: ItemValues[],
    title: string,
}

type SelectTitleProps = {
    children: React.ReactNode
}

type SelectItemProps = {
    children: React.ReactNode,
    value: string,
    onClick?: (value: string) => void,
}


const SelectInput = ({
                         placeholder = 'Select something',
                         items = [],
                         onSelect = () => {
                         }
                     }: SelectInputProps) => {

    const [selectedItem, setSelectedItem] = useState("");
    const [showSelectGroup, setShowSelectGroup] = useState(false);
    const selectRef = useRef<HTMLDivElement>(null);

    useOutsideClicked({
        ref: selectRef,
        action: () => setShowSelectGroup(false)
    })

    const handleSelectedItem = (value: string) => {
        setSelectedItem(value);
        onSelect(value);
        setShowSelectGroup(false);
    }

    return (
        <div ref={selectRef} className="space-y-2 w-fit">
            <div

                onClick={() => setShowSelectGroup(prev => !prev)}
                className="bg-transparent cursor-pointer text-white border border-gray-200 rounded-md w-[280px] px-4 py-2 flex items-center justify-between">
                <p>{selectedItem || placeholder} </p>
                <ChevronRightIcon/>
            </div>
            <SelectGroupContainer visible={showSelectGroup}>
                {
                    items?.map(({title, values}) => (
                        <SelectGroup title={title} values={values} onSelect={handleSelectedItem}/>
                    ))
                }
            </SelectGroupContainer>
        </div>)
}

const SelectGroupContainer = ({children, visible = false}: SelectGroupContainerProps) => {

    return visible && (
        <div
            className={`bg-dark text-white border border-gray-200 rounded-md w-[280px] p-2 flex flex-col gap-2 items-center justify-between`}>{children}</div>
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
            <SelectTitle>{title}</SelectTitle>
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

const SelectTitle = ({children}: SelectTitleProps) => {
    return <div className={`mb-1 font-semibold  w-full py-1 px-4 `}>
        {children}
    </div>
}


const SelectItem = ({
                        children, onClick = () => {
    }, value
                    }: SelectItemProps) => {
    return (
        <div onClick={() => onClick(value)} className={`w-full  hover:bg-primary rounded-md py-1 px-4 cursor-pointer`}>
            {children}
        </div>)
}


export default SelectInput


const selectInputVariants = cva('flex items-start outline-none  ', {
    variants: {}
})

const selectGroupVariants = cva('flex items-start outline-none  ', {
    variants: {}
})

const selectTitleVariants = cva('')


const selectItemVariants = cva('flex items-start outline-none  ', {
    variants: {}
})

