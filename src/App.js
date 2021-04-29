import styled from "styled-components";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import MakeHappen from "./components/MakeHappen";
import Name from "./components/Name";
import Preface from "./components/Preface";

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 200vh;
  background: #1f1f2e;
`;
 
function App() {
  return (
    <Wrapper>
      <Preface/>
      <MakeHappen/>
      <Name/>
      <Contact/>
      <Footer/>
    </Wrapper>
  );
}

export default App;
