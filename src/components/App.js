import Jogo from "./Jogo"
import Letra from "./Letra"
import Chute from "./Chute"
import React from "react"



const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n",
  "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

const letras_clicadas = []
let erros = 0

function App({palavra, letras_palavra }) {

  function cliqueLetra(letra) {
    if (letras_palavra.includes(letra)) {
      letras_clicadas.push(letra)
      let new_string = ''
      let contador = 0;
      for (let i = 0; i < letras_palavra.length; i++) {

        if (letras_clicadas.includes(letras_palavra[i])) {
          new_string += `${letras_palavra[i]}`
        } else {
          new_string += `_`
          contador+=1;
        }
      }
      setStr_tela(new_string)
      if(contador === 0){
        setFinalizado(1)
        setBotoes_desabilitados(true)
      }
    } else {
      erros += 1
      setForca(`./assets/forca${erros}.png`)
      if (erros === 6){
        setFinalizado(-1)
        cliqueTodas()
        setBotoes_desabilitados(true)
      }

      
    }
  }

  function cliqueTodas(){
    setStr_tela(palavra)
  }

  const [str_tela, setStr_tela] = React.useState('_'.repeat(letras_palavra.length))
  const [forca, setForca] = React.useState("./assets/forca0.png")
  const [botoes_desabilitados, setBotoes_desabilitados] = React.useState(true)
  const [palpite, setPalpite] = React.useState('') 
  const [finalizado, setFinalizado] = React.useState(0)
  return (
    <>
      <Jogo letras_palavra={letras_palavra}
        str_tela={str_tela}
        forca={forca} 
        finalizado={finalizado}
        setBotoes_desabilitados={setBotoes_desabilitados}
        />

      <div className="letras">
        {alfabeto.map(i => <Letra letra={i}
          key={i}
          cliqueLetra={cliqueLetra}
          botoes_desabilitados={botoes_desabilitados} />)}
      </div>
      
      <Chute 
      palavra={palavra}
      setPalpite={setPalpite}
      palpite={palpite}
      setBotoes_desabilitados={setBotoes_desabilitados}
      botoes_desabilitados={botoes_desabilitados} 
      setFinalizado={setFinalizado}
      cliqueTodas={cliqueTodas}
      setForca={setForca}/>

    </>
  );
}

export default App;
