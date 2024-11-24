import {createContext, useContext, useRef, useState} from "react";
import useOutsideClicked from "@/hooks/useOutsideClicked.ts";
import {Radius, Variant} from "@/components/global.types.ts";

interface DropdownContext {
    showContent : boolean;
    setShowContent : (show: boolean) => void;
    // size?: Size;
    radius? : Radius;
    variant? : Variant;
}

export const DropdownContext = createContext<DropdownContext | undefined>(undefined);

export const useDropdown = () => {
    const [showContent, setShowContent] = useState(true);
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