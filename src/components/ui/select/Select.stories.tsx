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

const SelectDemo = (props) => {
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
        <Select
            {...props}
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

type StoryProps = ComponentProps<typeof Select>
const meta: Meta<StoryProps> = {
    component: Select,
    tags: ['autodocs'],

}

export default meta;

type Story = StoryObj<StoryProps>;

export const Outline: Story = {
    args: {
        size: 'md',
        radius : 'md',
        variant: 'outline',
    },
    render: ({...args}) => <SelectDemo {...args}/>
}

export const Fill: Story = {
    args: {
        ...Outline.args,
        variant: 'fill',
    },
    render: ({...args}) => <SelectDemo {...args}/>
}
