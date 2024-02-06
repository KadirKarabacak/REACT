import supabase from "./supabase";

// https://supabase.com/dashboard/project/mcgxonulxclcyrtynujv/api?page=users
export async function login({ email, password }) {
    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
    });

    if (error) throw new Error(error.message);

    console.log(data);
    // Giriş başarılı olduğunda token ve diğer veriler localStorage'a kaydedilir
    return data;
}
