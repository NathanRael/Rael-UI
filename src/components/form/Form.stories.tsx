import {ComponentProps} from "react";
import {Meta, StoryObj} from "@storybook/react";
import {Form, FormControl, FormDescription, FormItem, FormLabel, FormMessage} from "./index.ts";
import {TextInput} from "../ui/textInput";
import {
    Select,
    SelectGroup,
    SelectGroupContainer,
    SelectGroupTitle,
    SelectItem,
    SelectLabel,
    SelectTrigger
} from "../ui/select";
import {ChevronDown} from "lucide-react";
import {Stack, useForm, ValidationRules} from "@/components";
import {Card, CardDescription, CardSection, CardTitle} from "../ui/card";
import {PasswordInput} from "../ui/passwordInput";
import {Button} from "../ui/button";
import {Checkbox, CheckboxLabel} from "../ui/checkbox";

const countries = ["Madgascar", "Paris", "Tokyo", "London", "Beijing", "Moscow", "Rome", "Berlin", "Vienna", "Madrid", "Stockholm"]

type FormField = {
    email: string,
    password: string,
    confirm: string,
    country: string,
    condition: boolean,
}

const FormExample = () => {
    const validations: ValidationRules<FormField>[] = [
        {
            name: 'email',
            pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            required: true,
            message: 'Please enter a valid email address'
        },
        {
            name: 'password',
            valid: ({password}) => password!.length >= 5,
            required: true,
            message: 'Password must be at least 5 characters',
        },
        {
            name: 'confirm',
            valid: ({confirm, password}) => confirm === password,
            required: true,
            message: "The password doesn't match"
        },
        {
            name: 'country',
            required: true,
        },
        {
            name: 'condition',
            required: true,
            valid: ({condition}) => condition!,
            message: 'We cannot create your account unless you accept the terms and conditions'
        }
    ]

    const form = useForm<FormField>({
        defaultValue: {
            password: '',
            country: 'Madgascar',
            confirm: '',
            email: '',
            condition: false,
        },
        validations
    });

    const {formData} = form;

    const onSubmit = async () => {
        await new Promise<void>((resolve) => {
            setTimeout(() => resolve(), 2000)
        })
        console.log(formData)
    }
    return (
        <Form form={form} onSubmit={onSubmit} className={"flex flex-col gap-4"}>
            <Card variant={'fill'} className={'w-[380px]'}>
                <CardSection rFor={'meta'}>
                    <CardTitle>Let's get started</CardTitle>
                    <CardDescription>Delve into the world of ...</CardDescription>
                </CardSection>
                <CardSection>
                    <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl name={'email'} type={'input'} render={({...fields}) => (
                            <TextInput block {...fields} placeholder={'eg : rael@gmail.com'}/>
                        )}/>
                        <FormDescription>We recommend to use professional email</FormDescription>
                        <FormMessage name={'email'}/>
                    </FormItem>
                    <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl name={'password'} type={'input'} render={({...fields}) => (
                            <PasswordInput block {...fields} placeholder={''}/>
                        )}/>
                        <FormMessage name={'password'}/>
                    </FormItem>
                    <FormItem>
                        <FormLabel>Confirm</FormLabel>
                        <FormControl name={'confirm'} type={'input'} render={({...fields}) => (
                            <PasswordInput block {...fields} placeholder={''}/>
                        )}/>
                        <FormDescription>Confirm your password</FormDescription>
                        <FormMessage name={'confirm'}/>
                    </FormItem>
                    <FormItem>
                        <FormLabel>Country</FormLabel>
                        <FormControl type={'select'} name={'country'} render={({...fields}) => (
                            <Select block {...fields}>
                                <SelectTrigger>
                                    <SelectLabel placeholder={'Select your country'}/>
                                    <ChevronDown/>
                                </SelectTrigger>
                                <SelectGroupContainer>
                                    <SelectGroup>
                                        <SelectGroupTitle>Countries</SelectGroupTitle>
                                        {
                                            countries.map(country => (
                                                <SelectItem key={country} value={country}>{country}</SelectItem>))
                                        }
                                    </SelectGroup>
                                </SelectGroupContainer>
                            </Select>
                        )}/>
                        <FormDescription>This wont be publicly displayed</FormDescription>
                        <FormMessage name={'country'}/>
                    </FormItem>
                    <FormItem>
                        <FormControl name={'condition'} type={'checkbox'} render={({...fields}) => (
                            <Checkbox {...fields}>
                                <CheckboxLabel>I accept terms and conditions</CheckboxLabel>
                            </Checkbox>
                        )}/>
                        <FormMessage name={'condition'}/>
                    </FormItem>
                </CardSection>
                <CardSection>
                    <Stack align={'start'} direction={'horizontal'}>
                        <Button
                            type={'reset'}
                            variant={'secondary'}
                            onClick={form.reset}>
                            Cancel
                        </Button>
                        <Button type={'submit'} loading={form.isSubmitting}>Create account</Button>
                    </Stack>
                </CardSection>
            </Card>
        </Form>
    )
}


type StoryProps = ComponentProps<typeof Form>;
const meta: Meta<StoryProps> = {
    component: Form,
    tags: ['autodocs'],
    render: () => <FormExample/>
}

export default meta;

type Story = StoryObj<StoryProps>;

export const Example: Story = {}
