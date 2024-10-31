import {Button} from "./index.ts";
import {ComponentProps} from "react";
import {Meta, StoryObj} from "@storybook/react";
import {fn} from "@storybook/test";

type StoryProps = ComponentProps<typeof Button> & {
    buttonText : React.ReactNode;
}

const meta : Meta<StoryProps> = {
    component : Button,
    tags : ['autodocs'],
    args : {
        onClick : fn(),
    }
}

export default meta;

type Story = StoryObj<StoryProps>;

export const Primary : Story = {
    args : {
        buttonText : 'Button',
        variant : 'primary',
        size : 'md',
        radius : '2xl',
    },
    render : ({buttonText,...args}) => <Button {...args}>{buttonText}</Button>
}


