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
      <Display display={display} />
      <Input display={display} setDisplay={setDisplay} />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  /* min-height: 90vh; */
  width: 500px;

  @media (max-width: 768px) {
    width: 80%;
  }

  @media (max-width: 425px) {
    width: 90%;
    margin: 4rem auto;
  }
`;

export default InnerContainer;
