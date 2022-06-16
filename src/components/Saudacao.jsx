function Saudacao({ nome }) {

    function gerarSaudacao(algumNome) {
        return `olá, ${algumNome}, tudo bem?`
    }
    return (
        <>
            {nome && <p>{gerarSaudacao(nome)}</p>
                // só vai renderizar algo se tiver o nome escrito
            }
        </>
    )
}

export default Saudacao