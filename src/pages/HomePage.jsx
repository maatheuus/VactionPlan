import { Outlet, useLocation } from "react-router-dom";

import Login from "./Login";
import Button from "../ui/Button";

function HomePage() {
  const { pathname } = useLocation();
  const url = pathname.replace("/", "");
  return (
    <div className="h-screen">
      {url === "login" && (
        <Login>
          <div>
            <Button variation="primary" to="approver">
              Approver
            </Button>
          </div>

          <div className="mt-6">
            <Button variation="primary" to="employee">
              Employer
            </Button>
          </div>
        </Login>
      )}

      <Outlet />
    </div>
  );
}

export default HomePage;
