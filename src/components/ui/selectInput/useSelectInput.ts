import {useCallback, useRef, useState} from "react";
import useOutsideClicked from "../../../hooks/useOutsideClicked.ts";

type Props = {
    onSelect: (value: string) => void;
}
const useSelectInput = ({
    onSelect = () => {},
                        } : Props)  => {
    const [selectedItem, setSelectedItem] = useState("");
    const [showSelectGroup, setShowSelectGroup] = useState(false);
    const selectRef = useRef<HTMLDivElement>(null);

    useOutsideClicked({
        ref: selectRef,
        action: () => setShowSelectGroup(false)
    })

    const handleSelectedItem = useCallback((value: string) => {
        setSelectedItem(value);
        onSelect(value);
        setShowSelectGroup(false);
    }, []);

    
    return {
        selectedItem,
        showSelectGroup,
        handleSelectedItem,
        selectRef,
        setShowSelectGroup
    }
}

export default useSelectInput;