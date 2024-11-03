import {Checkbox} from "./index.ts";
import {ComponentProps} from "react";
import {Meta, StoryObj} from "@storybook/react";

type StoryProps = ComponentProps<typeof Checkbox> & {
}

const meta : Meta<StoryProps> = {
    component : Checkbox,
    tags : ['autodocs'],
}

export default meta;

type Story = StoryObj<StoryProps>;

export const Fill : Story = {
    args : {
        radius : 'md',
        variant : 'fill',
    },
    render : ({...args}) => <Checkbox  {...args} label={'I accept terms and conditions'}/>
}

export const Outline : Story = {
    args : {
        ...Fill.args,
        variant : 'outline',
    },
    render : ({...args}) => <Checkbox  {...args} label={'I accept terms and conditions'}/>
}

