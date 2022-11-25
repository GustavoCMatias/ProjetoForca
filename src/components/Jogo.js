export default function Jogo({letras_palavra, str_tela}) {
    
    return (
        <div className="jogo">
            <img src="./assets/forca0.png" className='imagem' />

            <div>
                <button className="escolha">Escolher palavra</button>

                <p>{str_tela}</p>

            </div>

        </div>
    )
}