import supabase from "./supabase";

export async function getRequests() {
  const { data, error } = await supabase.from("requests").select("*");

  if (error) throw new Error("could not read request");

  return data;
}

export async function newRequest(request) {
  const { data, error } = await supabase
    .from("requests")
    .insert([request])
    .select()
    .single();

  if (error) throw new Error(error.message);

  return data;
}

export async function updateRequest(requestUpdate, id) {
  const { error } = await supabase
    .from("requests")
    .update(requestUpdate)
    .eq("id", id)
    .select();

  if (error) throw new Error("could not update request");
}

export async function deleteRequest(requestDelete) {
  const { error } = await supabase
    .from("requests")
    .delete()
    .eq("id", requestDelete);

  if (error) throw new Error("Could not delete request");
}
