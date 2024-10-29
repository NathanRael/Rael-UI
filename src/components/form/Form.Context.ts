import React, {FormEvent, useCallback, useContext, useRef, useState} from "react";
import {Validations} from "./Form.tsx";


export interface FormContext<T> {
    formData: T;
    setFieldValue: (name: string, value: string) => void;
    errors: Record<keyof T, string>;
    setErrorData: (name: string, error: string) => void;
    registerValidation: (name: string, validation: Validations) => void;
    submitting: boolean;
    setComponentType :  (name : string, componentType : ComponentType) => void;
}

interface FormManagementContext<T> {
    errors: FormContext<T>['errors'];
    formData: FormContext<T>['formData'];
    submitting: FormContext<T>['submitting'];
}

export interface Errors {
    message?: string;
    required?: boolean;
    valid?: boolean;
}

interface useFormLogicProps<T> {
    onSubmit: (formData: T) => void;
}

export enum ComponentType {
    INPUT = "input",
    SELECT = "select",
    AUTO_COMPLETE = "autoComplete",
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


export const useFormLogic = <T extends Record<keyof string, unknown>>({
                                    onSubmit
                                }: useFormLogicProps<T>) => {
    const [formData, setFormData] = useState<T>({} as T);
    const [errors, setErrors] = useState<Record<keyof T, string>>({} as Record<keyof T, string>);
    const [validations, setValidations] = useState<Record<keyof T, Validations>>({} as Record<keyof T, Validations>);
    const componentTypeRef  = useRef<Record<keyof T, ComponentType>>({} as Record<keyof T, ComponentType>);
    const [submitting, setSubmitting] = useState(false);

    const setFieldValue = useCallback((name: string, value: string) => {
        setFormData((prevData) => ({...prevData, [name]: value}));
    }, []);

    const setErrorData = useCallback((name: string, error: string) => {
        setErrors((prevData) => ({...prevData, [name]: error}));
    }, [])
    const registerValidation = useCallback((name: string, validation: Validations) => {
        setValidations((prev) => ({...prev, [name]: validation}));
    }, []);
    
    const setComponentType = useCallback((name : string, componentType : ComponentType) => {
        componentTypeRef.current = {...componentTypeRef.current, [name] : componentType};
    }, [])

    const validateField = (name: string, value: string, componentType: ComponentType): boolean => {
        switch (componentType) {
            case ComponentType.INPUT:
                return validateInput(name, value);
            case ComponentType.SELECT:
                return validateSelect(name, value);
            case ComponentType.AUTO_COMPLETE :
                return validateInput(name, value);
        }
    };

    const validateInput = (name: string, value: string) :boolean => {
        const validation = validations[name as keyof T];
        
        if (value === ''){
            setErrorData(name, `${name} is required`);
            return false;
        }

        if (!validation) return true;
        
            
        if (validation.required && !value) {
            setErrorData(name, `${name} is required`);
            return false;
        }

        if (validation.pattern && !validation.pattern.test(value)) {
            setErrorData(name, `${name} field is invalid !`);
            return false;
        }
        if (validation.valid && !validation.valid(value)) {
            setErrorData(name, `${name} field is invalid !`);
            return false;
        }
        setErrorData(name, "");
        
        return true;
    }
    

    const validateSelect = (name: string, value: string) : boolean => {
        if (value === ''){
            setErrorData(name, `${name} field is invalid`)
            return false;
        }
        return true;
    }
    

    const checkValidation = (): boolean => {
        let isValid = true;
        
        for (const name in formData) {
            const fieldIsValid = validateField(name, formData[name as keyof T] as string, componentTypeRef.current[name]);
            if (!fieldIsValid)
                isValid = false;
        }
        return isValid;
    }


    const handleSubmit = async (event: FormEvent) => {
        setSubmitting(true);
        event.preventDefault();
        const valid = checkValidation();
        if (!valid)
            return console.log("Check your field" +
                "")
        onSubmit(formData);
        setSubmitting(false);
    };

    return {
        formData, setFieldValue, setErrorData, errors, registerValidation, handleSubmit, submitting, setComponentType
    }
}



