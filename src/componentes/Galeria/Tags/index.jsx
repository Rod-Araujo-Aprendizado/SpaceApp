import styled from "styled-components";
import tags from "./tags.json";
const ContainerTags = styled.div`
  display: flex;
  align-items: center;
  margin: 56px 0 20px 0;
`;
const TagTitulo = styled.h3`
  color: #d9d9d9;
  font-size: 24px;
  margin: 0;
  padding: 0 27px 0 0;
`;
const TagEstilizada = styled.button`
  margin: 0px 9px 0px 9px;
  font-size: 24px;
  color: #fff;
  background: rgba(217, 217, 217, 0.3);
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  padding: 12px;
  box-sizing: border-box;
  border: 2px solid transparent;
  &:hover {
    border-color: #c98cf1;
  }
`;

const Tags = () => {
  return (
    <ContainerTags>
      <TagTitulo>Busque por tags:</TagTitulo>
      {tags.map((tag) => (
        <TagEstilizada key={tag.id}>{tag.titulo}</TagEstilizada>
      ))}
    </ContainerTags>
  );
};

export default Tags;
