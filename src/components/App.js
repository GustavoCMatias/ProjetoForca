import Jogo from "./Jogo"
import Letra from "./Letra"
import Chute from "./Chute"

const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", 
"o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

function App() {
  return (
    <>
    <Jogo/>
    <div className="letras">
      {alfabeto.map(i => <Letra letra={i}/>)}
    </div>
    <Chute/>

    </>
  );
}

export default App;
