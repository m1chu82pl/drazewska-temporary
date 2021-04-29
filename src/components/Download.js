import styled from "styled-components";
import { ArrowDown } from "@styled-icons/entypo/ArrowDown";

const Wrapper = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  text-decoration: none;

  &:hover {
    cursor: pointer;
  }
`;

const Tittle = styled.p`
  text-align: center;
`;

const DownloadArrow = styled(ArrowDown)`
  width: 35px;
  margin: 0 auto;
  color: white;
  transition: 0.25s ease-out;

  &:hover {
    transform: translateY(5px);
  }
`;

const Download = () => {
  return (
    <Wrapper download href={process.env.PUBLIC_URL + '/Kasia_Drazewska_Creative_Copy.pdf'}>
      <DownloadArrow />
      <Tittle >Get portfolio.</Tittle>
    </Wrapper>
  );
};

export default Download;
