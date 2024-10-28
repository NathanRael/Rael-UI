
import FormTest from "./test/form/FormTest.tsx";



function App() {
    
    // const {errors} = useForm<FormFields>();

    return (
        <section className="p-4 space-y-10">
            <h1 className="text-title font-bold text-white">
                Rael UI
            </h1>
            <FormTest/>
        </section>
    )
}

export default App
