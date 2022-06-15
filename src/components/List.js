// nesse caso, não precisamos usar o <div>, "elemento pai" para inserir no app.js

import Item from "./Item"

function List() {
    return (
        <>
            <h1>Minha lista</h1>
            <ul>
                <Item marca="Ferrari" anoLancamento={1985} />
                <Item marca="Fiat" anoLancamento={1964} />
                <Item marca="Renault" />
                <Item anoLancamento="1999" />
                <Item />
            </ul>
        </>
    )
}

export default List