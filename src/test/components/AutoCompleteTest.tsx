import  {
    AutoCompleteGroup,
    AutoCompleteGroupContainer, AutoCompleteGroupTitle,
    AutoCompleteTrigger, AutoCompleteItem
} from "../../components/ui/autoCompleteInput/AutoCompleteInput.tsx";
import {SearchIcon} from "lucide-react";
import {AutoComplete} from "../../components";

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
            <AutoComplete variant='outline'>
                <AutoCompleteTrigger placeholder="Select a designer tool" leftContent={
                    <SearchIcon size={20} />
                }/>
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
            </AutoComplete>
    )
}

export default AutoCompleteTest