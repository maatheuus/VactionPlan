import supabase from "./supabase";

export async function readRequest() {
  const { data, error } = await supabase.from("Requests").select();

  if (error) console.log("could not read request");

  return data;
}

export async function newRequest(request) {
  const { data, error } = await supabase
    .from("Requests")
    .insert([request])
    .select()
    .single();

  if (error) console.log(error);

  return data;
}

export async function updateRequest(requestUpdate, id) {
  const { error } = await supabase
    .from("Requests")
    .update(requestUpdate)
    .eq("id", id)
    .select();

  if (error) console.log(error);
}

export async function deleteRequest(requestDelete) {
  const { error } = await supabase
    .from("Requests")
    .delete()
    .eq("id", requestDelete);

  if (error) {
    console.log(error);
    throw new Error("Could not delete request");
  }
}

export function realTimeData(eventRealTime, payloadRealTimeDataFunc) {
  const requestsListener = supabase
    .channel("Requests")
    .on(
      "postgres_changes",
      { event: `${eventRealTime}`, schema: "public", table: "Requests" },
      payloadRealTimeDataFunc
    )
    .subscribe();

  // return requestsListener;
  return () => requestsListener.unsubscribe();
}
//
