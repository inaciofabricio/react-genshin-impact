import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FiltroRaridade = (props) => {

    return (
        <div className="filtro">
            <div className="filtros__titulo">Raridade:</div>
            <div className="filtros__lista">
                <div className={ 4 === props?.raridade?.id ? "filtros__icone filtro__ativo" : "filtros__icone" }>
                    4<FontAwesomeIcon className="estrela" onClick={() => props.filtrar({id: 4, nome: 4})} icon={faStar} />
                </div>
                <div className={ 5 === props?.raridade?.id ? "filtros__icone filtro__ativo" : "filtros__icone" }>
                    5<FontAwesomeIcon className="estrela" onClick={() => props.filtrar({id: 5, nome: 5})} icon={faStar} />
                </div>
            </div>
        </div>
    )
}

export default FiltroRaridade;