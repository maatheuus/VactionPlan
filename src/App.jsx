import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";

import ProtectedRoute from "./ui/ProtectedRoute";
import ModalProvider from "./context/modal-context";

import HomePage from "./pages/HomePage";
import LoginApprove from "./features/authentication/LoginApprove";
import LoginEmployee from "./features/authentication/LoginEmployee";
import NewUser from "./features/approve/NewUser";
import NewRequestsPage from "./pages/NewRequestPage";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import Approve from "./pages/Approve";
import Employee from "./pages/Employee";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <AppLayout />
      </ProtectedRoute>
    ),
    errorElement: <PageNotFound />,
    children: [
      // { index: true, element: <Navigate replace to="/" /> },

      {
        path: "approver",
        element: <Approve />,
        children: [{ path: "register", element: <NewUser /> }],
      },
      { path: "requests", element: <Employee /> },
      { path: "newRequest", element: <NewRequestsPage /> },
    ],
  },
  {
    path: "login",
    element: <HomePage />,
    children: [
      { path: "approver", element: <LoginApprove /> },
      { path: "employee", element: <LoginEmployee /> },
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
      <ReactQueryDevtools />
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
    </QueryClientProvider>
  );
}

export default App;
