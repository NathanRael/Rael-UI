import {ComponentProps} from "react";
import {Meta, StoryObj} from "@storybook/react";
import {Form, FormControl, FormDescription, FormItem, FormLabel} from "./index.ts";
import {TextInput} from "../ui/textInput";

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
       <Form >
           <FormItem>
               <FormLabel>email</FormLabel>
               <FormControl name={'email'}>
                   <TextInput placeholder={'email'} />
               </FormControl>
               <FormDescription>We'll send daily news to the email</FormDescription>
           </FormItem>
       </Form>
    )
}

export default meta;

type Story = StoryObj<StoryProps>;

export const Example: Story = {}
