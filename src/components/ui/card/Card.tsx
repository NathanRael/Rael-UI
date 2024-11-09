import {PropsWithChildren} from "react";
import {cn} from "@/utils/cn.ts";
import {cardDescriptionVariants, cardSectionVariants, cardTitleVariants, cardVariants} from "./Card.variants.ts";
import ComponentStyleContext, {useComponentStyle, useComponentStyleContext} from "../ComponentStyle.Context.ts";
import {Radius, Variant} from "@/components/global.types.ts";

type CardProps = Required<PropsWithChildren> & {
    variant?: Variant;
    radius?: Radius;
    className?: string;
}

type ClassNameAndChildren = Required<PropsWithChildren> & {
    className?: string
}

type CardSectionProps = ClassNameAndChildren & {
    rFor? : "meta" | "content";
    
}
const Card = ({children, className, variant, radius } : CardProps) => {
    const {cVariant} = useComponentStyleContext({variant : variant})
    return (
        <ComponentStyleContext.Provider value={{cVariant}}>
            <div className={cn(cardVariants({variant, radius}), className)}>
                {children}
            </div>
        </ComponentStyleContext.Provider>

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
    const {cVariant} = useComponentStyle();
    return (
        <h1 className={cn(cardTitleVariants({variant: cVariant}), className)}>{children}</h1>
    )   
}

export const CardDescription = ({children, className}: ClassNameAndChildren) => {
    const {cVariant} = useComponentStyle();
    
    return (
        <p className={cn(cardDescriptionVariants({variant: cVariant}), className)}>{children}</p>
    )
}

export default Card;



