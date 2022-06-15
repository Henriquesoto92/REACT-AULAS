import PropTypes from 'prop-types'

function Item({ marca, anoLancamento }) {
    return (
        <>
            <li>
                {marca} - {anoLancamento}
            </li>
        </>
    )
}

// esse informa um erro no console log, o que precisa ser feito para se manter um padrão
// experimente tirar ou comentar o "Item.defaultProps" a baixo para ver o resultado no console
Item.propTypes = {
    marca: PropTypes.string.isRequired,
    anoLancamento: PropTypes.number,
}

// este coloca um "default" direto quando não preenchemos nada. (otimo para formularios)
Item.defaultProps = {
    marca: 'Faltou a marca',
    anoLancamento: 0,
}

export default Item