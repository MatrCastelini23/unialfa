import { useState } from "react"

function Home(){
    const [count, setCount] = useState(0);
    const adicionar = () => (setCount(count + 1))
    const diminuir = () => (setCount(count - 1))
    return(
        <>
            <div className="container">
                <h1>Hello word</h1>
                <h2>Contador</h2>
                <p>Número atual {count}</p>
                <button onClick={adicionar} className="counter">Adicionar</button>
                <button onClick={diminuir} className="counter">Diminuir</button>
            </div>
        </>
    )
}

export default Home