import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function useMoveTo() {
  const [to, setTo] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    if (to) navigate(to);
  }, [to, navigate]);

  return { setTo };
}
