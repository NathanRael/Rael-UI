import {ChangeEventHandler,} from "react";
import * as React from "react";
import {cva} from "class-variance-authority";
import {cn} from "../../../utils/cn.ts";

type CheckboxProps = {
    checked?: boolean,
    disabled?: boolean,
    label?: React.ReactNode,
    id?: string,
    onChange?: ChangeEventHandler<HTMLInputElement>,
    className?: string,
}
const Checkbox = ({
                      checked = false,
                      disabled = false,
                      label = '',
                      id,
                      className,
                      onChange = () => {
                      },
                  }: CheckboxProps) => {
    const userProps = {checked, disabled};

    return (
        <div className={'flex gap-2 select-none group'}>
            <div className={`inline-flex items-center ${sharedVariants({disabled})}`}>
                <label className="flex items-center relative">
                    <input disabled={disabled} onChange={onChange} type="checkbox" defaultChecked={checked}
                           className={cn(checkboxVariants(userProps), className)}
                           id={id ? id : "check"}/>
                    <CheckBoxIcon/>
                </label>
            </div>
            {label && <label htmlFor="check" className={`text-white ${sharedVariants({disabled})}`}>{label}</label>}
        </div>
    )
}

const CheckBoxIcon = () => {
    return (
        <span
            className="absolute text-white  opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20"
                           fill="currentColor"
                           stroke="currentColor" strokeWidth="1">
                        <path fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"></path>
                      </svg>
        </span>
    )
}

const defaultVariants = {
    disabled: false,
    checked: false,
}

const checkboxVariants = cva('peer size-4  transition-all appearance-none border rounded shadow  hover:shadow-md ', {
    variants: {
        disabled: {
            true: 'disabled:bg-gray-600 disabled:border-gray-600',
            false: ''
        },
        checked: {
            true: 'checked:bg-primary checked:border-primary',
            false: 'border-white',
        }
    },
    defaultVariants: {...defaultVariants}
})

const sharedVariants = cva(' ', {
    variants: {
        disabled: {
            true: 'cursor-not-allowed',
            false: 'cursor-pointer'
            ,
        }
    },
    defaultVariants: {
        disabled : defaultVariants.disabled
    }
})


export default Checkbox