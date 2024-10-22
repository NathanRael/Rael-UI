import AutoCompleteInput from "./components/ui/autoCompleteInput/AutoCompleteInput.tsx";

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
            <AutoCompleteInput>
                <AutoCompleteInput.Header placeholder="Select a designer tool"/>
                <AutoCompleteInput.GroupContainer>
                    {
                        DESIGNER_TOOLS.map(({title, values}) => (
                            <AutoCompleteInput.Group key={title}>
                                <AutoCompleteInput.GroupTitle>{title}</AutoCompleteInput.GroupTitle>
                                {
                                    values.map(v => (
                                        <AutoCompleteInput.Item value={v.name}>{v.content}</AutoCompleteInput.Item>
                                    ))
                                }
                            </AutoCompleteInput.Group>
                        ))
                    }
                </AutoCompleteInput.GroupContainer>
            </AutoCompleteInput>
        </section>
    )
}

export default App
