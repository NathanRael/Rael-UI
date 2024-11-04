import React, {PropsWithChildren, ReactElement, useEffect, useLayoutEffect, useMemo} from "react";
import {ComponentType, FormContext, useFormContext, useFormLogic} from "./Form.Context.ts";
import {cn} from "../../utils/cn.ts";
import {Select} from "../ui/select";
import {TextInput} from "../ui/textInput";
import {PasswordInput} from "../ui/passwordInput";
import {AutoComplete} from "../ui/autoComplete";
import {Checkbox} from "../ui/checkbox";
import {formDescriptionVariants, formLabelVariants} from "./Form.variant.ts";
import {useComponentStyle} from "../ui/ComponentStyle.Context.ts";

export interface Validations {
    required?: boolean | string;
    pattern?: RegExp;
    valid?: (value : unknown) => boolean;
}


type FormProps<T> = Required<PropsWithChildren> & {
    className?: string;
    onSubmit: (formData: T) => Promise<void>;
}


type  FormProviderProps<T>  = {
    render: (props: { isSubmitting: boolean, errors : Record<keyof T, string> , formData : T}) => React.ReactNode;
}

type FormControlProps<T> = Required<PropsWithChildren> & {
    name: keyof T;
    className?: string;
    validations?: Validations;
    errorMessage?: string;
}

type FormMessageProps<T> = {
    className?: string;
    message: string;
    name: keyof T;
}

type FormItemProps = Required<PropsWithChildren> & {
    className?: string;
}

type FormDescriptionProps= Required<PropsWithChildren> & {
    className?: string;
}

type FormLabelProps = Required<PropsWithChildren> & {
    className?: string;
}

/*type Child =
    string
    | number
    | boolean
    | React.ReactElement<unknown, string | React.JSXElementConstructor<unknown>>
    | Iterable<React.ReactNode>
    | React.ReactPortal
    | null
    | undefined*/

type Child = any

type FormData<T> = FormContext<T>['formData'];
type ComponentCloneChangeEvent = <V>(value: V) => void;

type InputCloneProps<T> = {
    child: Child;
    formData: FormData<T>;
    name: keyof T;
    handleChange: ComponentCloneChangeEvent;
}

type SelectCloneProps<T> = {
    child: Child;
    handleChange: ComponentCloneChangeEvent;
    name: keyof T;
}

type CheckboxCloneProps<T> = {
    child: Child;
    handleChange: ComponentCloneChangeEvent;
    name: keyof T;
}


const Form = <T extends Record<string, unknown>, >({children, className, onSubmit}: FormProps<T>) => {
    const {
        formData,
        setFieldValue,
        setErrorData,
        errors,
        registerValidation,
        handleSubmit,
        submitting,
        setComponentType
    } = useFormLogic({
        onSubmit
    })

    return (
        <FormContext.Provider
            value={{formData, setFieldValue, setErrorData, errors, registerValidation, submitting, setComponentType}}>
                <form className={cn('w-fit', className)} onSubmit={handleSubmit}>
                    {children}
                </form>
        </FormContext.Provider>
    )
}

export const FormControl = <T,>({children, validations, name}: FormControlProps<T>) => {
    const {formData, setFieldValue, setErrorData, registerValidation} = useFormContext<T>();


    const handleChange = <V, >(value: V) => {
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
            // console.log("register validation", validations.valid && validations?.valid())
        }
    }, [name, validations]);

    const defaultClonedComponentProps = {
        name: name,
        handleChange: handleChange
    }

    return (
        <>
            {React.Children.map(children, (child) => {
                    if (React.isValidElement(child)) {
                        if (child.type === Select) {
                            return <SelectClone child={child} {...defaultClonedComponentProps}/>
                        }

                        if (child.type === AutoComplete) {
                            return <AutoCompleteClone child={child} {...defaultClonedComponentProps}/>
                        }

                        if (child.type === TextInput || child.type === PasswordInput) {
                            return <InputClone child={child} formData={formData} {...defaultClonedComponentProps}/>
                        }

                        if (child.type === Checkbox)
                            return <CheckboxClone child={child} {...defaultClonedComponentProps}/>

                    }
                    return child
                }
            )}
        </>
    )
}

export const FormMessage = <T, >({name, message, className}: FormMessageProps<T>) => {
    const {errors} = useFormContext<T>();


    return errors[name] !== "" && (
        <p className={cn('text-danger text-[14px]', className)}>{message}</p>
    )
}

export const FormItem = ({className, children} : FormItemProps) => {
    return (
        <div className={cn('flex flex-col items-start justify-start gap-2', className)}>
            {children}
        </div>
    )
}

export const FormLabel = ({className, children}: FormLabelProps) => {
    const {cVariant} = useComponentStyle();
    return (
        <p className={cn(formLabelVariants({variant : cVariant}), className)}>{children}</p>
    )
}

export const FormDescription = ({className, children}: FormDescriptionProps) => {
    const {cVariant} = useComponentStyle();
    return (
        <p className={cn(formDescriptionVariants({variant: cVariant}), className)}>{children}</p>
    )
}

export const FormProvider = <T, >({render} : FormProviderProps<T>) => {
    const {submitting, errors, formData} = useFormContext<T>();
    return <>
        {
            render({isSubmitting : submitting, errors, formData})
        }
    </>
}

const InputClone = <T, >({child, name, handleChange}: InputCloneProps<T>) => {
    const {formData, setComponentType} = useFormContext<T>();
    useMemo(() => {
        setComponentType(name as string, ComponentType.INPUT);
    }, [name])

    return React.cloneElement(child as ReactElement, {
        value: formData[name] || '',
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
            handleChange(e.target.value);
            if (child.props.onChange)
                child.props.onChange(e.target.value)
        },
    })
}

const AutoCompleteClone = <T, >({child, handleChange, name}: SelectCloneProps<T>) => {
    const {setComponentType} = useFormContext<T>();
    useMemo(() => {
        setComponentType(name as string, ComponentType.AUTO_COMPLETE);
    }, [name])

    return React.cloneElement(child as ReactElement, {
        onChange: (selectedItem: string) => {
            handleChange(selectedItem)
            if (child.props.onChange) {
                child.props.onChange(selectedItem);
            }
        },
    })
}

const SelectClone = <T, >({child, handleChange, name}: SelectCloneProps<T>) => {
    const {setComponentType} = useFormContext<T>();

    useMemo(() => {
        setComponentType(name as string, ComponentType.SELECT)
    }, [name])

    return React.cloneElement(child as ReactElement, {
        onChange: (selectedItem: string) => {
            handleChange(selectedItem);
            if (child.props.onChange) {
                child.props.onChange(selectedItem);
            }
        },
    })
}

const CheckboxClone = <T, >({handleChange, name, child}: CheckboxCloneProps<T>) => {
    const {setComponentType} = useFormContext<T>();

    useMemo(() => {
        setComponentType(name as string, ComponentType.CHECKBOX);
    }, [name])

    return React.cloneElement(child as ReactElement, {
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
            if (child.props.onChange) {
                child.props.onChange(e);
            }
            handleChange(e.target.checked)
        },
    })
}


export default Form
