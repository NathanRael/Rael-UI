import React, {PropsWithChildren, ReactElement, useEffect, useLayoutEffect, useMemo, useRef} from "react";
import {
    FormContext,
    useFormContext,
    FormManagementContext,
    useFormLogic,
    ComponentType
} from "./Form.Context.ts";
import {cn} from "../../utils/cn.ts";
import {Select} from "../ui/selectInput";
import {TextInput} from "../ui/textInput";
import {PasswordInput} from "../ui/passwordInput";
import {AutoComplete} from "../ui/autoCompleteInput";

export interface Validations {
    required?: boolean | string;
    pattern?: RegExp;
    valid?: (value: unknown) => boolean;
}

type FormProps<T> = Required<PropsWithChildren> & {
    className?: string;
    onSubmit: (formData: T) => void;
}

type FormControlProps<T> = Required<PropsWithChildren> & {
    name: keyof T;
    className?: string;
    validations?: Validations;
    errorMessage?: string;
}

type FormMessageProps<T> = {
    className?: string;
    message?: string;
    name: keyof T;
}

type Child =
    string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | Iterable<React.ReactNode>
    | React.ReactPortal
    | null
    | undefined

type FormData<T> = FormContext<T>['formData']

type InputCloneProps <T> = {
    child : Child;
    formData : FormData<T>;
    name : keyof T;
    handleChange : (value : string) => void;
}

type SelectCloneProps <T> = {
    child : Child;
    handleChange : (value : string) => void;
    name : keyof T;
}


const Form = <T extends Record<string, unknown>, >({children, className, onSubmit}: FormProps<T>) => {
    const {formData, setFieldValue, setErrorData, errors, registerValidation, handleSubmit, submitting, setComponentType} = useFormLogic({
        onSubmit
    })

    return (
        <FormContext.Provider
            value={{formData, setFieldValue, setErrorData, errors, registerValidation, submitting, setComponentType}}>
            <FormManagementContext.Provider value={{errors, formData, submitting}}>
                <form className={cn('', className)} onSubmit={handleSubmit}>
                    {children}
                </form>
            </FormManagementContext.Provider>
        </FormContext.Provider>
    )
}

export const FormControl = <T, >({children, validations, name}: FormControlProps<T>) => {
    const {formData, setFieldValue, setErrorData, registerValidation} = useFormContext<T>();
    const ref = useRef<HTMLElement>(null);


    const handleChange = (value: string) => {
        // console.log('change : ', value)
        setFieldValue(name as string, value)
        setErrorData(name as string, value === "" ? `${name as string} is required` : '');
    }

    useLayoutEffect(() => {
        setFieldValue(name as string, '');
        setErrorData(name as string, '');
    }, [])

    useEffect(() => {
        if (validations) {
            registerValidation(name as string, validations);
        }
    }, [name, validations]);


    return (
        <div>
            {React.Children.map(children, (child) => {
                    if (React.isValidElement(child)) {
                        if (child.type === Select) {
                            return <SelectClone child={child} name={name} handleChange={handleChange}/>
                        }
                        
                        if (child.type === AutoComplete){
                            return <AutoCompleteClone child={child} name={name} handleChange={handleChange}/>
                        }
                        
                        if (child.type === TextInput || child.type === PasswordInput) {
                            return <InputClone name={name} child={child} formData={formData} handleChange={handleChange}/>
                        }
                        
                    }
                    
                    return child
                }
            )}
        </div>
    )
}

export const FormMessage = <T, >({name, message, className}: FormMessageProps<T>) => {
    const {errors} = useFormContext<T>();

    
    return errors[name] !== "" && (
        <p className={cn('text-danger', className)}>{message}</p>
    )
}

const InputClone = <T,>({child, name, handleChange} : InputCloneProps<T>) => {
    const {formData, setComponentType} = useFormContext<T>();
    useMemo(() => {
        setComponentType(name as string,ComponentType.INPUT);
    }, [name])
    
    return React.cloneElement(child as ReactElement<any>, {
        value: formData[name] || '',
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => handleChange(e.target.value),
    })
}

const AutoCompleteClone = <T,>({ child, handleChange, name} : SelectCloneProps<T>) => {
    const {setComponentType} = useFormContext<T>();
    useMemo(() => {
        setComponentType(name as string,ComponentType.AUTO_COMPLETE);
    }, [name])

    return React.cloneElement(child as ReactElement<any>, {
        onChange: (selectedItem : string) => handleChange(selectedItem),
    })
}

const SelectClone = <T,>({ child, handleChange, name} : SelectCloneProps<T>) => {
    const {setComponentType} = useFormContext<T>();
    
    useMemo(() => {
        setComponentType(name as string, ComponentType.SELECT)
    }, [name])
    
    return React.cloneElement(child as ReactElement<any>, {
        onChange: (selectedItem : string) => handleChange(selectedItem),
    })
}


export default Form
