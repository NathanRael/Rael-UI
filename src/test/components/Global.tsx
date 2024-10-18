import {Button, TextInput, TextArea, Checkbox, SelectInput, PasswordInput} from "../../components"

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

const GlobalTest = () => {
    
    return (
        <>
            <Button>Get started</Button>
            <TextInput placeholder="Name"/>
            <PasswordInput placeholder="Password"/>
            <TextArea/>
            <SelectInput
                items={DESIGNER_TOOLS}
                placeholder="Select a designer tool"
                onSelect={(selectedItem) => console.log("Selected Item : ", selectedItem)}
            />
            <Checkbox checked label="I agree to the terms and conditions"/>
        </>
    )
}

export default GlobalTest;