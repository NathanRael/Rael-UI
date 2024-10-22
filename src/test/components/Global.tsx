import {Button, TextInput, TextArea, Checkbox, SelectInput, PasswordInput} from "../../components"
import RadioGroup from "../../components/ui/radio/Radio.tsx";

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
            <RadioGroup defaultValue="1">
                <RadioGroup.Item  value="1" label="First"/>
                <RadioGroup.Item value="2" label="Second"/>
                <RadioGroup.Item value="3" label="Nathan"/>
            </RadioGroup>
        </>
    )
}

export default GlobalTest;