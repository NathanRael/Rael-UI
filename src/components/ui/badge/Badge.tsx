import {PropsWithChildren} from "react";
import {cn} from "@/utils/cn.ts";
import {badgeVariants} from "./Badge.variants.ts";
import {Radius, Size, Variant} from "@/components/global.types.ts";

type BadgeProps = PropsWithChildren & {
    variant?: Variant;
    size? : Exclude<Size, 'lg'>;
    radius? : Radius ;
    className?: string;
}

type DotProps = {
    className?: string;
}
const Badge = ({children, className, variant, size} : BadgeProps) => {
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

