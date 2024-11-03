import {Icon} from "./index.ts";
import {ComponentProps} from "react";
import {Meta, StoryObj} from "@storybook/react";
import {fn} from "@storybook/test";
import {Rocket} from "lucide-react";

type StoryProps = ComponentProps<typeof Icon> & {
    buttonText : React.ReactNode;
}

const meta : Meta<StoryProps> = {
    component : Icon,
    tags : ['autodocs'],
    args : {
        onClick : fn(),
    }
}

export default meta;

type Story = StoryObj<StoryProps>;

export const Primary : Story = {
    args : {
        variant : 'primary',
        size : 'md',
        radius : 'full',
    },
    render : ({...args}) => <Icon {...args}><Rocket size={16}/></Icon>
}


export const Secondary : Story = {
    args : {
        ...Primary.args,
        variant : 'secondary',
    },
    render : ({...args}) => <Icon {...args}><Rocket size={16}/></Icon>
}

export const Ghost : Story = {
    args : {
        ...Primary.args,
        variant : 'ghost',
    },
    render : ({...args}) => <Icon {...args}><Rocket size={16}/></Icon>
    
}

export const Outline : Story = {
    args : {
        ...Primary.args,
        variant : 'outline',
    },
    render : ({...args}) => <Icon {...args}><Rocket size={16}/></Icon>
    
}
