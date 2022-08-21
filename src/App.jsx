import InformacoesPessoais from './componentes/InformacoesPessoais'
import Navbar from './componentes/Navbar'

function App() {
  return (
    <div className="App md:h-screen h-[130vh]">
      <Navbar />
      <InformacoesPessoais/>
    </div>
  )
}

export default App
