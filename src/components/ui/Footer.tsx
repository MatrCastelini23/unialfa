import { useState } from "react"

interface IFooterProps {
    click: () => void
}

function Footer({ click }: IFooterProps) {
    const [dev, setDev] = useState('Helo');
    const [input, setInput] = useState('');

    const alterarDevCor = () => (
        setDev(input),
        setInput("")
    )
    return (
        <footer>
            <h1>Dev: {dev}</h1>
            <input
                type="text"
                onChange={(e) => setInput(e.target.value)}
            />
            <button
                onClick={alterarDevCor}
                onClickCapture={click}
            >
                Alterar dev
            </button>
        </footer>
    )
}

export default Footer