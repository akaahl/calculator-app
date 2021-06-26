import styled from "styled-components";

const Display = ({ display, setDisplay }) => {
  return (
    <StyledDisplay className="display">
      <span>{display}</span>
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
    /* overflow: hidden; */
    text-align: right;
    transition: color 0.3s ease-in-out;
  }
`;

export default Display;
