interface IMainProps {
    img: boolean,
}

function Main({ img }: IMainProps) {
    const imagem = img;

    return (
        <div style={{ border: "border-box", justifySelf: "center" }}>
            <img
                src={!imagem ? "/batman.jpg" : "/homem-aranha.webp"}
                style={{ maxHeight: "266px" }}
                alt="" />
        </div>
    )
}

export default Main