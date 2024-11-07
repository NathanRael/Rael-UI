import {Textarea} from "./index.ts";
import {ComponentProps} from "react";
import {Meta, StoryObj} from "@storybook/react";
import {fn} from "@storybook/test";

type StoryProps = ComponentProps<typeof Textarea> & {
    buttonText : React.ReactNode;
}

const meta : Meta<StoryProps> = {
    component : Textarea,
    tags : ['autodocs'],
    args : {
        onClick : fn(),
    }
}

export default meta;

type Story = StoryObj<StoryProps>;

export const Outline : Story = {
    args : {
        variant : 'outline',
        placeholder : 'Your message ...'
    },
    render : ({...args}) => <Textarea {...args} />
}

export const Fill : Story = {
    args : {
        ...Outline.args,
        variant : 'fill',
    },
    render : ({...args}) => <Textarea {...args} />
}


export const Block : Story = {
    args : {
        ...Outline.args,
        variant : 'fill',
    },
    render : ({...args}) => <div className={"w-[420px]"}><Textarea block {...args} /></div>
}
