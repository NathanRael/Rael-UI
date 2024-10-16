/*
import {
    SelectInputDefaultProps,
} from "./SelectInput.types.ts";
import useSelectInput from "./useSelectInput.ts";
import {cn} from "../../../utils/cn.ts";
import {ChevronDownIcon} from "lucide-react";
import {createContext, Dispatch, RefObject, SetStateAction, useContext, useState} from "react";

type Child = {
    children: React.ReactNode,
    className?: string,
}

type CustomSelectContext = {
    selectRef : RefObject<HTMLDivElement>,
    showSelectGroup : boolean,
    setShowSelectGroup : Dispatch<SetStateAction<boolean>>,
    selectedItem : string,
    handleSelectedItem : (value : string) => void,
}

const CustomSelectContext = createContext<CustomSelectContext | undefined>(undefined);

const useSelectContext = () => {
    return useContext(CustomSelectContext)
}

export const SelectInputCustom = ({
                                      className,
                                      onSelect = () => {
                                      },
                                        children,
                                  }: SelectInputDefaultProps) => {
    const {
        selectRef,
        showSelectGroup,
        setShowSelectGroup,
        selectedItem,
        handleSelectedItem,
    } = useSelectInput({onSelect});

    return (
        <CustomSelectContext.Provider value={{
            selectRef,
            setShowSelectGroup,
            selectedItem,
            handleSelectedItem,
            showSelectGroup
        }}>
            <div ref={selectRef} className={cn("", className)}>
                {children}
                {/!*<SelectHeader>
                <SelectPlaceholder>Select Something</SelectPlaceholder>
            </SelectHeader>
            <SelectGroupContainer>
                <SelectGroup>
                    <SelectTitle>Offline</SelectTitle>
                    <SelectItem value={"Figma"}>Figma</SelectItem>
                    <SelectItem value={"Adobe XD"}>Adobe XD</SelectItem>
                    <SelectItem value={"Penpot"}>Penpot</SelectItem>
                </SelectGroup>
            </SelectGroupContainer>*!/}
            </div>
        </CustomSelectContext.Provider>
    )
}

const SelectHeader = ({children}: Child) => {
    const {
        selectedItem,
        setShowSelectGroup,
    } = useSelectContext();

    return (
        <div
            onClick={() => setShowSelectGroup(prev => !prev)}
            className={``}>
            {selectedItem || children}
            <ChevronDownIcon/>
        </div>
    )
}

const SelectPlaceholder = ({children}: Child) => {
    return (
        <p>{children}</p>
    )
}

const SelectGroupContainer = ({children, className}: Child) => {
    const [visible, setVisible] = useState(false);
    
    return visible && (
        <div
            className={cn(``, className)}>{children}</div>
    )
}

const SelectGroup = ({
                         children
                     }: Child) => {
    return (
        <div className={`w-full`}>
            {children}
        </div>
    )
}

const SelectTitle = ({children}: Child) => {
    return <div className={`mb-1 font-semibold  w-full py-1 px-4 `}>
        {children}
    </div>
}

const SelectItem = ({
                        children
                    }: Child) => {
    return (
        <div className={`w-full  hover:bg-primary rounded-md py-1 px-4 cursor-pointer`}>
            {children}
        </div>)
}
*/
