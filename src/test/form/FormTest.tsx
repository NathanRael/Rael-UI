/*
import {
    FormControl, FormMessage,
    AutoComplete, Button, Form, Select, SelectGroup,
    SelectGroupContainer, SelectGroupTitle, SelectItem,
    SelectLabel,
    SelectTrigger, TextInput,
    AutoCompleteGroup,
    AutoCompleteGroupContainer, AutoCompleteGroupTitle, AutoCompleteItem,
    AutoCompleteTrigger, Checkbox, FormProvider, FormItem, FormLabel, FormDescription
} from "../../components";
import {DESIGNER_TOOLS} from "../components/SelectInputTest.tsx";
import {ChevronDownIcon, SearchIcon} from "lucide-react";

type FormFields = {
    name: string,
    phone: string,
    city: string,
    condition: boolean,
}
const FormTest = () => {
    const handleSubmit = async (formData: FormFields) => {
        await new Promise<void>((resolve) => {
            setTimeout(() => resolve(), 3000)
        })
        console.log(formData);
    }

    return (
        <Form<FormFields> className="flex flex-col gap-5" onSubmit={handleSubmit} >

            <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl<FormFields> name="name" validations={{
                    valid : (value) => (value as string).length >= 5
                }}
                >
                    <TextInput placeholder="Enter your name"/>
                </FormControl>
                <FormDescription>Enter name that match to your identities</FormDescription>
                <FormMessage name={'name'} message={'Invalid Name'} />
            </FormItem>
            <FormItem>
                <FormLabel>Phone</FormLabel>
                <FormControl name='phone' validations={{
                    pattern: /^[a-z]+$/,
                }}
                >
                    <Select>
                        <SelectTrigger>
                            <SelectLabel placeholder={"Select a designer tool"}/>
                            <ChevronDownIcon/>
                        </SelectTrigger>
                        <SelectGroupContainer>
                            {
                                DESIGNER_TOOLS.map(({title, values}) => (
                                    <SelectGroup key={title}>
                                        <SelectGroupTitle>{title}</SelectGroupTitle>
                                        {
                                            values.map(v => (
                                                <SelectItem key={title + '-' + v.name}
                                                            value={v.name}>{v.content}</SelectItem>
                                            ))
                                        }
                                    </SelectGroup>
                                ))
                            }
                        </SelectGroupContainer>
                    </Select>
                </FormControl>
                <FormMessage name='phone' message={"Incorrect Select"}/>
            </FormItem>
            <FormItem>
                <FormLabel>Phone</FormLabel>
                <FormControl name={'city'}>
                    <AutoComplete variant='outline'>
                        <AutoCompleteTrigger placeholder="Autocomplete a designer tool" leftContent={
                            <SearchIcon size={20}/>
                        }/>
                        <AutoCompleteGroupContainer>
                            {
                                DESIGNER_TOOLS.map(({title, values}) => (
                                    <AutoCompleteGroup key={title}>
                                        <AutoCompleteGroupTitle>{title}</AutoCompleteGroupTitle>
                                        {
                                            values.map(v => (
                                                <AutoCompleteItem key={title + '-' + v.name}
                                                                  value={v.name}>{v.content}</AutoCompleteItem>
                                            ))
                                        }
                                    </AutoCompleteGroup>
                                ))
                            }
                        </AutoCompleteGroupContainer>
                    </AutoComplete>
                </FormControl>
                <FormMessage name='city' message={"Incorrect Select"}/>
            </FormItem>

            <FormControl name={"condition"}>
                <Checkbox label={"I accept the term and condition"}/>
                <FormMessage name={"condition"} message={"Must be checked"}/>
            </FormControl>
            <FormProvider<FormFields> render={({isSubmitting}) => (
                <Button type="submit" loading={isSubmitting} >Submit</Button>
            )}/>
        </Form>
    )
}

export default FormTest;*/
