import React, {PropsWithChildren, useMemo} from "react";
import {FormContext, useFormContext, UseFormReturnType} from "./Form.Context.ts";
import {cn} from "@/utils/cn.ts";
import {formDescriptionVariants, formLabelVariants} from "./Form.variant.ts";
import {useComponentStyle} from "@/components";

export interface Validations {
    required?: boolean | string;
    pattern?: RegExp;
    valid?: (value: unknown) => boolean;
}


type FormProps = Required<PropsWithChildren> & {
    className?: string;
    onSubmit: () => Promise<void>;
    form: UseFormReturnType;
}

type ControlType = 'input' | 'select' | 'checkbox' | 'radio';
type FormChangeEvent = ({target: {name, value}}: {
    target: {
        name: string;
        value?: unknown;
        checked?: boolean;
    }
}) => void;

type ControlProps = {
    input: {
        value: string;
        name: string;
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    };
    select: {
        name: string;
        onChange: FormChangeEvent;
    };
    checkbox: {
        name: string;
        onChange: FormChangeEvent;
        checked: boolean;
    };
    radio: {
        name: string;
        onChange: FormChangeEvent;
        defaultValue: string;
    };
};


type FormControlProps<T extends ControlType> = {
    name: string;
    className?: string;
    errorMessage?: string;
    render: (props: ControlProps[T]) => JSX.Element;
    type: T;
}

type FormMessageProps<T> = {
    className?: string;
    // message?: string;
    name: keyof T;
}

type FormItemProps = Required<PropsWithChildren> & {
    className?: string;
}

type FormDescriptionProps = Required<PropsWithChildren> & {
    className?: string;
}

type FormLabelProps = Required<PropsWithChildren> & {
    className?: string;
}


const Form = ({children, className, onSubmit, form}: FormProps) => {
    return (
        <FormContext.Provider value={{form}}>
            <form className={cn('w-fit', className)} onSubmit={(e) => form.handleSubmit(onSubmit, e)}>
                {children}
            </form>
        </FormContext.Provider>
    )
}

export const FormControl = <T extends ControlType>({name, render, type}: FormControlProps<T>) => {
    const {form} = useFormContext();
    const formData = useMemo(() => form.formData, [form.formData, form.setValue, form.reset]);

    const commonProps = {
        name: name as string,
        onChange: (e: any) => form.handleChange(name as string, type === 'checkbox' ? e.target.checked : e.target.value),
    };

    const props = (() => {
        switch (type) {
            case 'input':
                return { ...commonProps, value: formData[name as string] };
            case 'select':
                return { ...commonProps, defaultValue: formData[name as string] };
            case 'checkbox':
                return { ...commonProps, checked: formData[name as string] };
            case 'radio':
                return { ...commonProps, defaultValue: formData[name as string] };
            default:
                return commonProps;
        }
    })();

    return render(props as ControlProps[T]);
}

export const FormMessage = <T, >({name, className}: FormMessageProps<T>) => {
    const {form} = useFormContext();
    const errors = useMemo(() => form.errors, [form.handleChange, form.errors])

    return errors[name as string] && (
        <p className={cn('text-danger text-[14px]', className)}>{errors[name as string]}</p>
    )
}

export const FormItem = ({className, children}: FormItemProps) => {
    return (
        <div className={cn('flex flex-col items-start justify-start gap-2', className)}>
            {children}
        </div>
    )
}

export const FormLabel = ({className, children}: FormLabelProps) => {
    const {cVariant} = useComponentStyle();
    return (
        <p className={cn(formLabelVariants({variant: cVariant}), className)}>{children}</p>
    )
}

export const FormDescription = ({className, children}: FormDescriptionProps) => {
    const {cVariant} = useComponentStyle();
    return (
        <p className={cn(formDescriptionVariants({variant: cVariant}), className)}>{children}</p>
    )
}


export default Form
