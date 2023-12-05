import { StyledConteudo } from "../style/style.js";
import {useState, useEffect} from "react"
import PersonaCard from "./Artigo.jsx";

const rickURL = import.meta.env.VITE_API;

function Conteudo (){
    const [persoVivos, setStatus] = useState([]);
     const getPersovivos = async (url) =>{
        const res= await fetch(url);
        const data = await res.json();

        setStatus(data.results);
     } 

     useEffect(() =>{

        const persoVivosUrl = `${rickURL}?name=Smith`;

        getPersovivos(persoVivosUrl);

     },[])

    return (
      <StyledConteudo>
           <h2>Personagens</h2>
           <div className="cardContainer">
            {persoVivos.length === 0 && <p>Carregando..</p>}
           {persoVivos.length > 0 && persoVivos.map((persona) => <PersonaCard props={persona} /> )}
           </div>
          
      </StyledConteudo>  
    )
}


export default Conteudo;