import React, {FormEvent, PropsWithChildren, ReactElement, useEffect, useLayoutEffect, useRef, useState} from "react";
import {FormContext, useFormContext, useForm, FormManagementContext} from "./Form.Context.ts";
import {cn} from "../../utils/cn.ts";

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

const firstRender = true;




const Form = <T extends Record<string, unknown>, >({children, className, onSubmit}: FormProps<T>) => {
    const [formData, setFormData] = useState<T>({} as T);
    const [errors, setErrors] = useState<Record<keyof T, string>>({} as Record<keyof T, string>);
    const [validations, setValidations] = useState<Record<keyof T, Validations>>({} as Record<keyof T, Validations>);
    
    const setFieldValue = (name: string, value: string) => {
        setFormData((prevData) => ({...prevData, [name]: value}));
       
    };
    

    const setErrorData = (name: string, error: string) => {
        setErrors((prevData) => ({...prevData, [name]: error}));
    }
    const registerValidation = (name: string, validation: Validations) => {
        setValidations((prev) => ({...prev, [name]: validation}));
    };

    const validateField = (name: string, value: string) : boolean => {
        const validation = validations[name as keyof T];
        if (!validation) return true;

        console.log("value", value)
        
        if (validation.required && !value) {
            setErrorData(name, "This field is required.");
            return false;
        }
        
        if (validation.pattern && !validation.pattern.test(value)) {
            setErrorData(name, "Invalid format.");
            // console.log(errors[name as keyof T])
            return false;
        }
        if (validation.valid && !validation.valid(value)) {
            setErrorData(name, "Invalid value.");
            return false;
        }
        setErrorData(name, "");
        return true;
    };

    const checkValidation = () => {
        let isValid = true;
        if (!formData)
            return;
        for (const name in formData) {
            const fieldIsValid = validateField(name, formData[name as keyof T] as string);
            if (!fieldIsValid)
                isValid = false;
        }

        if (!isValid)
            return
    }


    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        checkValidation();
        onSubmit(formData);
    };
    

    
    return (
        <FormContext.Provider value={{formData, setFieldValue, setErrorData, errors, registerValidation}}>
            <FormManagementContext.Provider value={{formData, errors}}>
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
        setFieldValue(name as string, value)
        setErrorData(name as string, '');
    }
    
    useLayoutEffect(() => {
        setErrorData(name as string, '');
    }, [])

    useEffect(() => {
        if (validations) {
            registerValidation(name as string, validations);
        }
    }, [name, validations]);
    
    return (
        <div>
            {React.Children.map(children, (child) =>
                React.isValidElement(child)
                    ? React.cloneElement(child as ReactElement<any>, {
                        value: formData[name] || '',
                        onChange: (e: React.ChangeEvent<HTMLInputElement>) => handleChange(e.target.value),
                    })
                    : child
            )}
        </div>
    )
}

export const FormMessage = <T, >({name, message, className}: FormMessageProps<T>) => {
    const {errors} = useFormContext<T>();
    
    return errors[name] !== ""  && ( 
        <p className={cn('text-white', className)}>{message}</p>
    )
}


export default Form
