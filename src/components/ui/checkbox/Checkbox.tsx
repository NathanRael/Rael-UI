import {cn} from "@/utils/cn.ts";
import {checkboxIconVariants, checkboxVariants, sharedVariants} from "./Checkbox.variants.ts";
import {ChangeEventHandler, PropsWithChildren, useMemo} from "react";
import CheckboxContext, {useCheckboxContext} from "@/components/ui/checkbox/Checkbox.context.ts";
import {Radius, Size, Variant} from "@/components/global.types.ts";

type CheckboxProps = PropsWithChildren & {
    checked?: boolean;
    disabled?: boolean;
    id?: string;
    name?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    className?: string;
    radius?: Radius;
    variant?: Variant;
    size?: Exclude<Size, 'lg'>;

}

type CheckboxLabelProps = Required<PropsWithChildren> & {
    checkboxId?: string;
    disabled?: boolean;
    className?: string;
}
const Checkbox = ({
                      children,
                      checked = false,
                      disabled = false,
                      id,
                      name,
                      className,
                      onChange = () => {
                      },
                      radius,
                      size,
                      variant,
                  }: CheckboxProps) => {
    const userProps = {disabled, radius, variant, size};
    const checkboxId = useMemo(() => id || `checkbox-${Math.random().toString(36).slice(2, 9)}`, [id]);
    return (
        <CheckboxContext.Provider value={{checkboxId, disabled : disabled}}>
            <div className={'flex gap-2 select-none group'}>
                <div className={`inline-flex items-center ${sharedVariants({disabled})}`}>
                    <label className="flex items-center relative">
                        <input name={name} disabled={disabled} onChange={
                            onChange
                        } type="checkbox" defaultChecked={checked}
                               className={cn(checkboxVariants(userProps), className)}
                               id={checkboxId}/>
                        <CheckBoxIcon variant={variant}/>
                    </label>
                </div>
                {children}
            </div>
        </CheckboxContext.Provider>

    )
}

export const CheckboxLabel = ({children, className}: CheckboxLabelProps) => {
    const {checkboxId, disabled} = useCheckboxContext();
    return (
        <label htmlFor={checkboxId}
               className={cn(`text-base text-black-100 dark:text-white ${sharedVariants({disabled})}`, className)}>{children}</label>
    )
}

const CheckBoxIcon = ({variant} : Pick<CheckboxProps, 'variant'>) => {
    return (
        <span
            className={checkboxIconVariants({variant})}>
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


Checkbox.Label = CheckboxLabel;

export default Checkbox