import { useMutation, useQueryClient } from "@tanstack/react-query";
import { newRequest } from "../services/apiTable";
import toast from "react-hot-toast";

export function useCreateRequest() {
  const queryClient = useQueryClient();

  const { isLoading: isCreating, mutate: createRequest } = useMutation({
    mutationFn: newRequest,
    onSuccess: () => {
      toast.success("Created request create successfully");
      queryClient.invalidateQueries({
        queryKey: ["requests"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isCreating, createRequest };
}
