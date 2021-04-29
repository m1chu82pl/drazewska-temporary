import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
height: 3%;
display: flex;
justify-content: flex-end;
align-items: flex-end;
`;

const FooterText = styled.p`
padding: 0 2% 0 0;
font-weight: 200;
font-size: 10px;
cursor: none;
`;

const Footer = () => {

  const initialDate = new Date();
  const year = initialDate.getFullYear();

  return ( 
    <Wrapper>
      <FooterText>©{year}</FooterText>
    </Wrapper>
   );
}
 
export default Footer;
