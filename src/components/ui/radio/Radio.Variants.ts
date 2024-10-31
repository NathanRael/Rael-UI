import {cva} from "class-variance-authority";

export const defaultVariant = {
    disabled: false
}
export const sharedVariants = cva('', {
    variants: {
        disabled: {
            true: 'cursor-not-allowed',
            false: 'cursor-pointer'
        }
    },
    defaultVariants: {
        disabled: defaultVariant.disabled
    }
})
