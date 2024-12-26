import {ComponentProps} from "react";
import {Meta, StoryObj} from "@storybook/react";
import {fn} from "@storybook/test";
import {TextInput} from "./index.ts";
import {LucideMail} from "lucide-react";
import {argTypes} from "@/components/default.ts";

type StoryProps = ComponentProps<typeof TextInput>


const meta : Meta<StoryProps> = {
    component : TextInput,
    tags : ['autodocs'],
    argTypes : {
        ...argTypes,
    },
    args : {
        onChange : fn(),
    }
}

export default meta;

type Story  = StoryObj<StoryProps>;

export const Outline : Story = {
    args : {
        placeholder : 'Enter your email',
        variant : 'outline',
    },
    render : ({...args}) => <TextInput {...args}/>
}

export const Fill : Story = {
    args : {
        ...Outline.args,
        placeholder : 'Enter your email',
        variant : 'fill',
    },
    render : ({...args}) => <TextInput {...args}/>
}

export const LeftContent : Story = {
    args : {
        ...Outline.args,
    },
    render : ({...args}) => <TextInput leftContent={<LucideMail size={16}/>} {...args}/>
}
