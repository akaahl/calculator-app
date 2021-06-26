import { useState } from "react";
import GlobalStyle from "./globalStyles";
import styled from "styled-components";
import InnerContainer from "./components/InnerContainer";
import { ThemeProvider } from "styled-components";
import { themeOne, themeTwo, themeThree } from "./themes";

function App() {
  const [themeColor, setThemeColor] = useState(1);

  return (
    <ThemeProvider
      theme={
        themeColor === 1 ? themeOne : themeColor === 2 ? themeTwo : themeThree
      }
    >
      <StyledContainer className="App">
        <GlobalStyle />
        <InnerContainer themeColor={themeColor} setThemeColor={setThemeColor} />
      </StyledContainer>
    </ThemeProvider>
  );
}

const StyledContainer = styled.main`
  width: 100%;
  height: 100vh;
  background: ${(props) => props.theme.mainBackground};
  overflow-y: scroll;
  transition: background 0.3s ease-in-out;
`;

export default App;
