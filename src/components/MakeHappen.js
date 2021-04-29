import styled from 'styled-components';

const Wrapper = styled.div`
height: 10%;
padding: 0 0 0 5%;
`;
const FirstLine = styled.p``;
const SecondLine = styled.p`
font-style: italic;
`;

const MakeHappen = () => {
  return ( 
    <Wrapper>
      <FirstLine>I can make that magic happen.</FirstLine>
      <SecondLine>Word. By. Word.</SecondLine>
    </Wrapper>
   );
}
 
export default MakeHappen;
