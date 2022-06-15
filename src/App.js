import './App.css'
import HelloWorld from './components/HelloWord'
import SayMyName from './components/SayMyName'
import Pessoa from './components/Pessoa'

function App() {

  const nome = 'Maria'

  return (
    <div className="App">

      <HelloWorld />
      <SayMyName nome="Henrique" />
      <SayMyName nome="João" />
      <SayMyName nome={nome} />
      <Pessoa
        nome="Soto"
        idade="30"
        profissao="Programador"
        foto="https://via.placeholder.com/150"
      />
    </div>
  );
}

export default App;
