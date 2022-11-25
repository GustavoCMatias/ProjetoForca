import React from "react"

export default function Letra({letra, cliqueLetra, botoes_desabilitados}){
    const [desabilitado, setDesabilitado] = React.useState(false)
    function cliqueLetraCompleto(letra){
        cliqueLetra(letra)
        setDesabilitado(true)
    }

    return(
        <button className={`letra ${botoes_desabilitados || desabilitado ? 'botao-off':'botao'}`} 
        onClick={()=>cliqueLetraCompleto(letra)} 
        disabled={botoes_desabilitados || desabilitado ? true : false}>
            <p>{letra.toUpperCase()}</p>
        </button>
    )
}