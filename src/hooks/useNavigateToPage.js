import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const useNavigateToPage = function () {
  const [data, setData] = useState();
  const [toBack, setToBak] = useState();
  const [toLocation, setToLocation] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    if (toBack) navigate(toBack);
  }, [toBack, navigate]);

  useEffect(() => {
    if (data) navigate(toLocation);
  }, [data, navigate, toLocation]);

  return { setData, setToLocation, setToBak };
};
