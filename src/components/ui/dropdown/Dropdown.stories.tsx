import {ComponentProps} from "react";
import {Meta, StoryObj} from "@storybook/react";
import {argTypes} from "@/components/default.ts";
import Dropdown, {DropDownContent, DropDownItem, DropDownTrigger} from "@/components/ui/dropdown/Dropdown.tsx";
import Button from "@/components/ui/button/Button.tsx";
import {Moon, Sun} from "lucide-react";

type StoryProps = ComponentProps<typeof Dropdown>

const meta: Meta<StoryProps> = {
    component: Dropdown,
    tags: ['autodocs'],
    argTypes: {
        variant: argTypes.variant,
        radius: argTypes.radius,
    },
    render: ({...args}) => (
        <Dropdown {...args}>
            <DropDownTrigger>
                <Button>Theme</Button>
            </DropDownTrigger>
            <DropDownContent>
                <DropDownItem> <Sun size={16}/> Light </DropDownItem>
                <DropDownItem> <Moon size={16}/> Dark</DropDownItem>
            </DropDownContent>
        </Dropdown>
    )
}

export default meta

type Story = StoryObj<StoryProps>;

export const Fill: Story = {
    args: {
        variant: 'fill',
    }
}
export const Outline: Story = {
    args: {
        variant: 'outline',
    }
}