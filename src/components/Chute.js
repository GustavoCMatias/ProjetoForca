import React from "react"

export default function Chute({ palpite, setPalpite, botoes_desabilitados, palavra, setFinalizado, setBotoes_desabilitados, cliqueTodas, setForca }) {
    function envioPalpite() {
        if(palpite===palavra){
            setFinalizado(1)
        }else{
            setFinalizado(-1)
            setForca('./assets/forca6.png')
        }
        setPalpite('')
        setBotoes_desabilitados(true)
        cliqueTodas()
        
    }

    return (
        <div className="chute">
            <p>Já sei a palavra!</p>

            <input className="caixa-input"
                onChange={(e) => setPalpite(e.target.value)}
                value={palpite} 
                data-test="guess-button"/>

            <button className={`botao enter ${botoes_desabilitados ? 'botao-off' : 'botao'}`}
                onClick={envioPalpite}
                disabled={botoes_desabilitados? true : false}
                data-test="guess-input">
                <p>Chutar</p>
            </button>
        </div>
    )
}