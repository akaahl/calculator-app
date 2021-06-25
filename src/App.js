import GlobalStyle from "./globalStyles";
import styled from "styled-components";
import InnerContainer from "./components/InnerContainer";

function App() {
  return (
    <StyledContainer className="App">
      <GlobalStyle />
      <InnerContainer />
    </StyledContainer>
  );
}

const StyledContainer = styled.main`
  width: 100%;
  height: 100vh;
  /* display: flex;
  align-items: center;
  justify-content: center; */
  background: hsl(222, 26%, 31%);
  overflow-y: scroll;
`;

export default App;
