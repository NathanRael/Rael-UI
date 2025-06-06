import {PropsWithChildren} from "react";
import {cn} from "@/utils/cn.ts";
import AvatarContext, {useAvatar, useAvatarContext, useAvatarImage} from "./Avatar.context.ts";
import {avatarVariants} from "./Avatar.variants.ts";
import {Radius, Size} from "@/components/global.types.ts";
export type AvatarProps = Required<PropsWithChildren> & {
    className?: string,
    size? : Size,
    radius? : Radius,
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
            <div className={cn('size-fit', className)}>
                {children}
                
                {/*<p className={"text-white"}>{isLoading ? 'loading ...' : 'done'}</p>*/}
            </div>
        </AvatarContext.Provider>

    )
}

export const AvatarImage = ({alt, src, className}: AvatarImageProps) => {
    const {imgSrc, isLoading, error, size, radius} = useAvatarContext();

    useAvatarImage({src : src})

    return !isLoading && !error && (
        <img className={cn(avatarVariants({size, radius}), className)} alt={alt} src={imgSrc}/>
    )
}

export const AvatarFallback = ({children, className}: AvatarFallbackProps) => {
    const {isLoading, error, size, radius} = useAvatarContext();
    return (isLoading || error) && (
        <div className={cn( avatarVariants({size, radius}), "bg-neutral-light-100 shadow-md border border-neutral-light-60 text-black-100 dark:text-white-100 dark:bg-neutral-dark-80 dark:border-neutral-dark-60 " ,className)}>{children}</div>
    )
}

Avatar.Image = AvatarImage;
Avatar.Fallback = AvatarFallback;



export default Avatar