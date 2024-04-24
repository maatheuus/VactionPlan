import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function useMoveBack() {
  const [toBack, setToBak] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    if (toBack) navigate(-1);
  }, [toBack, navigate]);

  return { setToBak };
}
