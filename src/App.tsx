import {
    Button,
    Checkbox, Form, FormControl, FormItem, FormLabel, FormMessage,
    RadioGroup,
    RadioItem,
    Select, SelectGroup,
    SelectGroupContainer, SelectGroupTitle, SelectItem,
    SelectLabel,
    SelectTrigger,
    TextInput
} from "./components"
import {ChevronDown} from "lucide-react";
import {useForm, ValidationRules} from "./components/form/Form.Context.ts";

type FormDataType = {
    name: string;
    terms: boolean;
    genre: string;
    hobby: string;
}

function App() {
    const validations: ValidationRules<FormDataType>[] = [
        {
            name: 'name',
            required: true,
            valid: ({name}) => name!.trim().length > 5,
            message: 'Name must be at least 5 characters'
        },
        {
            name: 'terms',
            required: true,
            valid: ({terms}) => terms!,
            message: 'This has to be checked '
        },
        {
            name: 'genre',
            required: true,
        },
        {
            name: 'hobby',
            required: true,
            message: 'Please select hobby'
        }
    ]

    const form = useForm<FormDataType>({
        defaultValue: {
            name: 'admi',
            terms: false,
            genre: 'm',
            hobby: '',
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
        <section className="p-4 space-y-10">
            <h1 className="text-title font-bold text-white">
                Rael UI
            </h1>
            <Form form={form} onSubmit={onSubmit} className={"flex flex-col gap-4"}>
                <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl type={'input'} name={'name'} render={({...fields}) => (
                        <TextInput {...fields}
                                   placeholder="Name"
                        />
                    )}/>
                   
                    <FormMessage name={'name'}/>
                </FormItem>
                <FormItem>
                    <FormLabel>Hobby</FormLabel>
                    <FormControl type={'select'} name={'hobby'} render={({...fields}) => (
                        <Select  {...fields}>
                            <SelectTrigger>
                                <SelectLabel placeholder={'What to do ?'}/>
                                <ChevronDown/>
                            </SelectTrigger>
                            <SelectGroupContainer>
                                <SelectGroup>
                                    <SelectGroupTitle>Holidays activities</SelectGroupTitle>
                                    <SelectItem value={'learn'}>Learn</SelectItem>
                                    <SelectItem value={'sleep'}>Sleep</SelectItem>
                                    <SelectItem value={'Sport'}>Sport</SelectItem>
                                </SelectGroup>
                            </SelectGroupContainer>
                        </Select>
                    )}/>
                    <FormMessage name={'hobby'}/>
                </FormItem>
                <FormItem>
                    <FormControl type={'radio'} name={'genre'} render={({...fields}) => (
                        <RadioGroup {...fields}
                        >
                            <RadioItem value={'m'} label="Male"/>
                            <RadioItem value={'f'} label="Female"/>
                            <RadioItem value={'o'} label="Other"/>
                        </RadioGroup>
                    )}/>
                </FormItem>
                <FormItem>
                    <FormControl type={'checkbox'} name={'terms'} render={({...fields}) => (
                        <Checkbox {...fields}
                                  label={'I agree to terms and conditons'}
                        />
                    )}/>
                    <FormMessage name={'terms'}/>
                </FormItem>
                <Button>Submit</Button></Form>
        </section>
    )
}

export default App
