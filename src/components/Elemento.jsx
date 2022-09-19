import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Elemento = (props) => {

    function getElemento(elemento) {

        let res = "";

        if(!props?.IsFetching) {

            let verifica = <div>
                <abbr title="Adaptável">
                    <FontAwesomeIcon icon={faTriangleExclamation} />
                </abbr>
            </div>;
           
            if(props.data) {
                props.data.forEach(i => {
                    if(i.id === elemento) {
                        verifica = <div>
                            <img className="card_icone" src={i.image} alt={`Ícone do elemento ${i.nome}`} />
                        </div>;
                    }
                });
            }

            res = verifica;
        }

        return res;
    }

    return (
        <>{ getElemento(props?.elemento) }</>
    )
}

export default Elemento;