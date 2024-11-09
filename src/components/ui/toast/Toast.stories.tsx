import {ComponentProps} from "react";
import {Toast} from "./index.ts";
import {Meta, StoryObj} from "@storybook/react";
import useToast from "../../../hooks/useToast.tsx";
import {Button} from "../button";
import ComponentStyleContext from "../ComponentStyle.Context.ts";
import {argTypes} from "@/components/default.ts";

type StoryProps = ComponentProps<typeof Toast> & {
    buttonText: React.ReactNode;
}

const ToastDemo = (args : StoryProps) => {
    const {toast, renderToastContainer} = useToast();

    const showToast = () => {
        toast({
            title: "UI Changes",
            message: "We've added some new UI",
            onClose: () => console.log('Toast closed'),
            position : 'bottom-left',
        });
    };

    return (
        <div>
            <ComponentStyleContext.Provider value={{cVariant : args.variant, cSize : 'lg'}}>
                {renderToastContainer()}
            </ComponentStyleContext.Provider>
            <Button onClick={showToast}>Show Toast</Button>
        </div>
    );
}

const meta: Meta<StoryProps> = {
    component: Toast,
    tags: ['autodocs'],
    argTypes : {
        radius : argTypes.radius,
        variant : argTypes.variant,
    }
}


export default meta;

type Story = StoryObj<StoryProps>;

export const Outline: Story = {
    args: {
        variant: 'outline',
        radius: 'xl',
    },
    render: (args) => <ToastDemo {...args} />
}

export const Fill: Story = {
    args: {
        variant: 'fill',
        radius: 'xl',
    },
    render: (args) => <ToastDemo {...args} />
}