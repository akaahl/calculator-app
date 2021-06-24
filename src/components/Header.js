import styled from "styled-components";
import { useState } from "react";

const Header = () => {
  const [theme, setTheme] = useState(1);

  return (
    <StyledHeader>
      <h1>calc</h1>

      <div className="theme-switcher">
        <span>Theme</span>
        <div
          className={
            theme === 1
              ? "theme-toggler one"
              : theme === 2
              ? "theme-toggler two"
              : theme === 3
              ? "theme-toggler three"
              : "theme-toggler"
          }
        >
          <div className="circle"></div>
          <button className="btn one" onClick={() => setTheme(1)}>
            1
          </button>
          <button className="btn two" onClick={() => setTheme(2)}>
            2
          </button>
          <button className="btn three" onClick={() => setTheme(3)}>
            3
          </button>
        </div>
      </div>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    color: hsl(0, 0%, 100%);
    font-size: 2rem;
  }

  .theme-switcher {
    display: flex;
    align-items: center;

    span {
      text-transform: uppercase;
      color: hsl(0, 0%, 100%);
      font-weight: 500;
      font-size: 0.8rem;
      margin-right: 1rem;
    }

    .theme-toggler {
      width: 4.2rem;
      height: 1.5rem;
      border-radius: 1.5rem;
      background: hsl(223, 31%, 20%);
      padding: 5px;
      display: flex;
      align-items: center;
      /* justify-content: flex-start; */
      position: relative;
      transition: all 0.5s ease-in-out;

      &.one {
        .circle {
          left: 7%;
        }
      }

      &.two {
        .circle {
          left: 38%;
        }
      }

      &.three {
        .circle {
          left: 68%;
        }
      }

      .circle {
        position: absolute;
        left: 7%;
        height: 1rem;
        width: 1rem;
        background: hsl(25, 98%, 40%);
        border-radius: 50%;
        transition: all 0.3s ease-in-out;
      }

      .btn {
        position: absolute;
        background: none;
        border: none;
        cursor: pointer;
        color: hsl(0, 0%, 100%);
        font-weight: 500;

        &.one {
          top: -1.2rem;
          left: 10%;
        }

        &.two {
          top: -1.2rem;
          left: 42%;
        }

        &.three {
          top: -1.2rem;
          left: 75%;
        }
      }
    }
  }
`;

export default Header;
