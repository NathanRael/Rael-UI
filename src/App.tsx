import {Button, Form, TextInput} from "./components";
import {FormControl, FormMessage} from "./components/form/Form.tsx";
import {useForm} from "./components/form/Form.Context.ts";

type FormFields = {
    name: string,
    phone : string,
}

function App() {
    
    // const {errors} = useForm<FormFields>();
    const handleSubmit = (formData: FormFields) => {
        console.log(formData);
        
    }
    
    return (
        <section className="p-4 space-y-10">
            <h1 className="text-title font-bold text-white">
                Rael UI
            </h1>
            <Form<FormFields> className="flex flex-col gap-5" onSubmit={handleSubmit}>
                <FormControl name="name" validations={{
                    pattern: /^[a-zA-Z]+$/,
                }}
                >
                    <p className="text-white">Name</p>
                    <TextInput placeholder="Enter your name"/>
                    <FormMessage name="name" message="This field didn't pass the validation"/>
                </FormControl>
                <FormControl name='phone' validations={{
                    pattern: /^[a-z]+$/,
                }}
                >
                    <p className="text-white">Phone</p>
                    <TextInput placeholder="Enter your phone"/>
                    <FormMessage name='phone' message={"This field didn't pass the validation"}/>
                </FormControl>
                <Button type="submit">Submit</Button>
            </Form>
        </section>
    )
}

export default App
