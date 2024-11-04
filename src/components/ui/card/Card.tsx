import {PropsWithChildren} from "react";
import {cn} from "../../../utils/cn.ts";
import {cardSectionVariants, cardVariants} from "./Card.variants.ts";

type CardProps = Required<PropsWithChildren> & {
    variant?: "outline" | "fill";
    radius?: "none" | "sm" | "md" | "lg" | "xl";
    className?: string;
}

type ClassNameAndChildren = Required<PropsWithChildren> & {
    className?: string
}

type CardSectionProps = ClassNameAndChildren & {
    rFor? : "meta" | "content";
    
}
const Card = ({children, className, variant, radius } : CardProps) => {
    return (
        <div className={cn(cardVariants({variant, radius}), className)}>
            {children}
        </div>
    )   
}

export const CardSection = ({children, className, rFor}: CardSectionProps) => {
    
    return (
        <section className={cn(cardSectionVariants({rFor}), className)}>
            {children}
        </section>
    )
}

export const CardTitle = ({children, className}: ClassNameAndChildren) => {
    return (
        <h1 className={cn('text-3xl text-white', className)}>{children}</h1>
    )   
}

export const CardDescription = ({children, className}: ClassNameAndChildren) => {
    return (
        <p className={cn('text-base text-gray-400', className)}>{children}</p>
    )
}

export default Card;



