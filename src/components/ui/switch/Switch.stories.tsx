import {Switch} from "./index.ts";
import {ComponentProps} from "react";
import {Meta, StoryObj} from "@storybook/react";

type StoryProps = ComponentProps<typeof Switch> & {
}

const meta : Meta<StoryProps> = {
    component : Switch,
    tags : ['autodocs'],
}

export default meta;

type Story = StoryObj<StoryProps>;

export const Fill : Story = {
    args : {
        variant : 'fill',
    },
    render : ({...args}) => <Switch  {...args} label={'I accept terms and conditions'}/>
}

export const Outline : Story = {
    args : {
        ...Fill.args,
        variant : 'outline',
    },
    render : ({...args}) => <Switch  {...args} label={'I accept terms and conditions'}/>
}

