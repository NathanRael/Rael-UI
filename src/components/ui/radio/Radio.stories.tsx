import {RadioGroup, RadioItem} from "./index.ts";
import {ComponentProps} from "react";
import {Meta, StoryObj} from "@storybook/react";
import {argTypes} from "@/components/default.ts";


type StoryProps = ComponentProps<typeof RadioGroup>
const meta : Meta<StoryProps> = {
    component : RadioGroup,
    tags : ['autodocs'],
    argTypes : {
        variant : argTypes.variant,
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

export default meta;

type Story = StoryObj<StoryProps>;

export const Fill : Story = {
    args : {
        defaultValue : 'figma',
        variant : 'fill',
    },
}

export const Outline : Story = {
    args : {
        ...Fill.args,
        variant : 'outline',
    },
}

/*
export const Outline : Story = {
    args : {
        defaultValue : 'figma',
        variant : 'outline'
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

*/
