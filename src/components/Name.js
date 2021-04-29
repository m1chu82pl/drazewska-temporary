import styled from "styled-components";

const Wrapper = styled.div`
height: 35%;
padding: 7% 0 0 5%;
`;
const Tittle = styled.p`
font-weight: 500;`;

const Name = () => {
  return (
    <Wrapper>
      <Tittle>
        Kasia Drazewska,
        <br />
        Creative Copywriter.
      </Tittle>
    </Wrapper>
  );
};

export default Name;
