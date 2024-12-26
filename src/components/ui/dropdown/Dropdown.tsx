import {PropsWithChildren} from "react";
import {cn} from "@/utils";
import {DropdownContext, useDropdown, useDropdownContext} from "@/components/ui/dropdown/Dropdown.context.ts";
import {dropdownVariants} from "@/components/ui/dropdown/Dropdown.variants.ts";
import {useComponentStyle} from "@/components";
import {VariantProps} from "class-variance-authority";

interface DropdownItemProps {
    className?: string;
    onClick?: () => void;
    children?: React.ReactNode;
}

type  DropdownProps = VariantProps<typeof dropdownVariants> &  {
    className?: string;
    children: React.ReactNode;
}

interface ClassName {
    className?: string;
}

const Dropdown = ({children, className, radius, variant}: DropdownProps) => {
    const {dropdownRef, ...props} = useDropdown()

    return (
        <DropdownContext.Provider value={{radius: radius, variant: variant, ...props}}>
            <div ref={dropdownRef} className={cn('relative', className)}>
                {children}
            </div>
        </DropdownContext.Provider>

    )
}

export const DropdownTrigger = ({children, className}: Required<PropsWithChildren> & ClassName) => {
    const {setShowContent, showContent} = useDropdownContext();

    return (
        <div onClick={() => setShowContent(!showContent)} className={cn('', className)}>
            {children}
        </div>
    )
}

export const DropdownContent = ({children, className}: Required<PropsWithChildren> & ClassName) => {
    const {showContent, variant, radius} = useDropdownContext();
    const {cVariant} = useComponentStyle();
    if (!showContent)
        return

    return (
        <div
            className={cn(dropdownVariants({variant: variant || cVariant,  radius}), className)}>
            {children}
        </div>
    )
}

export const DropdownItem = ({
                                 onClick = () => {
                                 }, className, children
                             }: DropdownItemProps) => {
    const {setShowContent} = useDropdownContext();
    return (
        <div onClick={() => {
            setShowContent(false);
            onClick()
        }}
             className={cn(`flex flex-row items-center gap-2 w-full rounded-md py-1 px-4 cursor-pointer text-input-fill-l-text dark:text-input-fill-d-text hover:bg-primary min-w-[140px]`, className)}>
            {children}
        </div>
    )
}


export default Dropdown

