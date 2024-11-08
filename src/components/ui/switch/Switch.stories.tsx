import {Switch, SwitchLabel} from "./index.ts";
import {ComponentProps} from "react";
import {Meta, StoryObj} from "@storybook/react";

type StoryProps = ComponentProps<typeof Switch> & {
}

const meta : Meta<StoryProps> = {
    component : Switch,
    tags : ['autodocs'],
    render : (args) => (
        <Switch {...args}>
            <SwitchLabel>I accept terms and conditions</SwitchLabel>
        </Switch>
    )
}

export default meta;

type Story = StoryObj<StoryProps>;

export const Fill : Story = {
    args : {
        variant : 'fill',
    },
}

export const Outline : Story = {
    args : {
        ...Fill.args,
        variant : 'outline',
    },
}

