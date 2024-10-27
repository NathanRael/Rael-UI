import {PropsWithChildren} from "react";
import {cn} from "../../../utils/cn.ts";
import AvatarContext, {useAvatar, useAvatarContext, useAvatarImage} from "./Avatar.Context.ts";
import {avatarVariants} from "./Avatar.Variants.ts";
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



export default Avatar