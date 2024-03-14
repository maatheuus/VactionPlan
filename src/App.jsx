import { Route, Routes } from "react-router-dom";

import HomePage from "./Components/pages/HomePage";
import LoginApprove from "./Components/pages/LoginApprove";
import LoginEmployee from "./Components/pages/LoginEmployee";
import SingUp from "./Components/pages/SingUp";
import ScreenApprove from "./Components/pages/ScreenApprove";
import ScreenRequest from "./Components/pages/ScreenRequest";
import ScreenEmployee from "./Components/pages/ScreenEmployee";

function App() {
  return (
    <>
      {/* <Header /> */}

      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/loginApprove" element={<LoginApprove />} />
        <Route path="/loginEmployee" element={<LoginEmployee />} />
        <Route path="/singUp" element={<SingUp />} />
        <Route path="/approve" element={<ScreenApprove />} />
        <Route path="/employee" element={<ScreenEmployee />} />
        <Route path="/request" element={<ScreenRequest />} />
      </Routes>

      {/* <ScreenApprove />  */}
      {/* <ScreenEmployee />{" "} */}
      {/* <ScreenRequest />{" "} */}
    </>
  );
}

export default App;
