import { faMars, faVenus, faVenusMars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sexo = (props) => {
    
    function getSexo(sexo) {
       
        if(sexo.toLowerCase() === "m") {
            return <div>
                <FontAwesomeIcon className="sexo__icon" icon={faMars} />
            </div> 
        } else if(sexo.toLowerCase() === "f") { 
            return <div>
                <FontAwesomeIcon className="sexo__icon" icon={faVenus} />
            </div> 
        } else {
            return <div>
                <FontAwesomeIcon className="sexo__icon" icon={faVenusMars} />
            </div> 
        }
    }

    return (
        <div>{ getSexo(props?.sexo) }</div>
    )
}

export default Sexo;