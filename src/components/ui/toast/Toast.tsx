import {cn} from "../../../utils/cn.ts";
import {useComponentStyle} from "../ComponentStyle.Context.ts";
import {X} from "lucide-react";
import {toastMessageVariants, toastTitleVariants, toastVariants} from "./Toast.variants.ts";

type ToastProps = {
    title?: React.ReactNode;
    message?: React.ReactNode;
    variant?: 'fill' | 'outline';
    radius? : 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
    className?: string;
    onClose?: () => void;
}
const Toast = ({message, variant, title, className, onClose}: ToastProps) => {
    const {cVariant} = useComponentStyle();
    const userProps = {variant: variant || cVariant}
    return (
        <div className={cn(toastVariants(userProps), className)}>
            {title && (
                <div className={'flex justify-between items-start'}>
                    <ToastTitle title={title} variant={variant || cVariant}/>
                    <X onClick={onClose} size={16} className={`cursor-pointer ${toastTitleVariants(userProps)}`}/>
                </div>
            )}
            {message && <ToastMessage message={message} variant={variant || cVariant}/>}
        </div>
    )
}

const ToastTitle = ({title, variant}: Pick<ToastProps, 'title' | 'variant'>) => {
    return <h1 className={toastTitleVariants({variant})}>{title}</h1>
}

const ToastMessage = ({message, variant}: Pick<ToastProps, 'message' | 'variant'>) => {
    return <p className={toastMessageVariants({variant})}>{message}</p>
}

export default Toast

