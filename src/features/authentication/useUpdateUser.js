import { useMutation } from "@tanstack/react-query";
import { updateCurrentUser } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useUpdateUser() {
  const { isLoading, mutate: updateUser } = useMutation({
    mutationFn: (user) => updateCurrentUser(user),
    onSuccess: () => toast.success("Account successfully update!"),
    onError: (err) =>
      toast.error(
        err.message || "An error occurred while creating the account"
      ),
  });

  return { isLoading, updateUser };
}
