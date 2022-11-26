import React from "react"

export default function Chute({ palpite, setPalpite, botoes_desabilitados, palavra, setFinalizado, setBotoes_desabilitados, cliqueTodas, setForca }) {
    const [desabilitado, setDesabilitado] = React.useState(false)
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
                value={palpite} />

            <button className={`botao enter ${botoes_desabilitados || desabilitado ? 'botao-off' : 'botao'}`}
                onClick={envioPalpite}
                disabled={botoes_desabilitados || desabilitado ? true : false}>
                <p>Chutar</p>
            </button>
        </div>
    )
}