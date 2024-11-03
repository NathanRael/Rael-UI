import {
    Select, SelectGroup,
    SelectGroupContainer, SelectGroupTitle,
    SelectTrigger, SelectItem,
    SelectLabel
} from "../../components";
import {ChevronDownIcon} from "lucide-react";

export const DESIGNER_TOOLS = [
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
        <Select
            onChange={(selectedItem) => console.log("Selected Item : ", selectedItem)}
        >
            <SelectTrigger>
                <SelectLabel placeholder={"Select a designer tool"}/>
                <ChevronDownIcon/>
            </SelectTrigger>
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
        </Select>
    )
}

export default SelectInputTest;