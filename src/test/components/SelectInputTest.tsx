import {SelectInput} from "../../components";
import {
    SelectGroup,
    SelectGroupContainer, SelectGroupTitle,
    SelectHeader, SelectItem,
    SelectLabel
} from "../../components/ui/selectInput/SelectInput.Default.tsx";
import {ChevronDownIcon} from "lucide-react";

const DESIGNER_TOOLS = [
    {
        title: "Online",
        values: [
            {name: "Figma", content: "Figma"},
            {name: "Penpot", content: "Penpot"},
            {name: "Adobe XD", content: "Adobe XD"},
        ]
    }, {
        title: "Offline",
        values: [
            {name: "Figma", content: "Figma"},
            {name: "Penpot", content: "Penpot"},
            {name: "Adobe XD", content: "Adobe XD"},
        ]
    },
]


const SelectInputTest = () => {
    return (
        <SelectInput
            onSelect={(selectedItem) => console.log("Selected Item : ", selectedItem)}
        >
            <SelectHeader>
                <SelectLabel placeholder={"Select a designer tool"}/>
                <ChevronDownIcon/>
            </SelectHeader>
            <SelectGroupContainer>
                {
                    DESIGNER_TOOLS.map(({title, values}) => (
                        <SelectGroup key={title}>
                            <SelectGroupTitle>{title}</SelectGroupTitle>
                            {
                                values.map(v => (
                                    <SelectItem key={title + '-' + v.name}
                                                value={v.name}>{v.content}</SelectItem>
                                ))
                            }
                        </SelectGroup>
                    ))
                }
            </SelectGroupContainer>
        </SelectInput>
    )
}

export default SelectInputTest;