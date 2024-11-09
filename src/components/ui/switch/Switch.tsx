import {cn} from "@/utils/cn.ts";
import {ChangeEventHandler, PropsWithChildren, useMemo} from "react";
import {sharedVariants, switchVariants} from "./Switch.variants.ts";
import {useComponentStyle} from "@/components";
import SwitchContext, {useSwitchContext} from "@/components/ui/switch/Switch.context.ts";
import {Variant} from "@/components/global.types.ts";

type SwitchProps = PropsWithChildren & {
    checked?: boolean,
    disabled?: boolean,
    id?: string,
    onChange?: ChangeEventHandler<HTMLInputElement>,
    className?: string,

    variant?: Variant,
}

type SwitchLabelProps = Required<PropsWithChildren> & {
    checkboxId?: string;
    disabled?: boolean;
    className?: string;
}

const Switch = ({
                    children,
                    checked = false,
                    disabled = false,
                    id,
                    className,
                    onChange = () => {
                    },
                    variant,
                }: SwitchProps) => {
    const {cVariant} = useComponentStyle();
    const userProps = {checked, disabled, variant: variant || cVariant};
    const switchId = useMemo(() => id || `checkbox-${Math.random().toString(36).slice(2, 9)}`, [id]);


    return (
        <SwitchContext.Provider value={{switchId, disabled : disabled}}>
            <div className={'flex gap-2 select-none group'}>
                <div className={`inline-flex items-center ${sharedVariants({disabled})}`}>
                    <label className="flex items-center relative">
                        <input disabled={disabled} onChange={onChange} type="checkbox" defaultChecked={checked}
                               className={"sr-only peer"}
                               id={switchId}/>
                        {/*<SwitchIcon/>*/}
                        <div className={cn(switchVariants(userProps), className)}></div>
                    </label>
                </div>
                {children}
            </div>
        </SwitchContext.Provider>

    )
}

export const SwitchLabel = ({children, className}: SwitchLabelProps) => {
    const {switchId, disabled} = useSwitchContext();
    return (
        <label htmlFor={switchId}
               className={cn(`text-base text-black dark:text-white ${sharedVariants({disabled})}`, className)}>{children}</label>
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