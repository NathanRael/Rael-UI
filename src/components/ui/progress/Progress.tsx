import {useRef} from "react";
import {cn} from "../../../utils/cn.ts";


type ProgressProps = {
    value: number,
    max?: number,
    variant?: 'fill' | 'outline',
    size?: 'md' | 'lg' | 'xl',
    radius?: 'none' | 'sm' | 'md' | 'lg' | 'xl',

    className?: string,

}
const Progress = ({
                      value = 10,
                      max = 100,
                      className,
                  }: ProgressProps) => {


    return (
        <div className={cn("flex flex-col gap-2  w-[320px] relative", className)}>
            <div
                className={"overflow-hidden flex items-center w-full justify-start  border-white h-4 bg-gray-600 rounded-full"}>
                <div className={"bg-primary h-full transition-all ease-out "} style={{
                    width: value + '%',
                }}/>
            </div>
            <p className={"text-white font-bold text-[14px]  absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 "}>{value}%</p>
        </div>
    )
}

export default Progress