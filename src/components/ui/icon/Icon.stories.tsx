import {Icon} from "./index.ts";
import {ComponentProps} from "react";
import {Meta, StoryObj} from "@storybook/react";
import {fn} from "@storybook/test";
import {Rocket} from "lucide-react";
import {argTypes, buttonVariantOptions} from "@/components/default.ts";

type StoryProps = ComponentProps<typeof Icon> & {
    buttonText : React.ReactNode;
}

const meta : Meta<StoryProps> = {
    component : Icon,
    tags : ['autodocs'],
    argTypes : {
        ...argTypes,
        variant : {
            control : {type : "select"},
            options : buttonVariantOptions
        },
    },
    args : {
        onClick : fn(),
    },
    render : ({...args}) => <Icon {...args}><Rocket size={16}/></Icon>
}

export default meta;

type Story = StoryObj<StoryProps>;

export const Primary : Story = {
    args : {
        variant : 'primary',
        size : 'md',
        radius : 'full',
    },
}


export const Secondary : Story = {
    args : {
        ...Primary.args,
        variant : 'secondary',
    },
}

export const Ghost : Story = {
    args : {
        ...Primary.args,
        variant : 'ghost',
    },
    
}

export const Outline : Story = {
    args : {
        ...Primary.args,
        variant : 'outline',
    },
    
}
