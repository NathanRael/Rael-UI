import {Switch, SwitchLabel} from "./index.ts";
import {ComponentProps} from "react";
import {Meta, StoryObj} from "@storybook/react";
import {argTypes} from "@/components/default.ts";

type StoryProps = ComponentProps<typeof Switch> & {
}

const meta : Meta<StoryProps> = {
    component : Switch,
    tags : ['autodocs'],
    argTypes : {
        variant : argTypes.variant,
    },
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

