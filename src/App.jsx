import { Route, Routes, BrowserRouter } from "react-router-dom";
import ModalProvider from "./Components/context/modal-context";
import AuthProvider from "./Components/context/authUser-context";
import FilterProvider from "./Components/context/filterRequests-context";

import HomePage from "./Components/pages/HomePage";
import LoginApprove from "./Components/pages/LoginApprove";
import LoginEmployee from "./Components/pages/LoginEmployee";
import SingUp from "./Components/pages/SingUp";
import ScreenApprove from "./Components/pages/ScreenApprove";
import Request from "./Components/pages/Request";
import NewRequest from "./Components/pages/NewRequest";

function App() {
  return (
    <BrowserRouter>
      <ModalProvider>
        <AuthProvider>
          <FilterProvider>
            <Routes>
              <Route path="/" index element={<HomePage />} />
              <Route path="/loginApprove" element={<LoginApprove />} />
              <Route path="/loginEmployee" element={<LoginEmployee />} />
              <Route path="/singUp" element={<SingUp />} />
              <Route path="/approve" element={<ScreenApprove />} />
              <Route path="/requests" element={<Request />} />
              <Route path="/newRequest" element={<NewRequest />} />
            </Routes>
          </FilterProvider>
        </AuthProvider>
      </ModalProvider>
    </BrowserRouter>
  );
}

export default App;
