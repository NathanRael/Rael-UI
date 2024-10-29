import {FormControl, FormMessage} from "../../components/form/Form.tsx";
import {AutoComplete, Button, Form, Select, TextInput} from "../../components";
import {DESIGNER_TOOLS} from "../components/SelectInputTest.tsx";
import {
    SelectGroup,
    SelectGroupContainer, SelectGroupTitle, SelectItem,
    SelectLabel,
    SelectTrigger
} from "../../components/ui/selectInput/SelectInput.Default.tsx";
import {ChevronDownIcon, SearchIcon} from "lucide-react";
import {
    AutoCompleteGroup,
    AutoCompleteGroupContainer, AutoCompleteGroupTitle, AutoCompleteItem,
    AutoCompleteTrigger
} from "../../components/ui/autoCompleteInput/AutoComplete.tsx";
type FormFields = {
    name: string,
    phone : string,
    city : string,
}
const FormTest = () => {
    const handleSubmit = (formData: FormFields) => {
        console.log(formData);

    }

    return (
        <Form<FormFields> className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <FormControl name="name" validations={{
                pattern: /^[a-zA-Z]+$/,
            }}
            >
                <p className="text-white">Name</p>
                <TextInput placeholder="Enter your name"/>
                <FormMessage name="name" message="Name must contain blablalba"/>
            </FormControl>
            <FormControl name='phone' validations={{
                pattern: /^[a-z]+$/,
            }}
            >
                <p className="text-white">Phone</p>
                {/*<TextInput placeholder="Enter your phone"/>*/}
                <Select
                    // onChange={(selectedItem) => console.log("Selected Item : ", selectedItem)}
                >
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
                <FormMessage name='phone' message={"Incorrect Select"}/>
            </FormControl>
            <FormControl validations={{
                pattern : /^[a-zA-Z]+$/
            }}  name={'city'}>
                <AutoComplete onChange={(item) => console.log("sItem", item)} variant='outline'>
                    <AutoCompleteTrigger placeholder="Autocomplete a designer tool" leftContent={
                        <SearchIcon size={20} />
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
                <FormMessage name='city' message={"Incorrect Select"}/>
            </FormControl>
            <Button type="submit">Submit</Button>
        </Form>
    )
}

export default FormTest;