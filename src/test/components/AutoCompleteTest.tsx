import AutoCompleteInput, {
    AutoCompleteGroup,
    AutoCompleteGroupContainer, AutoCompleteGroupTitle,
    AutoCompleteHeader, AutoCompleteItem
} from "../../components/ui/autoCompleteInput/AutoCompleteInput.tsx";

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
const AutoCompleteTest = () => {
    return (
        <section className="p-4 space-y-10">
            <h1 className="text-title font-bold text-white">
                Rael UI
            </h1>
            <AutoCompleteInput variant='outline'>
                <AutoCompleteHeader placeholder="Select a designer tool"/>
                <AutoCompleteGroupContainer>
                    {
                        DESIGNER_TOOLS.map(({title, values}) => (
                            <AutoCompleteGroup key={title}>
                                <AutoCompleteGroupTitle>{title}</AutoCompleteGroupTitle>
                                {
                                    values.map(v => (
                                        <AutoCompleteItem key={title + '-' + v.name}
                                                          value={v.name}>{v.content}</AutoCompleteItem>
                                    ))
                                }
                            </AutoCompleteGroup>
                        ))
                    }
                </AutoCompleteGroupContainer>
            </AutoCompleteInput>
        </section>
    )
}

export default AutoCompleteTest