import {ComponentProps} from "react";
import {Meta, StoryObj} from "@storybook/react";
import {fn} from "@storybook/test";
import {NumberInput} from "./index.ts";

import {argTypes} from "@/components/default.ts";
import {LucideMail} from "lucide-react";

type StoryProps = ComponentProps<typeof NumberInput>


const meta : Meta<StoryProps> = {
    component : NumberInput,
    tags : ['autodocs'],
    argTypes : {
        ...argTypes,
    },
    args : {
        onChange : fn(),
    },
    render : (args) => <NumberInput {...args}/>, 
}

export default meta;

type Story  = StoryObj<StoryProps>;

export const Outline : Story = {
    args : {
        variant : 'outline',
        
    },
}

export const Fill : Story = {
    args : {
        ...Outline.args,
        variant : 'fill',
    },
}

export const LeftContent : Story = {
    args : {
        ...Outline.args,
    },
    render : ({...args}) => <NumberInput leftContent={<LucideMail size={16}/>} {...args}/>
}
