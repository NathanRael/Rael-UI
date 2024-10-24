import {cn} from "../../../utils/cn.ts";
import {cva} from "class-variance-authority";
import * as React from "react";
import {ChangeEventHandler} from "react";

type SwitchProps = {
    checked?: boolean,
    disabled?: boolean,
    label?: React.ReactNode,
    id?: string,
    onChange?: ChangeEventHandler<HTMLInputElement>,
    className?: string,

    variant?: "fill" | "outline"
}

const Switch = ({
                    checked = false,
                    disabled = false,
                    label = '',
                    id,
                    className,
                    onChange = () => {
                    },
                    variant,
                }: SwitchProps) => {
    const userProps = {checked, disabled, variant};

    return (
        <div className={'flex gap-2 select-none group'}>
            <div className={`inline-flex items-center ${sharedVariants({disabled})}`}>
                <label className="flex items-center relative">
                    <input disabled={disabled} onChange={onChange} type="checkbox" defaultChecked={checked}
                           className={"sr-only peer"}
                           id={id ? id : "check"}/>
                    {/*<SwitchIcon/>*/}
                    <div className={cn(switchVariants(userProps), className)}></div>
                </label>
            </div>
            {label && <label htmlFor="check" className={`text-white ${sharedVariants({disabled})}`}>{label}</label>}
        </div>
    )
}

/*const SwitchIcon = () => {
    return (
        <div
            className={switchVariants}>
        </div>
    )
}*/

const defaultVariants = {
    disabled: true,
    checked: false,
    
}

const switchVariants = cva(`peer h-6 w-11 rounded-full border after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border  after:transition-all after:content-['']  peer-checked:after:translate-x-full  `, {
    variants: {
        variant : {
          outline : '',
          fill : 'bg-gray-700 after:bg-white border-gray-700 after:border-gray-300 peer-checked:bg-white peer-checked:after:bg-primary peer-checked:after:border-white',  
        },
        disabled: {
            true: 'after:bg-black after:border-black  cursor-not-allowed ',
            false: ''
        },
        
        
    },
    defaultVariants: {
        variant : 'fill' ,
        disabled : true,
        }
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
        disabled: defaultVariants.disabled
    }
})


export default Switch