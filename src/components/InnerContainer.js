import Header from "./Header";
import Display from "./Display";
import Input from "./Input";
import styled from "styled-components";
import { useState } from "react";

const InnerContainer = ({ themeColor, setThemeColor }) => {
  const [display, setDisplay] = useState("0");

  return (
    <StyledWrapper>
      <Header themeColor={themeColor} setThemeColor={setThemeColor} />
      <Display display={display} setDisplay={setDisplay} />
      <Input display={display} setDisplay={setDisplay} />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  min-height: 90vh;
  width: 400px;
  margin: 4rem auto;
`;

export default InnerContainer;
