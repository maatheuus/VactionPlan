import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../features/authentication/useUser";
import { Loader } from "lucide-react";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { isLoading, isAuthenticated } = useUser();

  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      navigate("/login");
    }
  }, [isLoading, isAuthenticated, navigate]);

  if (isLoading)
    return (
      <div className="h-screen bg-zinc-100 flex items-center justify-center">
        <Loader className="animate-spin w-12 h-12 block" />
      </div>
    );
  if (isAuthenticated) return children;
}

export default ProtectedRoute;
