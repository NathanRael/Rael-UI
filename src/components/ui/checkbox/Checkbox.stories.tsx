import {Checkbox} from "./index.ts";
import {ComponentProps} from "react";
import {Meta, StoryObj} from "@storybook/react";
import {CheckboxLabel} from "@/components/ui/checkbox/Checkbox.tsx";

type StoryProps = ComponentProps<typeof Checkbox> & {}

const meta: Meta<StoryProps> = {
    component: Checkbox,
    tags: ['autodocs'],
    render: (args) => (
        <Checkbox {...args}>
            <CheckboxLabel>I accept terms and condition</CheckboxLabel>
        </Checkbox>)
}

export default meta;

type Story = StoryObj<StoryProps>;

export const Fill: Story = {
    args: {
        radius: 'md',
        variant: 'fill',
    },
}

export const Outline: Story = {
    args: {
        ...Fill.args,
        variant: 'outline',
    },
}

