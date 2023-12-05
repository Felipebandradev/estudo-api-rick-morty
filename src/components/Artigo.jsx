import { StyledArtigo } from "../style/style"


const PersonaCard = ({props}) => {
    

 

    return (
        <StyledArtigo>
            <img src={props.image} alt={props.name} />
            <div>
                <h3>{props.name}</h3>
                <p>Aparições:<b> {props.episode.length}</b></p>
                <p>Especie: <b>{props.species}</b></p>
                <p>Status: <b>{props.status}</b></p>
            </div>
        </StyledArtigo>
    )
}

export default PersonaCard