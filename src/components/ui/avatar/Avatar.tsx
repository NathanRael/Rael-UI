import {PropsWithChildren, useEffect} from "react";
import {cn} from "../../../utils/cn.ts";
import AvatarContext, {useAvatar, useAvatarContext, useAvatarImage} from "./Avatar.Context.ts";
import {cva} from "class-variance-authority";

export type AvatarProps = Required<PropsWithChildren> & {
    className?: string,
    size? : 'sm' | 'md' | 'lg',
    radius? : "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "full",
}

type AvatarImageProps = {
    src: string,
    alt: string,
    className? : string,
}

type AvatarFallbackProps = PropsWithChildren & {
    className?: string,
}
const Avatar = ({children, className, size, radius}: AvatarProps) => {
    const {isLoading, setIsLoading, imgSrc, setImgSrc, setError, error} = useAvatar()
    return (
        <AvatarContext.Provider value={{
            isLoading,
            setIsLoading,
            imgSrc,
            setError,
            setImgSrc,
            error,
            size : size,
            radius : radius,
        }}>
            <div className={cn('', className)}>
                {children}
            </div>
        </AvatarContext.Provider>

    )
}

export const AvatarImage = ({alt, src, className}: AvatarImageProps) => {
    const {imgSrc, isLoading, error, size, radius} = useAvatarContext();

    useAvatarImage({src : src})

    return !isLoading && !error && (
        <img className={cn( avatarVariants({size, radius}), className)} alt={alt} src={imgSrc}/>
    )
}

export const AvatarFallback = ({children, className}: AvatarFallbackProps) => {
    const {isLoading, error, size, radius} = useAvatarContext();
    return isLoading || error && (
        <div className={cn( avatarVariants({size, radius}), className)}>{children}</div>
    )
}

Avatar.Image = AvatarImage;
Avatar.Fallback = AvatarFallback;

const avatarVariants = cva('overflow-hidden flex bg-white font-bold items-center justify-center', {
    variants : {
        size : {
            sm : 'size-4 text-base',
            md : 'size-10 text-xl',
            lg : 'size-[54px] text-2xl',
        },
        radius: {
            none: 'rounded-none',
            sm: "rounded-sm",
            md: "rounded-md",
            lg: "rounded-lg",
            xl: "rounded-xl",
            "2xl": "rounded-2xl",
            full: "rounded-full",
        },
    },
    defaultVariants : {
        size : 'lg',
        radius : 'full'
    }
})

export default Avatar