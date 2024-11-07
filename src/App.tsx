
import {useForm, ValidationRules} from "./components/form/Form.Context.ts";
import useToast from "./hooks/useToast.tsx";

type FormDataType = {
    name: string;
    terms: boolean;
    genre: string;
    hobby: string;
}

function App() {
    
    return (
        <section className="p-4 space-y-10">
            <h1 className="text-title font-bold text-white">
                Rael UI
            </h1>
           <ToastDemo/> 
        </section>
    )
}

const ToastDemo = () => {
    const {toast, ToastContainer} = useToast();

    const showToast = () => {
        toast({
            title: "Scheduled: Catch up",
            message: "Friday, February 10, 2023 at 5:57 PM",
            onClose: () => console.log('Toast closed'),
        });
    };

    return (
        <div>
            <button onClick={showToast}>Show Toast</button>
            <ToastContainer/>
        </div>
    );
}

export default App
