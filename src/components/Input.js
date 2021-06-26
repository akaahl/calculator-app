import { useState } from "react";
import styled from "styled-components";
import { evaluate } from "mathjs";

const Input = ({ display, setDisplay }) => {
  const [resultShown, setResultShown] = useState(false);
  const lastChar = display.length - 1;

  const handleNumClick = (e) => {
    // if (display.indexOf(",")) {
    //   setDisplay(
    //     display
    //       .split("")
    //       .map((val) => (val === "," ? "" : val))
    //       .concat(e.target.value)
    //       .join("")
    //   );
    // }

    if (display.length === 1 && display[0] === "0") {
      setDisplay(e.target.value);
    } else if (resultShown) {
      setResultShown(false);
      setDisplay(e.target.value);
    } else {
      setDisplay((prevDisplay) => prevDisplay.concat(e.target.value));
    }
  };

  const handleSignClick = (e) => {
    if (
      display[lastChar] === "+" ||
      display[lastChar] === "-" ||
      display[lastChar] === "/" ||
      display[lastChar] === "*"
    ) {
      setDisplay((prevDisplay) =>
        prevDisplay.slice(0, lastChar).concat(e.target.value)
      );
    } else if (resultShown) {
      setResultShown(false);
      setDisplay("0");
    } else {
      setDisplay((prevDisplay) => prevDisplay.concat(e.target.value));
    }
  };

  const handleReset = (e) => {
    setDisplay("0");
  };

  const handleDelete = (e) => {
    if (display.length === 1) {
      setDisplay("0");
    } else {
      setDisplay((prevDisplay) => prevDisplay.slice(0, prevDisplay.length - 1));
    }
  };

  const handleResult = () => {
    if (
      display === "0-" ||
      display === "0+" ||
      display === "0*" ||
      display === "0/" ||
      display[lastChar] === "+" ||
      display[lastChar] === "-" ||
      display[lastChar] === "*" ||
      display[lastChar] === "/"
    ) {
      return;
    }

    setDisplay(evaluate(display).toLocaleString());
    setResultShown(true);
  };

  return (
    <StyledInput className="input">
      <button className="btn seven" value="7" onClick={handleNumClick}>
        7
      </button>
      <button className="btn eight" value="8" onClick={handleNumClick}>
        8
      </button>
      <button className="btn nine" value="9" onClick={handleNumClick}>
        9
      </button>
      <button className="btn delete" value="delete" onClick={handleDelete}>
        del
      </button>
      <button className="btn four" value="4" onClick={handleNumClick}>
        4
      </button>
      <button className="btn five" value="5" onClick={handleNumClick}>
        5
      </button>
      <button className="btn six" value="6" onClick={handleNumClick}>
        6
      </button>
      <button className="btn plus" value="+" onClick={handleSignClick}>
        +
      </button>
      <button className="btn one" value="1" onClick={handleNumClick}>
        1
      </button>
      <button className="btn two" value="2" onClick={handleNumClick}>
        2
      </button>
      <button className="btn three" value="3" onClick={handleNumClick}>
        3
      </button>
      <button className="btn minus" value="-" onClick={handleSignClick}>
        -
      </button>
      <button className="btn point" value="." onClick={handleNumClick}>
        .
      </button>
      <button className="btn zero" value="0" onClick={handleNumClick}>
        0
      </button>
      <button className="btn divide" value="/" onClick={handleSignClick}>
        /
      </button>
      <button className="btn multiply" value="*" onClick={handleSignClick}>
        x
      </button>
      <button className="btn reset" value="reset" onClick={handleReset}>
        reset
      </button>
      <button className="btn result" value="=" onClick={handleResult}>
        =
      </button>
    </StyledInput>
  );
};

const StyledInput = styled.div`
  background: ${(props) => props.theme.inputBackground};
  margin-top: 2rem;
  width: 100%;
  /* height: 100%; */
  border-radius: 10px;
  padding: 1.5rem;
  display: grid;
  grid-gap: 1.2rem;
  grid-template-areas:
    "seven eight nine del"
    "four five six plus"
    "one two three minus"
    "point zero divide multiply"
    "reset reset result result";

  button {
    background: ${(props) => props.theme.numPadBackground};
    border-radius: 10px;
    border: none;
    height: 3rem;
    color: ${(props) => props.theme.numColor};
    font-size: 1.7rem;
    box-shadow: ${(props) => props.theme.numPadShadow};
    cursor: pointer;
    font-family: "Spartan", sans-serif;
    font-weight: 700;
    transition: all 0.3s ease-in-out;

    &.zero {
      grid-area: zero;
    }

    &.one {
      grid-area: one;
    }

    &.two {
      grid-area: two;
    }

    &.three {
      grid-area: three;
    }

    &.four {
      grid-area: four;
    }

    &.five {
      grid-area: five;
    }

    &.six {
      grid-area: six;
    }

    &.seven {
      grid-area: seven;
    }

    &.eight {
      grid-area: eight;
    }

    &.nine {
      grid-area: nine;
    }

    &.delete {
      grid-area: del;
    }

    &.plus {
      grid-area: plus;
    }

    &.minus {
      grid-area: minus;
    }

    &.multiply {
      grid-area: multiply;
    }

    &.point {
      grid-area: point;
    }

    &.reset {
      grid-area: reset;
    }

    &.result {
      grid-area: result;
    }

    &:active {
      transform: scale(0.9);
      transition: transform 0.1s ease;
    }

    &.delete,
    &.reset {
      font-size: 1.2rem;
      text-transform: uppercase;
      color: ${(props) => props.theme.delFontColor};
      background: ${(props) => props.theme.delBackground};
      box-shadow: ${(props) => props.theme.delShadow};
    }

    &.result {
      background: ${(props) => props.theme.resultBackground};
      box-shadow: ${(props) => props.theme.resultShadow};
      color: ${(props) => props.theme.resultFontColor};
      font-size: 1rem;
    }
  }
`;

export default Input;
