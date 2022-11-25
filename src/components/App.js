import Jogo from "./Jogo"
import Letra from "./Letra"
import Chute from "./Chute"
import React from "react"



const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", 
"o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

function App(props) {
  const palavra = props.palavra[Math.floor(Math.random() * props.palavra.length)]
  const letras_palavra = [...palavra]
  const [str_tela, setStr_tela] = React.useState('_ '.repeat(letras_palavra.length))
  console.log(palavra, str_tela, letras_palavra.length)
  return (
    <>
    <Jogo letras_palavra={letras_palavra} str_tela={str_tela}/>
    <div className="letras">
      {alfabeto.map(i => <Letra letra={i} key={i} />)}
    </div>
    <Chute/>

    </>
  );
}

export default App;
