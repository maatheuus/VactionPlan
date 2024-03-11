import { Route, Routes } from "react-router-dom";

import ChoseLogin from "./Components/pages/ChoseLogin";
import LoginApprove from "./Components/pages/LoginApprove";
import LoginEmployee from "./Components/pages/LoginEmployee";
import SingUp from "./Components/pages/SingUp";
import ScreenApprove from "./Components/pages/ScreenApprove";

function App() {
  return (
    <>
      {/* <section id="login">
        <div className="content-login">
          <Routes>
            <Route index element={<ChoseLogin />} />
            <Route path="/loginApprove" element={<LoginApprove />} />
            <Route path="/loginEmployee" element={<LoginEmployee />} />
            <Route path="/singUp" element={<SingUp />} />
          </Routes>
        </div>
      </section> */}

      <section>
        <ScreenApprove />
      </section>
    </>
  );
}

export default App;
