import {Badge} from "./index.ts";
import {ComponentProps} from "react";
import {Meta, StoryObj} from "@storybook/react";

type StoryProps = ComponentProps<typeof Badge> & {
    BadgeText : React.ReactNode;
}

const meta : Meta<StoryProps> = {
    component : Badge,
    tags : ['autodocs'],
}

export default meta;

type Story = StoryObj<StoryProps>;

export const Fill : Story = {
    args : {
        BadgeText : '99+',
        variant : 'fill',
        size : 'sm',
        radius : 'xl',
    },
    render : ({BadgeText,...args}) => <Badge {...args}>{BadgeText}</Badge>
}

export const Outline : Story = {
    args : {
        ...Fill.args,
        variant : 'outline',
    },
    render : ({BadgeText,...args}) => <Badge {...args}>{BadgeText}</Badge>
}


export const Dot : Story = {
    args : {
        ...Fill.args,
        variant : 'outline',
        BadgeText : '',
    },
    render : ({BadgeText,...args}) => <Badge {...args}>{BadgeText}</Badge>
}