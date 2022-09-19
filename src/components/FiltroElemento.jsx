const FiltroElemento = (props) => {

    let data = [];

    if(!props?.isFetching) {

        props?.data.forEach(i => { 

            let obj = false;

            if(props?.personagens) {
                props?.personagens.forEach(j => {
                    if(i.id === j.elemento) {
                        obj = true;
                    }
                });
            }

            if(obj) {
                data.push(i);
            }
        });
    }

    return (
        <div className="filtro">
            <div className="filtros__titulo">Elementos:</div>
                {
                    !props?.isFetching && !props?.error &&
                    <div className="filtros__lista">
                        {
                            data.map((obj, x) => {
                                return (
                                    <div key={x} className={ obj.id.toLowerCase() === props?.elemento?.id?.toLowerCase() ? "filtro__ativo" : "" }>
                                        <abbr title={obj.nome}>
                                            <img className="filtros__img35" onClick={() => props.filtrar(obj)} src={obj.image} alt={`Ícone do elemento ${obj.nome}`} />
                                        </abbr>
                                    </div>
                                )
                            })
                        }
                    </div>
                }
        </div>
    )
}

export default FiltroElemento;