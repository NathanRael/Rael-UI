import {Button, PasswordInput} from "./components";



function App() {
    return (
        <section className="p-4 space-y-10">
            <h1 className="text-title font-bold text-white">
                Nathan Components
            </h1>
            <Button >Get started</Button>
            <PasswordInput placeholder="Name"/>
        </section>
    )
}

export default App
