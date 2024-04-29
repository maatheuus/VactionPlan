import supabase from "./supabase";

export async function getRequests(eqFilter = false, filterRequests) {
  const { data, error } = await supabase.from("requests").select("*");

  // if (eqFilter) {
  //   const { data, error } = await supabase
  //     .from("requests")
  //     .select("*")
  //     .eq("statusRequest", `${filterRequests}`);

  //   if (error) {
  //     console.log(error);
  //     throw new Error("could not read request");
  //   }

  //   return data;
  // }

  if (error) {
    console.log(error);
    throw new Error("could not read request");
  }

  return data;
}

export async function newRequest(request) {
  const { data, error } = await supabase
    .from("requests")
    .insert([request])
    .select()
    .single();

  if (error) console.log(error);

  return data;
}

export async function updateRequest(requestUpdate, id) {
  const { error } = await supabase
    .from("requests")
    .update(requestUpdate)
    .eq("id", id)
    .select();
  console.log(requestUpdate);

  if (error) {
    console.log(error);
    throw new Error("could not update request");
  }
}

export async function deleteRequest(requestDelete) {
  const { error } = await supabase
    .from("requests")
    .delete()
    .eq("id", requestDelete);

  if (error) {
    console.log(error);
    throw new Error("Could not delete request");
  }
}

export function realTimeData(eventRealTime, payloadRealTimeDataFunc) {
  const requestsListener = supabase
    .channel("requests")
    .on(
      "postgres_changes",
      { event: `${eventRealTime}`, schema: "public", table: "requests" },
      payloadRealTimeDataFunc
    )
    .subscribe();

  // return requestsListener;
  return () => requestsListener.unsubscribe();
}
//
