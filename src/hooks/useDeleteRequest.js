import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteRequest as deleteRequestApi } from "../apiTable";

export function useDeleteRequest() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteRequest } = useMutation({
    mutationFn: deleteRequestApi,
    onSuccess: () => {
      toast.success("Request deleted successfully");
      queryClient.invalidateQueries({ queryKey: ["requests"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteRequest };
}
