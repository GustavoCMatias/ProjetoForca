import React from "react"
let desabilitado = false;

export default function Letra({letra, cliqueLetra, botoes_desabilitados, letras_clicadas}){
    if (letras_clicadas.includes(letra)){
        desabilitado = true
    }else{
        desabilitado = false
    }
    function cliqueLetraCompleto(letra){
        cliqueLetra(letra)
    }

    return(
        <button className={`letra ${botoes_desabilitados || desabilitado ? 'botao-off':'botao'}`} 
        onClick={()=>cliqueLetraCompleto(letra)} 
        disabled={botoes_desabilitados || desabilitado ? true : false}
        data-test="letter">
            <p>{letra.toUpperCase()}</p>
        </button>
    )
}