import {
    SelectInputDefaultProps
} from "./SelectInput.types.ts";
import {SelectInputDefault} from "./SelectInput.Default.tsx";

const SelectInput = (props: SelectInputDefaultProps) => {
    return (
        <SelectInputDefault {...props}/>
    )
}

export default SelectInput
