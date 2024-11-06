import React, {FormEvent, useContext, useLayoutEffect, useState} from "react";


export interface FormContext {
    form : UseFormReturnType; 
}

export interface ValidationRules<T> {
    name?: Partial<keyof T>;
    pattern?: RegExp;
    valid?: (value: Partial<T>) => boolean;
    message?: string;
    required?: boolean;
}

interface FormProps<T> {
    defaultValue?: T,
    validations: ValidationRules<T>[]
}


export const FormContext = React.createContext<FormContext | undefined>(undefined);
export const useFormContext = () => {
    const context = useContext(FormContext);
    if (!context) {
        throw new Error("useFormContext must be used within a FormProvider");
    }
    return context as FormContext
}

export const useForm = <T extends Record<string, any>>({defaultValue, validations}: FormProps<T>) => {
    const [formData, setFormData] = useState<T>(defaultValue || {} as T);
    const [errors, setErrors] = useState<T>({} as T);
    const [isSubmitting, setIsSubmitting] = useState(false);
    
    
    const setValue = <V, >(name: keyof T, value: V) => {
        setFormData(prev => ({...prev, [name]: value}))
    }

    const setError = <V, >(name: keyof T, value: V) => {
        setErrors(prev => ({...prev, [name]: value}))
    }

    const handleChange = <V, >(name: string, value: V) => {
        setValue(name, value);
        const validation = validations?.find(v => v.name === name);
        if (validation)
            setError(name, value === '' && validation.required ? `${name} is required` : '');
    }

    const handleSubmit = async (onSubmit: () => Promise<void>, e: FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true)
        try {
            const valid = validateForm();
            if (!valid)
               return

            await onSubmit();
        } catch (error) {
            console.error("error while submitting : ", error)
        } finally {
            setIsSubmitting(false);
        }
    }

    const validateForm = (): boolean => {
        let isValid = true
        for (const key in formData) {
            const value = formData[key];
            if (!checkValidation(key, value))
                isValid = false;
        }
        return isValid
    }

    const checkValidation = <V>(name: string, value: V): boolean => {
        let isValid = true;
        validations?.forEach(validation => {
            if (validation.name === name) {
                if (validation.required && value === '') {
                    setError(name, `${name} is required`);
                    return isValid = false;
                }
                
                if (value !== ''){
                    if (validation.valid !== undefined && !validation.valid(formData)) {
                        setError(name, validation.message || `${name} is invalid`);
                        return isValid = false;

                    }

                    if (validation.pattern && !validation.pattern.test(value as string)) {
                        setError(name, validation.message || `${name} is invalid`);
                        return isValid = false;
                    }
                }
                

            }
        })
        
        return isValid
    }

    useLayoutEffect(() => {
        for (const name in formData) {
            setError(name, '');
        }
    }, [])


    return {
        handleSubmit,
        handleChange,
        formData,
        errors,
        isSubmitting,
    }
}

export type UseFormReturnType = ReturnType<typeof useForm>;