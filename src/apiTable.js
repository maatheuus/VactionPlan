import supabase from "./supabase";

export async function newRequest(request) {
  console.log(request);
  const { error, data } = await supabase.from("VactionUsers").insert([request]);

  if (error) console.log(error);

  return data;
}
