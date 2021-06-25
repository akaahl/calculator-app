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
  background: hsl(224, 36%, 15%);
  margin-top: 1.5rem;

  padding: 2rem 1rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  overflow: hidden;

  span {
    color: white;
    font-size: 3rem;
    font-weight: 600;
    font-family: "Spartan", sans-serif;
    width: 100%;
    word-wrap: break-word;
    /* overflow: hidden; */
    text-align: right;
  }
`;

export default Display;
