import {SelectInput} from "./components";

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

function App() {
    return (
        <section className="p-4 space-y-10">
            <h1 className="text-title font-bold text-white">
                Rael UI
            </h1>
            {/*            <Button>Get started</Button>
            <TextInput  placeholder="Name"/>
            <PasswordInput  placeholder="Password"/>
            <TextArea/>*/}
            <SelectInput
                items={DESIGNER_TOOLS}
                placeholder="Select a designer tool"
                onSelect={(selectedItem) => console.log("Selected Item : ", selectedItem)}
            />
        </section>
    )
}

export default App
