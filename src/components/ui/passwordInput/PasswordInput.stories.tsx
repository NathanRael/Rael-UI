import {ComponentProps} from "react";
import {Meta, StoryObj} from "@storybook/react";
import {fn} from "@storybook/test";
import {PasswordInput} from "./index.ts";
import {argTypes} from "@/components/default.ts";

type StoryProps = ComponentProps<typeof PasswordInput> & {
    placeholder: string;
}

const meta : Meta<StoryProps> = {
    component : PasswordInput,
    tags : ['autodocs'],
    args : {
        onChange : fn(),
    },
    argTypes : {
        ...argTypes,
    },
    render : ({...args}) => <PasswordInput {...args}/>
}

export default meta;

type Story  = StoryObj<StoryProps>;

export const Outline : Story = {
    args : {
        placeholder : 'Enter your password',
        variant : 'outline',
        size : 'md',
    },
}

export const Fill : Story = {
    args : {
        placeholder : 'Enter your password',
        variant : 'fill',
    },
}

export const HideIcon : Story = {
    args : {
        ...Outline.args,
        showIcon : false,
    },
}

