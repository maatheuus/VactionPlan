import { useMutation } from "@tanstack/react-query";
import { signUp as signUpApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignUp() {
  const { isLoading, mutate: signUp } = useMutation({
    mutationFn: ({ email, password }) => signUpApi(email, password),
    onSuccess: () => toast.success("Account successfully created!"),
    onError: (err) =>
      toast.error(
        err.message || "An error occurred while creating the account"
      ),
  });

  return { isLoading, signUp };
}
