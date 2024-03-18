import { useCallback, useContext, useEffect, useState } from "react";
import { ModalContext } from "./context/modal-context";
import supabase from "../supabase";

export default async function ReadRequests({ Card }) {
  const { clickView } = useContext(ModalContext);
  const [userRequest, setUserRequest] = useState([]);

  const readRequest = useCallback(async function () {
    const { data, error } = await supabase.from("Requests").select("*");
    console.log(data);

    if (error) console.log("could not read request");

    return data;
  }, []);

  useEffect(() => {
    readRequest().then((data) => setUserRequest(data));
  }, [readRequest]);

  return (
    <div className="content-cards">
      {userRequest.map((value) => {
        return (
          <Card
            key={value.id}
            title="Vacation"
            curRequest={value}
            onClick={() => clickView("approve", value.id)}
          />
        );
      })}
    </div>
  );
}
