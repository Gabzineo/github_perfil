import { useState } from "react";
import Perfil from "./components/Perfil";
import Reposlist from "./components/repoList";

function App() {
  
  const [Formularioestavisivel, setFormularioestavisivel] = useState(true)
  const [nomeUsuario, setNomeUsuario] = useState('');
  return (
    <>
    <div className="containerInput">
    <input type="text"onBlur={
      (e) => setNomeUsuario(e.target.value)}
     />
    </div>

      {nomeUsuario.length > 4 && (
        <>
        <Perfil nomeusuario={nomeUsuario}/>
        <Reposlist nomeusuario= {nomeUsuario}/>
        </>
      )}

      {/* {Formularioestavisivel && (
        <Formulario />
      )}
    <button onClick={() => setFormularioestavisivel(!Formularioestavisivel)} type="button">Toggle  Form</button> */}
    </>
  )
}

export default App
