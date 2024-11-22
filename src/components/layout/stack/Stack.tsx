import {PropsWithChildren, useMemo} from "react";
import {cn} from "@/utils";
import {stackVariants} from "@/components/layout/stack/Stack.variants.ts";
import {defaultVariants} from "@/components/default.ts";

type StackProps =  PropsWithChildren & {
    className?: string;
    direction?: "horizontal" | "vertical";
    align?: 'start' | 'center' | 'end';
    gap?: number | string;
    onClick?: () => void;
}
const Stack = ({children, className, direction = defaultVariants.stackDirection, gap = defaultVariants.stackGap, align, onClick}: StackProps) => {
    const userProps = {direction, gap}

    const gapClassName = useMemo(() => typeof gap === "number" ? `${gap}px` : `${gap}`, [gap]);
    const setAlignment = (currentDir: StackProps['direction']) => {
        return currentDir === direction ? align : 'center'
    }

    return (
        <div onClick={onClick} style={{
            gap: gapClassName,
        }} className={cn(`${gapClassName} ${stackVariants({
            ...userProps,
            horizontalAlign: setAlignment('horizontal'),
            verticalAlign: setAlignment('vertical'),
        })}`, className)} >
            {children}
        </div>
    )
}

export default Stack;