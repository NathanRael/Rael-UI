import {cn} from "../../../utils/cn.ts";
import * as React from "react";
import {ChangeEventHandler} from "react";
import {sharedVariants, switchVariants} from "./Switch.Variants.ts";

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



export default Switch