import {ComponentProps} from "react";
import {Button, Stack} from "@/components";
import {Meta, StoryObj} from "@storybook/react";

type StoryProps = ComponentProps<typeof Stack>

const meta : Meta<StoryProps> = {
    component : Stack,
    tags : ['autodocs'],
    render : args => (
            <Stack className={'w-[320px]'} {...args}>
                <Button>First</Button>
                <Button>Second</Button>
                <Button>Third</Button>
            </Stack>
    )

}

export default meta;

type Story = StoryObj<StoryProps>;

export const Vertical : Story = {
    args: {
        direction : 'vertical',
    }
}

export const Horizontal : Story = {
    args: {
        direction : 'horizontal',
    },
    render : args => (
        <Stack {...args}>
            <Button >First Button</Button>
            <Button >Second Button</Button>
            <Button >Third Button</Button>
        </Stack>
    )
} 