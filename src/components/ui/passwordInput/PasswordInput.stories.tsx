import {ComponentProps} from "react";
import {Meta, StoryObj} from "@storybook/react";
import {fn} from "@storybook/test";
import {PasswordInput} from "./index.ts";

type StoryProps = ComponentProps<typeof PasswordInput> & {
    placeholder: string;
}

const meta : Meta<StoryProps> = {
    component : PasswordInput,
    tags : ['autodocs'],
    args : {
        onChange : fn(),
    }
}

export default meta;

type Story  = StoryObj<StoryProps>;

export const Outline : Story = {
    args : {
        placeholder : 'Enter your password',
        variant : 'outline',
    },
    render : ({...args}) => <PasswordInput {...args}/>
}

export const Fill : Story = {
    args : {
        placeholder : 'Enter your password',
        variant : 'fill',
    },
    render : ({...args}) => <PasswordInput {...args}/>
}

export const HideIcon : Story = {
    args : {
        ...Outline.args,
        showIcon : false,
    },
    render : (args) => <PasswordInput {...args}/>
}

