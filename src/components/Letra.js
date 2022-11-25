export default function Letra({letra, cliqueLetra}){
    return(
        <button className="letra botao" onClick={()=>cliqueLetra(letra)}>
            <p>{letra.toUpperCase()}</p>
        </button>
    )
}