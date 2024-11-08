import {ComponentProps} from "react";
import {Meta, StoryObj} from "@storybook/react";
import {Card} from "./index.ts";
import {CardDescription, CardSection, CardTitle} from "./Card.tsx";
import {FormDescription, FormItem, FormLabel} from "../../form";
import {TextInput} from "../textInput";
import {Button} from "../button";
import {PasswordInput} from "../passwordInput";
import {AtSign, ChevronDown, Lock} from "lucide-react";
import {Select, SelectGroup, SelectGroupContainer, SelectItem, SelectLabel, SelectTrigger} from "../select";

type StoryProps = ComponentProps<typeof Card>
const meta: Meta<StoryProps> = {
    component: Card,
    tags: ['autodocs'],
    render:  args => (
        <Card  className={'w-[420px]'} {...args}>
            <CardSection rFor={'meta'}>
                <CardTitle>Login</CardTitle>
                <CardDescription>Login into your account to access the whole app features</CardDescription>
            </CardSection>
            <CardSection>
                <FormItem>
                    <FormLabel>Email</FormLabel>
                    <TextInput block  placeholder={'rael@gmail.com'} leftContent={<AtSign size={16}/>}/>
                    <FormDescription>At the your fist login, we will send you a validation code</FormDescription>
                </FormItem>
                <FormItem>
                    <FormLabel>Password</FormLabel>
                    <PasswordInput leftContent={<Lock size={16}/>} block placeholder={''}/>
                    <FormDescription>Your email will be blocked after 5 wrong attempts</FormDescription>
                </FormItem>
                <Select block>
                    <SelectTrigger>
                        <SelectLabel placeholder={'test'}/>
                        <ChevronDown/>
                    </SelectTrigger>
                    <SelectGroupContainer>
                        <SelectGroup>
                            <SelectItem value={'1'}> 1</SelectItem>
                            <SelectItem value={'1'}> 1</SelectItem>
                            <SelectItem value={'1'}> 1</SelectItem>
                        </SelectGroup>
                    </SelectGroupContainer>
                </Select>
            </CardSection>
            <CardSection rFor={'meta'}>
                <Button type="submit">Login</Button>
            </CardSection>
        </Card>
    )
}

export default meta;

type Story = StoryObj<StoryProps>;

export const Outline: Story = {
    args: {
        variant: 'outline',
        radius: 'lg',
    },
}

export const Fill: Story = {
    args: {
        ...Outline.args,
        variant: 'fill',
    },
}