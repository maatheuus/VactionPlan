import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";

import MenuProvider from "./context/menu-context";

import HomePage from "./pages/HomePage";
import AppLayout from "./pages/AppLayout";
import PageNotFound from "./pages/PageNotFound";
import Approver from "./pages/Approver";
import Employee from "./pages/Employee";
import NewRequestsPage from "./pages/NewRequestPage";

import LoginApprove from "./features/authentication/LoginApprove";
import LoginEmployee from "./features/authentication/LoginEmployee";
import NewUser from "./features/approver/NewUser";

import Table from "./features/table/Table";
import TableDetail from "./features/table/TableDetail";
import TableDetailEmp from "./features/employer/TableDetailEmp";
import SettingsApprove from "./features/approver/SettingsApprove";
import ProtectedRoute from "./ui/ProtectedRoute";

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
      { index: true, element: <Navigate replace to="/login" /> },
      { path: "approver", element: <Approver /> },
      { path: "approver/register", element: <NewUser /> },
      { path: "approver/requests", element: <Table /> },
      { path: "approver/settings", element: <SettingsApprove /> },
      { path: "approver/requests/:requestId", element: <TableDetail /> },
      { path: "requests/employers", element: <Employee /> },
      { path: "requests/employers/:requestId", element: <TableDetailEmp /> },
      { path: "requests/newRequest", element: <NewRequestsPage /> },
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
      <MenuProvider>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false} />

        <Toaster
          position="top-right"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 6000,
            },
            style: {
              fontSize: "18px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "bg-zinc-100",
              color: "text-stone-900",
              zIndex: "9999",
            },
          }}
        />
      </MenuProvider>
    </QueryClientProvider>
  );
}

export default App;
