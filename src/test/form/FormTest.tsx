import {FormControl, FormMessage} from "../../components/form/Form.tsx";
import {Button, Form, PasswordInput, Select, TextInput} from "../../components";
import SelectInputTest, {DESIGNER_TOOLS} from "../components/SelectInputTest.tsx";
import {
    SelectGroup,
    SelectGroupContainer, SelectGroupTitle, SelectItem,
    SelectLabel,
    SelectTrigger
} from "../../components/ui/selectInput/SelectInput.Default.tsx";
import {ChevronDownIcon} from "lucide-react";
type FormFields = {
    name: string,
    phone : string,
}
const FormTest = () => {
    const handleSubmit = (formData: FormFields) => {
        console.log(formData);

    }

    return (
        <Form<FormFields> className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <p className="text-white">Name</p>
            
            <FormControl name="name" validations={{
                pattern: /^[a-zA-Z]+$/,
            }}
            >
                <TextInput placeholder="Enter your name"/>
            </FormControl>
            <FormMessage name="name" message="Name must contain blablalba"/>
            
            <p className="text-white">Phone</p>
            <FormControl name='phone' validations={{
                pattern: /^[a-z]+$/,
            }}
            >
                {/*<TextInput placeholder="Enter your phone"/>*/}
                <Select
                    onSelect={(selectedItem) => console.log("Selected Item : ", selectedItem)}
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
            </FormControl>
            <FormMessage name='phone' message={"Incorrect Select"}/>
            <Button type="submit">Submit</Button>
        </Form>
    )
}

export default FormTest;