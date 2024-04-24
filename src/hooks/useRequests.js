import { useQuery } from "@tanstack/react-query";
import { getRequests } from "../apiTable";

export function useRequests() {
  const { isLoading, data: requests } = useQuery({
    queryKey: ["requests"],
    queryFn: getRequests,
  });

  return { isLoading, requests };
}
