import { FaRegUser, FaRegUserCircle } from "react-icons/fa";
import { Outlet, useLocation } from "react-router-dom";

import Login from "./Login";
import Button from "../ui/Button";

function HomePage() {
  const { pathname } = useLocation();
  const url = pathname.replace("/", "");
  return (
    <>
      {url === "login" && (
        <Login>
          <div className="logo-login">
            <FaRegUserCircle />
          </div>
          <h1 className="chose-login__title oxygen-regular">You are the</h1>
          <div className="chose-login login">
            <div>
              <Button
                to="approver"
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
            <h2 className="chose-login__title oxygen-regular">or</h2>

            <div>
              <Button
                to="employee"
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
      )}
      <Outlet />
    </>
  );
}

export default HomePage;
