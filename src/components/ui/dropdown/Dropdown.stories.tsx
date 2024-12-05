import {ComponentProps} from "react";
import {Meta, StoryObj} from "@storybook/react";
import {argTypes} from "@/components/default.ts";
import  {Dropdown, DropdownContent, DropdownItem, DropdownTrigger} from "@/index.ts";
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
            <DropdownTrigger>
                <Button>Theme</Button>
            </DropdownTrigger>
            <DropdownContent>
                <DropdownItem> <Sun size={16}/> Light </DropdownItem>
                <DropdownItem> <Moon size={16}/> Dark</DropdownItem>
            </DropdownContent>
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

