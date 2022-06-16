import { useState } from 'react'

function Condicional() {

    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    function enviarEmail(e) {
        e.preventDefault();
        setUserEmail(email)
    }
    function limparEmail() {
        setUserEmail('')
    }

    return (
        <div>
            <h2>Cadastre o seu e-mail:</h2>
            <form>
                <input
                    type="email"
                    placeholder="Digite o seu e-mail..."
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit" onClick={enviarEmail}>Enviar Email</button>
                <br />
                <br />
                {userEmail && (
                    <div>
                        <p>
                            o E-mail do usuário é: {userEmail}
                        </p>
                        <button onClick={limparEmail}>Limpar E-mail</button>
                    </div>
                )}
            </form>
        </div>
    )
}

export default Condicional