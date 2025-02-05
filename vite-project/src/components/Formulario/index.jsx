import { useState, useEffect} from "react"

const Formulario = () => {

    const [NotaA, setnotaA] = useState(0);
    const [NotaB, setnotaB] = useState(0);
    const [NotaC, setnotaC] = useState(0);
    const [Nome, setNome] = useState('');
    
     
    useEffect(() =>{
        console.log("O componente inicio")

        return () => {
            console.log("O componente finalizou")
        }
    },[])

    useEffect(() =>{
        console.log("o estado nomem mudou")
    },[Nome])

    useEffect(() => {
        console.log("A Materia A mudou para " + NotaA)
    },[NotaA])

    const alterarnome = (evento) => {
        
        setNome(estadoanterior => {
            return evento.target.value
        })
    }

    const renderizacaoNota = () => {
        const somar = NotaA + NotaB + NotaC;
        const media = somar / 3;

       if(media >= 7){
        return(
            <p>{Nome} Você foi aprovado</p>
        )
       } else {
        return (
            <p> {Nome} Você não foi aprovado</p>
        )
       }
    }


    return (
        <form >
            <ul>
            {[1,2,3,4].map (item => (
                <li key={item}>{item}</li>
            ))}
            </ul>
            
            <input type="text" placeholder="Seu nome" onChange={alterarnome}/>
            <input type="number" placeholder="Nota B" onChange={evento => setnotaA(parseInt(evento.target.value)) }/>
            <input type="number" placeholder="Nota A" onChange={evento => setnotaB(parseInt(evento.target.value)) }/>
            <input type="number" placeholder="Nota C" onChange={evento => setnotaC(parseInt(evento.target.value)) }/>
            {renderizacaoNota()}
        </form>
    )
}

export default Formulario