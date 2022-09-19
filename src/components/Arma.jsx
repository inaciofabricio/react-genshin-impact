import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Arma = (props) => {

    function getArma(arma) {
       
        let res = "";

        if(!props?.IsFetching) {

            let verifica = <div>
                <FontAwesomeIcon icon={faTriangleExclamation} />
            </div>;

            if(props.data) {
                props?.data.forEach(i => {
                    if(i.id === arma) {
                        verifica = <div>
                                <img className="card_icone" src={i.image} alt={`Ícone da arma ${i.nome}`} />
                            </div>;
                    }
                });
            }

            res = verifica;
        }

        return res;
    }

    return (
        <div>{ getArma(props?.arma) }</div>
    )

}

export default Arma;