interface IHeaderProps {
    corExterna: boolean
}

function Header({ corExterna }: IHeaderProps) {
    const cor = corExterna;


    return (
        <header>
            <h1 style={!cor ? { color: "white", background: "darkblue" } : { color: "black", backgroundColor: "yellow" }}>
                Titulo 1
            </h1>
        </header >
    )
}

export default Header;