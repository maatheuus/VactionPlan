import { useLocation } from "react-router-dom";

export function useUrl() {
  const { pathname } = useLocation();
  const url = pathname.replace("/", "");
  let approver;
  let requests;

  if (url.startsWith("approver")) {
    approver = true;
  } else if (url.startsWith("requests")) {
    requests = true;
  }

  return { approver, requests };
}
