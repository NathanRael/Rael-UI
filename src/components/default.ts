import {ButtonVariant, Direction, Radius, RFor, Size, Variant} from "@/components/global.types.ts";
import {ArgTypes} from "@storybook/react";

interface DefaultVariants {
    disabled : boolean;
    btnVariant : ButtonVariant;
    size : Size;
    radius : Radius;
    block : false;
    variant : Variant;
    rFor : RFor;
    stackDirection : Direction;
    stackGap : number | string;
}


export const defaultVariants : DefaultVariants = {
    disabled : false,
    btnVariant : 'primary',
    size : 'md',
    radius : 'lg',
    block : false,
    variant : 'fill',
    rFor : 'content',
    
    
    stackDirection : "horizontal",
    stackGap : 16,
}


// Storybook ArgTypes (controlling variants input)
export const variantOptions = ['fill', 'outline'];
export const buttonVariantOptions = ['primary', 'secondary','outline' ,'ghost'];
export const sizeOptions = ["sm" , "md" , "lg" ];
export const radiusOptions =  ["none" ,"sm" , "md" ,"lg" , "xl", "2xl" , "full"];
export const rForOptions = ['meta' ,'content'];


export const argTypes : ArgTypes = {
    variant : {
        control : { type: "inline-radio" },
        options : variantOptions
    },
    size : {
        control : { type: "radio" },
        options : sizeOptions
    },
    radius : {
        control : { type: "select" },
        options : radiusOptions
    },
}
