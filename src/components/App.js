import Jogo from "./Jogo"
import Letra from "./Letra"
import Chute from "./Chute"
import React from "react"



const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n",
  "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

let erros = 0
let letras_palavra=[]

function App({palavras}) {

  function reinicio(){
    const nova_palavra = palavras[Math.floor(Math.random() * palavras.length)]
    setPalavra(nova_palavra)
    letras_palavra = [...nova_palavra]
    console.log(letras_palavra)
    erros=0;
    setFinalizado(0)
    setBotoes_desabilitados(false)
    setForca('./assets/forca0.png')
    setLetras_clicadas([])
    setStr_tela('_'.repeat(letras_palavra.length))
    console.log('_'.repeat(letras_palavra.length, letras_palavra))
    setPalpite('')

  }

  function cliqueLetra(letra) {
    console.log(letra)
    if (letras_palavra.includes(letra)) {
      let novo_letras_clicadas = [...letras_clicadas, letra]
      console.log(novo_letras_clicadas)
      setLetras_clicadas(novo_letras_clicadas) 
      let new_string = ''
      let contador = 0;
      for (let i = 0; i < letras_palavra.length; i++) {

        if (novo_letras_clicadas.includes(letras_palavra[i])) {
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
      setLetras_clicadas([...letras_clicadas, letra])
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

  const [str_tela, setStr_tela] = React.useState('')
  const [forca, setForca] = React.useState("./assets/forca0.png")
  const [botoes_desabilitados, setBotoes_desabilitados] = React.useState(true)
  const [palpite, setPalpite] = React.useState('') 
  const [finalizado, setFinalizado] = React.useState(0)
  const [palavra, setPalavra] = React.useState('')
  const [letras_clicadas, setLetras_clicadas] = React.useState([])
  return (
    <>
      <Jogo letras_palavra={letras_palavra}
        str_tela={str_tela}
        forca={forca} 
        finalizado={finalizado}
        setBotoes_desabilitados={setBotoes_desabilitados}
        setStr_tela={setStr_tela}
        reinicio={reinicio}
        />

      <div className="letras">
        {alfabeto.map(i => <Letra letra={i}
          key={i}
          cliqueLetra={cliqueLetra}
          botoes_desabilitados={botoes_desabilitados} 
          letras_clicadas={letras_clicadas}/>)}
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
