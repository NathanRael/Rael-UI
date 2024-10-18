import {RadioGroup} from "./components/ui/radio/Radio.tsx";


function App() {
    return (
        <section className="p-4 space-y-10">
            <h1 className="text-title font-bold text-white">
                Rael UI
            </h1>
            <RadioGroup defaultValue="1">
                <RadioGroup.Item value="1" label="First"/>
                <RadioGroup.Item value="2" label="Second"/>
                <RadioGroup.Item value="3" label="Nathan"/>
            </RadioGroup>

        </section>
    )
}

export default App
