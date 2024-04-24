import styled from "styled-components";
import { FaRegUser, FaRegUserCircle } from "react-icons/fa";

import Login from "../ui/Login";
import Button from "../ui/Button";

const H2 = styled.h2`
  text-align: center;
`;

function HomePage() {
  return (
    <Login>
      <div className="logo-login">
        <FaRegUserCircle
          style={{
            width: "6rem",
            height: "6rem",
          }}
        />
      </div>
      <h1 className="chose-login__title oxygen-regular">You are the</h1>
      <div className="chose-login login">
        <div className="chose-login__button login__button">
          <Button
            to="/loginApprove"
            className="chose-login__button--aprove btn-primary"
          >
            <FaRegUser
              style={{
                paddingRight: "1.5rem",
              }}
            />
            Approve
          </Button>
        </div>

        <div className="chose-login__button login__button">
          <H2 className="chose-login__title oxygen-regular">or</H2>

          <Button
            to="/loginEmployee"
            className="chose-login__button--employee btn-primary"
          >
            <FaRegUser
              style={{
                paddingRight: "1.5rem",
              }}
            />
            Employee
          </Button>
        </div>
      </div>
    </Login>
  );
}

export default HomePage;
