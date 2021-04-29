import styled from "styled-components";
import Download from "./Download";

const Wrapper = styled.div`
display: flex;
justify-content: space-between;
align-items: flex-end;
height: 12%;
width: 100%;
padding: 0 10% 0 5%;
`;
const Tittle = styled.p``;

const Contact = () => {
  return (
    <Wrapper>
      <Tittle>
        Contact me:
        <br />
        drazewska@gmail.com
        <br />
        +48 737 447 802
      </Tittle>
      <Download/>
    </Wrapper>
  );
};

export default Contact;
