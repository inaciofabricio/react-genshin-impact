import { useParams } from "react-router";
import useApi from "../hooks/useApi";
import styled from "styled-components";
import Fetching from "../components/Fetching";
import Error from "../components/Error";
import Estrela from "../components/Estrela";
import Elemento from "../components/Elemento";
import Arma from "../components/Arma";

const Main = styled.div`
    display: flex;
`;

const DivImg = styled.div`
    padding: 10px;
`;

const Image = styled.img`
    border: 1px solid #F1F1F1;
    padding: 10px;
    box-shadow: 2px 2px #FFFFFF;
`;

const DivInfo = styled.div`
    padding: 10px;
`;

const DivDescricao = styled.div`
    padding: 10px;
`;

const Bloco = styled.div`
    display: flex;
    align-items: center;
    margin: 0 0 10px 0;
`;

const Titulo = styled.div`
    font-weight: 600;
    margin-right: 5px;
    line-height: 30px;
`;

const Texto = styled.div`
    font-weight: 400;
    margin-right: 5px;
    line-height: 30px;
`;

const TextoDescricao = styled.div`
    font-weight: 400;
    margin-right: 5px;
    line-height: 25px;
    text-align: justify;
    padding: 0 0 0 15px;
`;

const Personagem = () => {

    let params = useParams();
    const { data: dataPersonagem, error: errorPersonagem, isFetching: isFetchingPersonagem } = useApi(`/personagem/${params?.id}`);
    const { data: elementosData, error: elementosError, isFetching: elementosIsFetching  } = useApi("elementos");
    const { data: armasData, error: armasError, isFetching: armasIsFetching  } = useApi("armas");
   
    return (
        <>
            { 
                isFetchingPersonagem && <Fetching />
            }
            { 
                errorPersonagem && <Error error={errorPersonagem} />             
            }
            {
                !isFetchingPersonagem && !errorPersonagem && 
                <Main>
                    <DivImg>
                        <Image src={dataPersonagem?.image} alt={`Imagem do personagem ${dataPersonagem?.nome}`} />
                    </DivImg>
                    <DivInfo>
                        <Bloco>
                            <Titulo>Nome:</Titulo> 
                            <Texto>{dataPersonagem?.nome}</Texto>
                        </Bloco>
                        <Bloco>
                            <Titulo>Nação:</Titulo> 
                            <Texto>{dataPersonagem?.nacao?.nome}</Texto>
                        </Bloco>
                        <Bloco>
                            <Titulo>Elemento:</Titulo> 
                            <Texto>{dataPersonagem?.elemento.nome}</Texto>
                            <Elemento data={elementosData} error={elementosError} isFetching={elementosIsFetching} elemento={dataPersonagem?.elemento?.id} />
                        </Bloco>
                        <Bloco>
                            <Titulo>Arma:</Titulo> 
                            <Texto>{dataPersonagem?.arma?.nome}</Texto>
                            <Arma data={armasData} error={armasError} isFetching={armasIsFetching} arma={dataPersonagem?.arma?.id} />
                        </Bloco>
                        <Bloco>
                            <Titulo>Raridade:</Titulo>
                            <Estrela raridade={dataPersonagem?.raridade}/> 
                        </Bloco>
                    </DivInfo>
                    <DivDescricao>
                        <div>
                            <Titulo>Sobre:</Titulo>
                            <TextoDescricao>{dataPersonagem?.descricao}</TextoDescricao>
                        </div>
                    </DivDescricao>
                </Main>
            }
        </>
    )
}

export default Personagem;