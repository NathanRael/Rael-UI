import {
    AutoComplete,
    AutoCompleteGroup,
    AutoCompleteGroupContainer,
    AutoCompleteGroupTitle,
    AutoCompleteItem,
    AutoCompleteTrigger,
} from "./index.ts";
import {ComponentProps} from "react";
import {Meta, StoryObj} from "@storybook/react";
import {SearchIcon} from "lucide-react";


const AutoCompleteDemo = (props) => {
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
    return (
        <AutoComplete  {...props} >
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

type StoryProps = ComponentProps<typeof AutoComplete>
const meta: Meta<StoryProps> = {
    component: AutoComplete,
    tags: ['autodocs'],

}

export default meta;

type Story = StoryObj<StoryProps>;

export const Outline: Story = {
    args: {
        size: 'md',
        radius : 'md',
        variant: 'fill',
        placeholder: 'Select a designer tool',
    },
    render: ({...args}) => <AutoCompleteDemo  {...args}/>
}

export const Fill: Story = {
    args: {
        ...Outline.args,
        variant: 'fill',
    },
    render: ({...args}) => <AutoCompleteDemo {...args}/>
}
