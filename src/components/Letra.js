import React from "react"

export default function Letra({letra, cliqueLetra}){
    const [desabilitado, setDesabilitado] = React.useState(false)
    function cliqueLetraCompleto(letra){
        cliqueLetra(letra)
        setDesabilitado(true)
    }

    return(
        <button className="letra botao" 
        onClick={()=>cliqueLetraCompleto(letra)} 
        disabled={desabilitado ? true : false}>
            <p>{letra.toUpperCase()}</p>
        </button>
    )
}