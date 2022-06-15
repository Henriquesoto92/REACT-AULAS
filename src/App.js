//area de fora superior serve para importar itens
import './App.css'
import HelloWorld from './components/HelloWord'


function App() {
  //area interna serve para criar os itens da função

  const name = 'Henrique';
  const newName = name.toUpperCase();

  function sum(a, b) {
    return a + b
  };

  const url = "https://via.placeholder.com/150"

  return (
    //<div class="App">
    //forma correta de declarar "class" no react é usar "className"
    //DICA: sempre observar o console do navegador, ele da alguns avisos silenciosos
    <div className="App">

      <h2> Alterando o JSX</h2>
      <p>Olá, me chamo {name}</p>
      <p>Olá, me chamo {newName}</p>
      <p>soma: {2 + 2}</p>
      <p>soma: {sum(2, 2)}</p>
      <img src={url} alt="minha imagem" />

      <HelloWorld />

    </div>
  );
}
//area de fora inferior serve para exportar a função itens
export default App;
