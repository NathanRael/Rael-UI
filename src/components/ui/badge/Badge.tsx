import {PropsWithChildren} from "react";
import {cn} from "../../../utils/cn.ts";
import {badgeVariants} from "./Badge.Variants.ts";

type BadgeProps = PropsWithChildren & {
    variant?: 'outline' |'fill' ,
    size? : 'sm' | 'md' | 'lg' ,
    className?: string,
}

type DotProps = {
    className?: string;
}
const Badge = ({children = null, className, variant, size} : BadgeProps) => {
    const userProps = {variant, size}
    
    if (!children)
        return <Dot className={className}/>
    
    return (
        <div className={cn( badgeVariants(userProps), className)}>{children}</div>
    )
}

const Dot = ({className} : DotProps) => {
    return <div className={cn("w-3 h-3 bg-primary rounded-full", className)}/>
}

export default Badge

