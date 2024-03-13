import { Route, Routes } from "react-router-dom";

import ChoseLogin from "./Components/pages/ChoseLogin";
import LoginApprove from "./Components/pages/LoginApprove";
import LoginEmployee from "./Components/pages/LoginEmployee";
import SingUp from "./Components/pages/SingUp";
import ScreenApprove from "./Components/pages/ScreenApprove";
import Header from "./Components/Header";
import ScreenRequest from "./Components/pages/ScreenRequest";
import ScreenEmployee from "./Components/pages/ScreenEmployee";

function App() {
  return (
    <>
      {/* <Header /> */}

      <Routes>
        <Route index element={<ChoseLogin />} />
        <Route path="/loginApprove" element={<LoginApprove />} />
        <Route path="/loginEmployee" element={<LoginEmployee />}>
          <Route path="screen" element={<ScreenEmployee />} />
        </Route>
        <Route path="/singUp" element={<SingUp />} />
      </Routes>

      {/* <ScreenApprove />  */}
      {/* <ScreenEmployee />{" "} */}
      {/* <ScreenRequest />{" "} */}
    </>
  );
}

export default App;
