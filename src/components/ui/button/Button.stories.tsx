import {Button} from "./index.ts";
import {ComponentProps} from "react";
import {Meta, StoryObj} from "@storybook/react";
import {fn} from "@storybook/test";
import {argTypes, buttonVariantOptions} from "@/components/default.ts";

type StoryProps = ComponentProps<typeof Button> & {
    buttonText : React.ReactNode;
}

const meta : Meta<StoryProps> = {
    component : Button,
    tags : ['autodocs'],
    argTypes : {
        ...argTypes,
        variant : {
            control : {type : "select"},
            options : buttonVariantOptions
        }
    },
    args : {
        onClick : fn(),
    }
}

export default meta;

type Story = StoryObj<StoryProps>;

export const Primary : Story = {
    args : {
        buttonText : 'Primary',
        variant : 'primary',
        size : 'md',
        radius : 'xl',
    },
    render : ({buttonText,...args}) => <Button {...args}>{buttonText}</Button>
}


export const Secondary : Story = {
    args : {
        ...Primary.args,
        variant : 'secondary',
        buttonText : 'Secondary',
    },
    render : ({buttonText,...args}) => <Button {...args}>{buttonText}</Button>
}

export const Ghost : Story = {
    args : {
        ...Primary.args,
        variant : 'ghost',
        buttonText : 'Ghost',
    },
    render : ({buttonText,...args}) => <Button {...args}>{buttonText}</Button>
}

export const Outline : Story = {
    args : {
        ...Primary.args,
        variant : 'outline',
        buttonText : 'Outline',
    },
    render : ({buttonText,...args}) => <Button {...args}>{buttonText}</Button>
}
export const Block : Story = {
    args : {
        ...Primary.args,
        buttonText : 'Block',
    },
    render : ({buttonText,...args}) => <div className={"w-[420px]"}><Button block {...args}>{buttonText}</Button></div>
}

export const Loading : Story = {
    args : {
        ...Primary.args,
        buttonText : 'Loading',
    },
    render : ({buttonText,...args}) => <Button {...args} loading>{buttonText}</Button>
}
export const Disabled : Story = {
    args : {
        ...Primary.args,
        buttonText : 'Disabled',
    },
    render : ({buttonText,...args}) => <Button disabled {...args}>{buttonText}</Button>
}
