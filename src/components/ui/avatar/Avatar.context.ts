import React, {useContext, useEffect, useState} from "react";
import {AvatarProps} from "./Avatar.tsx";

type AvatarContext = {
    isLoading: boolean,
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
    imgSrc: string,
    setImgSrc: React.Dispatch<React.SetStateAction<string>>,
    error: boolean,
    setError: React.Dispatch<React.SetStateAction<boolean>>,
    
    size : AvatarProps['size'],
    radius: AvatarProps['radius'],
}

type AvatarImageProps = {
    src : string
}

const AvatarContext = React.createContext<AvatarContext | undefined>(undefined);

export const useAvatarContext = () => {
    const context = useContext(AvatarContext);
    if (!context) {
        throw new Error("useAvatarContext must be used within AvatarContext");
    }

    return context;
}

export const useAvatar = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState(false);
    const [imgSrc, setImgSrc] = useState("");


    return {
        isLoading,
        setIsLoading,
        imgSrc,
        setImgSrc,
        error,
        setError
    }
}

export const useAvatarImage = ({
                                   src
                               }: AvatarImageProps
) => {
    const {setImgSrc, setIsLoading, setError} = useAvatarContext();

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        const fetchImage = async () => {
            setIsLoading(true)
            try {
                const response = await fetch(src, {signal});

                if (!response.ok) {
                    throw new Error('Failed to load image');
                }

                const blob = await response.blob();
                const imageObjectURL = URL.createObjectURL(blob);
                setImgSrc(imageObjectURL);
            } catch (err : unknown) {
                setError(true);
                console.error('Error loading image : ', err);
            } finally {
                setIsLoading(false);
            }
        }

        fetchImage();

        const timeOutId = setTimeout(() => {
            controller.abort()
        }, 10000)

        return () => {
            clearTimeout(timeOutId)
            // controller.abort()
        }
    }, [src])


}


export default AvatarContext;