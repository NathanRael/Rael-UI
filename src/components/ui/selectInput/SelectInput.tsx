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


/*
export const selectGroupVariants = cva('flex items-start outline-none  ', {
    variants: {}
})

export const selectTitleVariants = cva('')


export const selectItemVariants = cva('flex items-start outline-none  ', {
    variants: {}
})

*/
