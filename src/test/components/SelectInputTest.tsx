import {SelectInput} from "../../components";

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
            items={DESIGNER_TOOLS}
            placeholder="Select a designer tool"
            onSelect={(selectedItem) => console.log("Selected Item : ", selectedItem)}
        />
    )
}

export default  SelectInputTest;