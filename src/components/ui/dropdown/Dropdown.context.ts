import {createContext, useContext, useRef, useState} from "react";
import useOutsideClicked from "@/hooks/useOutsideClicked.ts";
import {VariantProps} from "class-variance-authority";
import {dropdownVariants} from "@/components/ui/dropdown/Dropdown.variants.ts";

type DropdownContext  = VariantProps<typeof dropdownVariants> & {
    showContent : boolean;
    setShowContent : (show: boolean) => void;
}

export const DropdownContext = createContext<DropdownContext | undefined>(undefined);

export const useDropdown = () => {
    const [showContent, setShowContent] = useState(false);
    const dropdownRef = useRef<HTMLDivElement | null>(null);
    useOutsideClicked({
        ref : dropdownRef,
        action : () => setShowContent(false)
    })
    return {showContent, setShowContent, dropdownRef};
}
export const useDropdownContext = () => {
    const context = useContext(DropdownContext);
    if (!context) {
        throw new Error("useDropdownContext must be used within Dropdown");
    }
    
    return context as DropdownContext;
}