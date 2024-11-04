import {ComponentProps} from "react";
import {Meta, StoryObj} from "@storybook/react";
import {AtSign, ChevronDownIcon, LocateIcon} from "lucide-react";
import {Card, CardDescription, CardSection, CardTitle} from "../ui/card";
import {FormDescription, FormItem, FormLabel, Form, FormControl, FormMessage, FormProvider} from "./index.ts";
import {TextInput} from "../ui/textInput";
import {Button} from "../ui/button";
import {
    Select,
    SelectGroup,
    SelectGroupContainer,
    SelectGroupTitle,
    SelectItem,
    SelectLabel,
    SelectTrigger
} from '../ui/select/index.ts';
import {Checkbox} from "../ui/checkbox";
import {PasswordInput} from "../ui/passwordInput";

const countries = ["Madgascar", "Paris", "Tokyo", "London", "Beijing", "Moscow", "Rome", "Berlin", "Vienna", "Madrid", "Stockholm"]

type FormField = {
    email: string,
    password: string,
    confirm : string,
    country : string,
    condition : boolean,
}

type StoryProps = ComponentProps<typeof Form>;
const meta: Meta<StoryProps> = {
    component: Form,
    tags: ['autodocs'],
    render: args => (
        <Form onSubmit={() => {
        }} {...args}>
            <Card className={'w-[420px]'} variant={'fill'}>
                <CardSection rFor={'meta'}>
                    <CardTitle>Let's get started</CardTitle>
                    <CardDescription>Delve into the world of ...</CardDescription>
                </CardSection>
                <CardSection>
                    <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl name={'email'} validations={{
                            pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
                        }}>
                            <TextInput block placeholder={'rael@gmail.com'} leftContent={<AtSign size={16}/>}/>
                        </FormControl>
                        <FormDescription>At the your fist login, we will send you a validation code</FormDescription>
                        <FormMessage name={"email"} message={"Invalid email"}/>
                    </FormItem>
                    <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl name={'password'} validations={{
                            pattern: /^[a-zA-Z0-9!@#$%^&*()_+-={}[\]:;<>|`~]{8,}$/
                        }}>
                            <PasswordInput block placeholder={'Enter a strong password'} leftContent={<AtSign size={16}/>}/>
                        </FormControl>
                        <FormMessage name={"password"} message={"Password must be at least 8 characters long and contain only letters, numbers, and special\n" +
                            "characters"}/>
                    </FormItem>
                        <FormItem>
                            <FormLabel>Confirm</FormLabel>
                            <FormControl name={'confirm'} validations={{
                                valid : () => true,
                            }}>
                                <PasswordInput block placeholder={'confirm your password'} leftContent={<AtSign size={16}/>}/>
                            </FormControl>
                            <FormMessage name={"confirm"} message={"Password doesn't match"}/>
                        </FormItem>

                </CardSection>
                <CardSection>
                    <FormItem>
                        <FormLabel>Country</FormLabel>
                        <FormControl name='city' validations={{
                            valid: (selectedItem) => countries.some(country => country.toLowerCase() === (selectedItem as string).toLowerCase())
                        }}
                        >
                            <Select block>
                                <SelectTrigger>
                                    <div className={'flex gap-1'}>
                                        <LocateIcon/>
                                        <SelectLabel placeholder={"Choose your country"}/>
                                    </div>
                                    <ChevronDownIcon/>
                                </SelectTrigger>
                                <SelectGroupContainer>
                                    <SelectGroup>
                                        <SelectGroupTitle>Countries</SelectGroupTitle>
                                        {
                                            countries.map(country => (
                                                <SelectItem key={country} value={country}>{country}</SelectItem>
                                            ))
                                        }
                                    </SelectGroup>
                                </SelectGroupContainer>
                            </Select>
                        </FormControl>
                        <FormMessage name='city' message={"Please, select a country"}/>
                    </FormItem>
                    <FormItem>
                        <FormControl name={'condition'}>
                            <Checkbox label={"I accept the terms and conditions"}/>
                        </FormControl>
                        <FormMessage name={"condition"}
                                     message={"We cannot create your account if you don't agree with our terms and conditions"}/>
                    </FormItem>
                </CardSection>
                <CardSection rFor={'meta'}>
                    <FormProvider render={({isSubmitting}) => (
                        <Button type="submit" loading={isSubmitting}>Create acount</Button>
                    )}/>
                </CardSection>
            </Card>
        </Form>
    )
}

export default meta;

type Story = StoryObj<StoryProps>;

export const Example: Story = {}
