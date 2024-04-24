import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateRequest as updateRequestApi } from "../services/apiTable";

export function useUpdateRequest() {
  const queryClient = useQueryClient();

  const { isLoading: isUpdate, mutate: updateRequest } = useMutation({
    mutationFn: ({ newRequestData, id }) =>
      updateRequestApi(newRequestData, id),
    onSuccess: () => {
      toast.success("Update request successfully");
      queryClient.invalidateQueries({
        queryKey: ["requests"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isUpdate, updateRequest };
}
