import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../services/apiAuth";
import toast from "react-hot-toast";

export function useAuth() {
  const queryClient = useQueryClient();

  const { isLoading: isAuthenticated, mutate: login } = useMutation({
    mutationFn: ({ email, password }) => loginApi(email, password),
    onSuccess: () => {
      toast.success("Successfully logged in");
      queryClient.invalidateQueries({
        queryKey: ["requests"],
      });
    },
    onError: toast.error("Please, check your data."),
  });

  return { isAuthenticated, login };
}
