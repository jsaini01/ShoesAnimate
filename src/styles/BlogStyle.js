import styled from "styled-components";

export const Images = styled.div`
  padding: 1vw;
`;

export const Btns = styled.div`
  margin: 1vw;
`;

export const Button = styled.button`
  padding: 0.5vw 2vw;
`;

export const Allimages = styled.div`
  display: grid;
  grid-template-areas: "blog block" "blog commercial";
  justify-content: center;
  align-items: center;
  gap: 1vw;
  position: relative;
`;

export const Blogimages = styled.div`
  grid-area: blog;
  width: 33vw;
`;

export const BlogImg = styled.img`
  height: calc(100% - 2.5%);
  animation: blogs 3s;
  @keyframes blogs {
    0% {
      position: absolute;
      top: 0;
      width: 33vw;
      height: 33vw;
    }
    25% {
      position: absolute;
      top: 0;
      width: 33vw;
      height: 25vw;
    }
    50% {
      position: absolute;
      top: 15vw;
      width: 33vw;
      height: 25vw;
    }

    100% {
      position: absolute;
      top: 15vw;
      left: 30vw;
      width: 33vw;
      height: 25vw;
    }
  }
`;

export const Blockimages = styled.div`
  grid-area: block;
`;
export const BlockImg = styled.img``;

export const Commercialimages = styled.div`
  grid-area: commercial;
`;
export const CommercialImg = styled.img``;
