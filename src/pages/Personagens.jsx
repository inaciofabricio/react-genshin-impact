import { useEffect, useState } from "react";
import { faMars, faVenus, faVenusMars, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useApi from "../hooks/useApi";
import Error from "../components/Error";
import Fetching from "../components/Fetching";
import Estrela from "../components/Estrela";
import Sexo from "../components/Sexo";
import Elemento from "../components/Elemento";
import Arma from "../components/Arma";
import FiltroElemento from "../components/FiltroElemento";
import FiltroSexo from "../components/FiltroSexo";
import FiltroArma from "../components/FiltroArma";
import FiltroNacao from "../components/FiltroNacao";
import FiltroRaridade from "../components/FiltroRaridade";
import { Link } from "react-router-dom";

const Personagens = () => {

    const { data: personagensData, error: personagensError, isFetching: personagensIsFetching } = useApi("personagens");
    const { data: armasData, error: armasError, isFetching: armasIsFetching  } = useApi("armas");
    const { data: elementosData, error: elementosError, isFetching: elementosIsFetching  } = useApi("elementos");
    const { data: nacoesData, error: nacoesError, isFetching: nacoesIsFetching  } = useApi("nacoes");

    let [elemento, setElemento] = useState({id: "", nome: ""});
    let [arma, setArma] = useState({id: "", nome: ""});
    let [sexo, setSexo] = useState({id: "", nome: ""});
    let [nacao, setNacao] = useState({id: "", nome: ""});
    let [raridade, setRaridade] = useState({id: "", nome: ""});
    let [personagens, setPersonagens] = useState([]);  

    function trataNome(nome) {
        let n = nome.split(" ")
        return n[1] ? n[1] : n[0]; 
    }
    
    useEffect(() => {

        if(elemento.id || arma.id || sexo.id || nacao.id || raridade.id) {
            setPersonagens(personagensData?.filter(obj => (
                (elemento?.id ? obj.elemento.toLowerCase() === elemento?.id?.toLowerCase() : true) && 
                (arma?.id ? obj.arma.toLowerCase() === arma?.id?.toLowerCase() : true) && 
                (sexo?.id ? obj.sexo.toLowerCase() === sexo?.id?.toLowerCase() : true) &&
                (nacao?.id ? obj.nacao.toLowerCase() === nacao?.id?.toLowerCase() : true) &&
                (raridade?.id ? obj.raridade === raridade?.id : true)
            )));
        } else {
            setPersonagens(personagensData);
        }
    }, [elemento, arma, sexo, nacao, raridade, personagensData]);

    function limparFiltro() {
        setElemento({id: "", nome: ""});
        setArma({id: "", nome: ""});
        setSexo({id: "", nome: ""});
        setNacao({id: "", nome: ""});
        setRaridade({id: "", nome: ""});
    }

    function filtrarPorElemento(e) {
        let obj = elemento.id !== e.id ? e : "";
        setElemento(obj);
    }

    function filtrarPorArma(e) {
        let obj = arma.id !== e.id ? e : "";
        setArma(obj);
    }

    function filtrarPorSexo(e) {
        let obj = sexo.id !== e.id ? e : "";
        setSexo(obj);
    }

    function filtrarPorNacao(e) {
        let obj = nacao.id !== e.id ? e : "";
        setNacao(obj);
    }

    function filtrarPorRaridade(e) {
        let obj = raridade.id !== e.id ? e : "";
        setRaridade(obj);
    }

    return (
        <>
            <h2 className="titulo">Personagens</h2>
            { 
                personagensIsFetching && <Fetching />
            }
            { 
                personagensError && <Error error={personagensError} />             
            }
            <div className="info">
                <div className="filtros">
                    <FiltroElemento filtrar={filtrarPorElemento} elemento={elemento} personagens={personagensData}  data={elementosData} error={elementosError} isFetching={elementosIsFetching} />
                    <FiltroArma filtrar={filtrarPorArma} arma={arma} personagens={personagensData}  data={armasData} error={armasError} isFetching={armasIsFetching} />
                    <FiltroSexo filtrar={filtrarPorSexo} sexo={sexo}/>
                    <FiltroNacao filtrar={filtrarPorNacao} nacao={nacao} personagens={personagensData} data={nacoesData} error={nacoesError} isFetching={nacoesIsFetching} />
                    <FiltroRaridade filtrar={filtrarPorRaridade} raridade={raridade} />
                    { (elemento.id || arma.id || sexo.id || nacao.id || raridade.id) && <button className="botao-limpar" onClick={limparFiltro}>Limpar</button> }
                </div>
                { 
                    !personagensIsFetching && !personagensError && 
                    <div>
                        { 
                            (elemento.id || arma.id || sexo.id || nacao.id) && 
                            <div className="filtros__titulo">Filtro(s): 
                                {elemento?.id && <span> [<img className="filtros__img20" src={elemento.image} alt={`Ícone do elemento ${elemento.nome}`} />{ elemento?.nome }] </span>} 
                                {arma?.id && <span> [<img className="filtros__img20" src={arma.image} alt={`Ícone do elemento ${arma.nome}`} />{ arma?.nome }] </span>} 
                                {sexo?.id && <span> [<FontAwesomeIcon icon={sexo.id === "m" ? faMars : sexo.id === "f" ? faVenus : faVenusMars} />{ sexo?.nome }] </span>} 
                                {nacao?.id && <span> [<img className="filtros__img20" src={nacao.image} alt={`Ícone do elemento ${nacao.nome}`} />{ nacao?.nome }] </span>}
                                {raridade?.id && <span> [{raridade?.id}<FontAwesomeIcon className="estrela" icon={faStar} />] </span>}
                            </div> 
                        }
                        <div className="personagens">
                            {
                                personagens?.map((obj, x) => {
                                    return (
                                        <div key={x} className="personagem">
                                            <div className={`personagem__img ${obj?.elemento}-bc`}>
                                                <Link to={`personagem/${obj?.id}`}>
                                                <img src={ obj?.image } alt="" />
                                                </Link>
                                            </div>
                                            <div>
                                                <div className="personagem__info">
                                                    <div className="personagem__nome">{ trataNome(obj?.nome) }</div>
                                                    <div className="personagem__nacao">{ obj?.nacao }</div>                                
                                                    <Estrela raridade={ obj?.raridade } />
                                                </div>
                                                <div className="personagem__extra">
                                                    <Elemento data={elementosData} error={elementosError} isFetching={elementosIsFetching} elemento={ obj?.elemento } />
                                                    <Arma data={armasData} error={armasError} isFetching={armasIsFetching} arma={ obj?.arma } />
                                                    <Sexo sexo={ obj?.sexo } />
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            {
                                personagens.length === 0 &&
                                <div className="sem-resultado">
                                    Sem resultados!
                                </div>
                            }
                        </div>
                    </div>
                   
                }
            </div>
        </>
    )
}

export default Personagens;