import AutoCompleteInput, {
    AutoCompleteGroup,
    AutoCompleteGroupContainer, AutoCompleteGroupTitle,
    AutoCompleteHeader, AutoCompleteItem
} from "./components/ui/autoCompleteInput/AutoCompleteInput.tsx";
import {SelectInput} from "./components";
import SelectInputTest from "./test/components/SelectInputTest.tsx";



function App() {
    return (
        <section className="p-4 space-y-10">
            <h1 className="text-title font-bold text-white">
                Rael UI
            </h1>
            <SelectInputTest></SelectInputTest>
        </section>
    )
}

export default App
