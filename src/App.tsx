import {Button} from "./components";

function App() {
    return (
        <section className="p-4 space-y-10">
            <h1 className="text-title font-bold text-white">
                Nathan Components
            </h1>
            <Button disabled size="md"  onClick={() => alert("cliecked")} loading>Get started</Button>
        </section>
    )
}

export default App
