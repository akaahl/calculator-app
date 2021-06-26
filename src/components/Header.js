import styled from "styled-components";

const Header = ({ themeColor, setThemeColor }) => {
  return (
    <StyledHeader>
      <h1>calc</h1>

      <div className="theme-switcher">
        <span>Theme</span>
        <div
          className={
            themeColor === 1
              ? "theme-toggler one"
              : themeColor === 2
              ? "theme-toggler two"
              : themeColor === 3
              ? "theme-toggler three"
              : "theme-toggler"
          }
        >
          <div className="circle"></div>
          <button className="btn one" onClick={() => setThemeColor(1)}>
            1
          </button>
          <button className="btn two" onClick={() => setThemeColor(2)}>
            2
          </button>
          <button className="btn three" onClick={() => setThemeColor(3)}>
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
    color: ${(props) => props.theme.fontColor};
    font-size: 2rem;
    transition: color 0.3s ease-in-out;
  }

  .theme-switcher {
    display: flex;
    align-items: center;

    span {
      text-transform: uppercase;
      color: ${(props) => props.theme.fontColor};
      font-weight: 700;
      font-size: 0.8rem;
      margin-right: 1rem;
      transition: color 0.3s ease-in-out;
    }

    .theme-toggler {
      width: 4.2rem;
      height: 1.5rem;
      border-radius: 1.5rem;
      background: ${(props) => props.theme.togglerBackground};
      padding: 5px;
      display: flex;
      align-items: center;
      position: relative;
      transition: all 0.2s ease-in-out;

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
        background: ${(props) => props.theme.togglerCircle};
        border-radius: 50%;
        transition: all 0.3s ease-in-out;
      }

      .btn {
        position: absolute;
        background: none;
        border: none;
        cursor: pointer;
        color: ${(props) => props.theme.fontColor};
        font-weight: 600;
        transition: color 0.3s ease-in-out;

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
