import styled from "styled-components";
import Titulo from "../BarraLateral/Titulo";
import Populares from "../Populares";
import Tags from "./Tags";
import Imagem from "./imagem";

const GaleriaContainer = styled.div`
  display: flex;
  gap: 24px;
`;

const SecaoFluida = styled.section`
  flex-grow: 1;
`;

const ImagemContainer = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 24px;
`;

const Galeria = ({ fotos = [], aoFotoSelecionada, aoAlternarFavorito }) => {
  return (
    <>
      <Tags />
      <GaleriaContainer>
        <SecaoFluida>
          <Titulo>Navegue pela galeria</Titulo>
          <ImagemContainer>
            {fotos.map((foto) => (
              <Imagem
                aoZoomSolicitado={aoFotoSelecionada}
                aoAlternarFavorito={aoAlternarFavorito}
                key={foto.id}
                foto={foto}
              />
            ))}
          </ImagemContainer>
        </SecaoFluida>
        <Populares />
      </GaleriaContainer>
    </>
  );
};

export default Galeria;
