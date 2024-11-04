import {
    Select,
    SelectGroup,
    SelectGroupContainer,
    SelectGroupTitle,
    SelectItem,
    SelectLabel,
    SelectTrigger
} from "./index.ts";
import {ComponentProps} from "react";
import {Meta, StoryObj} from "@storybook/react";
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

type StoryProps = ComponentProps<typeof Select>
const meta: Meta<StoryProps> = {
    component: Select,
    tags: ['autodocs'],
    render : (args) => (
        <Select
            {...args}
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

export default meta;

type Story = StoryObj<StoryProps>;

export const Outline: Story = {
    args: {
        size: 'md',
        radius : 'md',
        variant: 'outline',
    },
}

export const Fill: Story = {
    args: {
        ...Outline.args,
        variant: 'fill',
    },
}
