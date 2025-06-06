import {createContext, useContext} from "react";

type ComponentStyleContext = {
    cVariant?: 'fill' |'outline';
    cSize?: 'sm' |'md' |'lg' |'xl';
}

type useComponentStyleContextProps = {
    variant?: 'fill' |'outline';
    size?: 'sm' |'md' |'lg' |'xl';
    radius?: string;
}

export const ComponentStyleContext = createContext<ComponentStyleContext |undefined>(undefined);

export const useComponentStyle = () => {
    const context = useContext(ComponentStyleContext);
    if (!context)
        return {}
        // throw new Error("useComponentStyle must be used within ComponentStyle");
    return context as ComponentStyleContext;
}

export const useComponentStyleContext = ({variant, size} : useComponentStyleContextProps) => {
    return {
        cVariant: variant || 'fill',
        cSize: size || 'md',
    }
}

export default ComponentStyleContext;
