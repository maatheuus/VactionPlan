import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AuthProvider from "./context/authUser-context";
// import ModalProvider from "./context/modal-context";
// import FilterProvider from "./context/filterRequests-context";

import HomePage from "./pages/HomePage";
import LoginApprove from "./pages/LoginApprove";
import LoginEmployee from "./pages/LoginEmployee";
// import SingUp from "./pages/SingUp";
import ScreenApprove from "./pages/ScreenApprove";
import Request from "./pages/Request";
import NewRequest from "./pages/NewRequest";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <PageNotFound />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "loginApprove", element: <LoginApprove /> },
      { path: "loginEmployee", element: <LoginEmployee /> },
      // { path: "singUp", element: <SingUp /> },
      { path: "approve", element: <ScreenApprove /> },
      {
        path: "requests",
        element: <Request />,
        children: [{ path: "newRequest", element: <NewRequest /> }],
      },
    ],
  },
]);

function App() {
  return (
    <>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </>
  );
}
// function App() {
//   return (
//     <BrowserRouter>
//       <ModalProvider>
//         <AuthProvider>
//           <FilterProvider>
//             <Routes>
//               <Route path="/" index element={<HomePage />} />
//               <Route path="/loginApprove" element={<LoginApprove />} />
//               <Route path="/loginEmployee" element={<LoginEmployee />} />
//               <Route path="/singUp" element={<SingUp />} />
//               <Route path="/approve" element={<ScreenApprove />} />
//               <Route path="/requests" element={<Request />} />
//               <Route path="/newRequest" element={<NewRequest />} />
//             </Routes>
//           </FilterProvider>
//         </AuthProvider>
//       </ModalProvider>
//     </BrowserRouter>
//   );
// }

export default App;
