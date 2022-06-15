function Evento({ numero }) {

    function meuEvento() {
        console.log(`Fui Ativado! ${numero}`)
    }

    return (
        <div>
            <p>Clique para Disparar um evento:</p>
            <button onClick={meuEvento}>Ativar!</button>
        </div>
    )
}

export default Evento