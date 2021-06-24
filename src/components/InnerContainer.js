import Header from "./Header";
import Display from "./Display";
import Input from "./Input";
import styled from "styled-components";
import { useState } from "react";

const InnerContainer = () => {
  const [display, setDisplay] = useState(["0"]);

  return (
    <StyledWrapper>
      <Header />
      <Display display={display} setDisplay={setDisplay} />
      <Input display={display} setDisplay={setDisplay} />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  /* margin-top: -2rem; */
  height: 90vh;
  width: 400px;
  /* overflow: hidden; */
`;

export default InnerContainer;
