import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AuthProvider from "./context/authUser-context";
import ModalProvider from "./context/modal-context";
// import FilterProvider from "./context/filterRequests-context";

import HomePage from "./pages/HomePage";
import LoginApprove from "./pages/LoginApprove";
import LoginEmployee from "./pages/LoginEmployee";
import NewUser from "./pages/NewUser";
import ScreenApprove from "./pages/ScreenApprove";
import Request from "./pages/Request";
import NewRequest from "./pages/NewRequest";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <PageNotFound />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "loginApprove", element: <LoginApprove /> },
      { path: "loginEmployee", element: <LoginEmployee /> },
      {
        path: "approve",
        element: <ScreenApprove />,
        children: [{ path: "register", element: <NewUser /> }],
      },
      { path: "requests", element: <Request /> },
      { path: "newRequest", element: <NewRequest /> },
    ],
  },
]);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* <ReactQueryDevtools /> */}
      <AuthProvider>
        <ModalProvider>
          <RouterProvider router={router} />
          <Toaster
            position="top-right"
            gutter={12}
            containerStyle={{ margin: "8px" }}
            toastOptions={{
              success: {
                duration: 3000,
              },
              error: {
                duration: 5000,
              },
              style: {
                fontSize: "16px",
                maxWidth: "500px",
                padding: "16px 24px",
                backgroundColor: "var(--color-white-primary)",
                color: "var(--color-black-primary)",
                zIndex: "5000",
              },
            }}
          />
        </ModalProvider>
      </AuthProvider>
    </QueryClientProvider>
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
