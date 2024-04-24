import supabase from "./supabase";

export async function login(email, password) {
  const { error, data } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });

  if (error) {
    console.log(error.message);
    throw new Error("Could not login");
  }

  return data;
}
