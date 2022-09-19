const FiltroNacao = (props) => {

    let data = [];

    if(!props?.isFetching) {

        props?.data.forEach(i => { 

            let obj = false;

            if(props?.personagens) {
                props?.personagens.forEach(j => {
                    if(i.id === j.nacao.toLowerCase()) {
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
            <div className="filtros__titulo">Nações:</div>
                {
                    !props?.isFetching && !props?.error &&
                    <div className="filtros__lista">
                        {
                            data.map((obj, x) => {
                                return (
                                    <div key={x} className={ obj.id.toLowerCase() === props?.nacao?.id?.toLowerCase() ? "filtro__ativo" : "" }>
                                        <abbr title={obj.nome}>
                                            <img className="filtros__img35" onClick={() => props.filtrar(obj)} src={obj.image} alt={`Ícone do ${props?.titulo} ${obj.nome}`} />
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

export default FiltroNacao;