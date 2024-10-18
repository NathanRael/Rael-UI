import {useEffect, useState} from "react";

type UseRadioProps = {
    defaultValue: string,
    onChange?: (value: string) => void,
    disabled: boolean,
}
export const useRadio = ({
                             defaultValue, onChange = () => {
    }, disabled
                         }: UseRadioProps) => {
    const [selectedValue, setSelectedValue] = useState("");


    useEffect(() => {
        if (selectedValue === "")
            setSelectedValue(defaultValue);
        onChange(selectedValue)
        
    }, [selectedValue]);

    return {selectedValue, setSelectedValue, disabled};
}

