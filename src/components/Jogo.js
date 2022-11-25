export default function Jogo({letras_palavra, str_tela, forca}) {
    
    return (
        <div className="jogo">
            <img src={forca} className='imagem' />

            <div>
                <button className="escolha">Escolher palavra</button>

                <p>{str_tela}</p>

            </div>

        </div>
    )
}