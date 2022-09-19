import { faMars, faVenus, faVenusMars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FiltroSexo = (props) => {

    return (
        <div className="filtro">
            <div className="filtros__titulo">Sexo:</div>
            <div className="filtros__lista">
                <div className={ 'm' === props?.sexo?.id?.toLowerCase() ? "filtros__icone filtro__ativo" : "filtros__icone" }>
                    <abbr title="Masculino">
                        <FontAwesomeIcon onClick={() => props.filtrar({id: "m", nome: "Masculino"})} icon={faMars} />
                    </abbr>
                </div>
                <div className={ 'f' === props?.sexo?.id?.toLowerCase() ? "filtros__icone filtro__ativo" : "filtros__icone" }>
                    <abbr title="Feminino">
                        <FontAwesomeIcon onClick={() => props.filtrar({id: "f", nome: "Feminino"})} icon={faVenus} />
                    </abbr>
                </div>
                <div className={ 'fm' === props?.sexo?.id?.toLowerCase() ? "filtros__icone filtro__ativo" : "filtros__icone" }>
                    <abbr title="Indefinido">
                        <FontAwesomeIcon onClick={() => props.filtrar({id: "fm", nome: "Indefinido"})} icon={faVenusMars} />
                    </abbr>
                </div>
            </div>
        </div>
    )
}

export default FiltroSexo;