import {ComponentProps} from "react";
import {Meta, StoryObj} from "@storybook/react";
import {
    Card,
    CardDescription,
    CardSection,
    CardTitle,
    PasswordInput,
    FormItem,
    FormLabel,
    TextInput,
    Button
} from "@/components";
import {AtSign, Lock} from "lucide-react";
import {argTypes} from "@/components/default.ts";

type StoryProps = ComponentProps<typeof Card>
const meta: Meta<StoryProps> = {
    component: Card,
    argTypes: {
        radius: argTypes.radius,
        variant: argTypes.variant,
    },
    tags: ['autodocs'],
    render: args => (
        <Card className={'w-[420px]'} {...args}>
            <CardSection rFor={'meta'}>
                <CardTitle>Login</CardTitle>
                <CardDescription>Log into your account to access the whole app features</CardDescription>
            </CardSection>
            <CardSection>
                <FormItem>
                    <FormLabel>Email</FormLabel>
                    <TextInput block placeholder={'rael@gmail.com'} leftContent={<AtSign size={16}/>}/>
                </FormItem>
                <FormItem>
                    <FormLabel>Password</FormLabel>
                    <PasswordInput leftContent={<Lock size={16}/>} block placeholder={''}/>
                </FormItem>
            </CardSection>
            <CardSection rFor={'meta'}>
                <Button type="submit">Login</Button>
            </CardSection>
        </Card>
    )
}

export default meta;

type Story = StoryObj<StoryProps>;

export const Fill: Story = {
    args: {
        radius: 'lg',
        variant: 'fill',
    },
}

export const Outline: Story = {
    args: {
        ...Fill.args,
        variant: 'outline',
    },
}

