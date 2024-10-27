import React, {useContext} from "react";
import {Validations} from "./Form.tsx";


interface FormContext<T> {
    formData: T;
    setFieldValue: (name: string, value: string) => void;
    errors: Record<keyof T, string>;
    setErrorData: (name: string, error: string) => void;
    registerValidation: (name: string, validation: Validations) => void;
}

interface FormManagementContext<T> {
    errors: FormContext<T>['errors'];
    formData: FormContext<T>['formData'];
}

export interface Errors {
    message?: string;
    required?: boolean;
    valid?: boolean;
}

export const FormContext = React.createContext<FormContext<any> | undefined>(undefined);
export const FormManagementContext = React.createContext<FormManagementContext<any> | undefined>(undefined);
export const useFormContext = <T>() => {
    const context = useContext(FormContext);
    if (!context) {
        throw new Error("useFormContext must be used within a FormProvider");
    }
    return context as FormContext<T>
}

export const useForm = <T>() => {
    const context = useContext(FormManagementContext)
    return context as FormManagementContext<T>;
}

/*
export const useForm = <T >({initialValues} : UseFormOption<T>) => {
    const [formData, setFormData] = useState<T>(initialValues || {} as T);
    const [errors, setErrors] = useState<Record<keyof T, string>>({} as Record<keyof  T, string>);

    const setFieldValue = (name: string, value: string) => {
        setFormData((prevData) => ({...prevData, [name]: value}));
    };
    
    const setErrorData = (name : string, error : string) => {
        setErrors((prevData) => ({...prevData, [name] : error}));
        
    }
     
    return {
        setFieldValue,
        formData,
        errors,
        setErrorData
    }
}

*/

