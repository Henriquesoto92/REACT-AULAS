function OutraLista({ itens }) {
    return (
        <>
            <h3>Lista de coisas boas:</h3>
            {itens.length > 0 ? (
                itens.map((item, index) => (
                    <p key={index}>{item}</p>
                ))) : (
                <p>Não há Itens na lista!</p>
                //esse é um ternario {condição ? façaisso : façaaquilo} 
            )}
        </>
    )

}

export default OutraLista