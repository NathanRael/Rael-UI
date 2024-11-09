import {Avatar} from "./index.ts";
import {ComponentProps} from "react";
import {Meta, StoryObj} from "@storybook/react";
import {AvatarFallback, AvatarImage} from "./index.ts";
import {argTypes} from "@/components/default.ts";


type StoryProps = ComponentProps<typeof Avatar>
const meta: Meta<StoryProps> = {
    component: Avatar,
    tags: ['autodocs'],
    argTypes : {
        size : argTypes.size,
        radius : argTypes.radius,
    },
    render: args => (
        <Avatar {...args}>
            <AvatarImage src={"https://picsum.photos/200"} alt={"placeholder image"}/>
            <AvatarFallback>R</AvatarFallback>
        </Avatar>),
}

export default meta;

type Story = StoryObj<StoryProps>;

export const Example: Story = {
    args: {
        size: 'md',
        radius : 'full',
    },
   
}

