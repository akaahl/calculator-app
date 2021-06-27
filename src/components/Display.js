import styled from "styled-components";
import { useState, useEffect } from "react";

const Display = ({ display }) => {
  const [printValue, setPrintValue] = useState("");

  useEffect(() => {
    setPrintValue(
      `${display}`.replace(/[0-9]+/g, (num) => (+num).toLocaleString())
    );
  }, [display]);
  return (
    <StyledDisplay className="display">
      <span>{printValue}</span>
    </StyledDisplay>
  );
};

const StyledDisplay = styled.div`
  width: 100%;
  min-height: 6rem;
  border-radius: 10px;
  background: ${(props) => props.theme.displayBackground};
  margin-top: 1.5rem;
  padding: 2rem 1rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  overflow: hidden;
  transition: background 0.3s ease-in-out;

  span {
    color: ${(props) => props.theme.fontColor};
    font-size: 3rem;
    font-weight: 700;
    font-family: "Spartan", sans-serif;
    width: 100%;
    word-wrap: break-word;
    text-align: right;
    transition: color 0.3s ease-in-out;
  }

  @media (max-width: 425px) {
    min-height: 5rem;
    padding: 1rem;

    span {
      font-size: 2rem;
    }
  }
`;

export default Display;
