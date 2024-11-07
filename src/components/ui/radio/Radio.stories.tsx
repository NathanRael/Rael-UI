import {RadioGroup, RadioItem} from "./index.ts";
import {ComponentProps} from "react";
import {Meta, StoryObj} from "@storybook/react";

const RadioDemo = () => {
    return (
        <RadioGroup name={"radio"} defaultValue={"figma"}>
            <RadioItem value={"figma"} label={"Figma"}/>
            <RadioItem value={"adobe Illustrator"} label={"Adobe Illustrator"}/>
            <RadioItem value={"penpot"} label={"Penpot"}/>
        </RadioGroup>
    )
}

type StoryProps = ComponentProps<typeof RadioGroup>
const meta : Meta<StoryProps> = {
    component : RadioDemo,
    tags : ['autodocs'],
}

export default meta;

type Story = StoryObj<StoryProps>;

export const Example : Story = {
    args : {
        defaultValue : 'figma',
    },
    render : ({...args}) => {
        return (
            <RadioGroup  {...args}>
                <RadioItem value={"figma"} label={"Figma"}/>
                <RadioItem value={"adobe Illustrator"} label={"Adobe Illustrator"}/>
                <RadioItem value={"penpot"} label={"Penpot"}/>
            </RadioGroup>
        )
    }
}

