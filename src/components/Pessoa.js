// function Pessoa(props) {
//     return (
//         <div>
//             <img src={props.foto} alt={props.alt} />
//             <h2>Nome: {props.nome}</h2>
//             <p>Idade: {props.idade}</p>
//             <p>Profissao: {props.profissao}</p>
//         </div>
//     )
// } esse codigo é a forma trabalhosa de fazer
function Pessoa({ nome, idade, profissao, foto }) {
    return (
        <div>
            <img src={foto} alt={nome} />
            <h2>Nome: {nome}</h2>
            <p>Idade: {idade}</p>
            <p>Profissao: {profissao}</p>
        </div>
    )
}

export default Pessoa