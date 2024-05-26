import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
export function useLogin(currentUser = null) {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { isLoading, mutate: login } = useMutation({
    mutationFn: ({ email, password }) => loginApi(email, password),
    onSuccess: (user) => {
      queryClient.setQueriesData(["user", user.user]);
      navigate(currentUser);
    },
    onError: () => {
      toast.error("Provided email or password are incorrect");
    },
  });

  return { isLoading, login };
}
