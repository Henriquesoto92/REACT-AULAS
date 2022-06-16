function SeuNome({ setNome }) {

    return (
        <div>
            <p>Digite seu nome:</p>
            <input
                type="text"
                placeholder="Qual é oseu nome?"
                onChange={(e) => setNome(e.target.value)}
            />
        </div>
    )
}

export default SeuNome