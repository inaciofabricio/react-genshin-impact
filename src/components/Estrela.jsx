import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Estrela = (props) => {

    return (
        <>
            <div className="estrelas">
                <FontAwesomeIcon className="estrela" icon={faStar} />
                <FontAwesomeIcon className="estrela" icon={faStar} />
                <FontAwesomeIcon className="estrela" icon={faStar} />
                <FontAwesomeIcon className="estrela" icon={faStar} />
                <FontAwesomeIcon className={ props?.raridade === 5 ? "estrela" : "estrela-escura" } icon={faStar} />
            </div>
        </>      
    )
}

export default Estrela;