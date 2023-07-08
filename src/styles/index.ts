import styled from "styled-components";

export const ScrollbarThumb = styled.div`
  /* Estilizando a barra de rolagem */
  ::-webkit-scrollbar {
    width: 5px;
  }

  /* Estilizando o "thumb" ou a parte móvel da barra de rolagem */
  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 2px;
  }

  /* Adicionando hover ao "thumb" */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;
