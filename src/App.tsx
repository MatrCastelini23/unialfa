import { useEffect, useState } from "react";
import Header from "./components/ui/Header";
import Main from "./components/ui/Main";
import Footer from "./components/ui/Footer";

function App() {
  const [imagem, setImagem] = useState(false);
  const [corExterna, setCorExterna] = useState(false);

  const alterarDevCor = () => (
    setCorExterna(!corExterna)
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setImagem(true);
    }, 60000);

    return () => clearTimeout(timer);
  })

  return (
    <>
      <Header
        corExterna={corExterna}
      />

      <Main
        img={imagem}
      />

      <Footer
        click={alterarDevCor}
      />
    </>
  )
}

export default App
