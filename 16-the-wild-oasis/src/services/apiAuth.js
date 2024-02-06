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

// After a long time when user come back, refetch and validate the token
export async function getCurrentUser() {
    // localStorage içerisinden session verisini alır.
    const { data: session } = await supabase.auth.getSession();

    if (!session.session) return null;

    const { data, error } = await supabase.auth.getUser();
    console.log(data);

    if (error) throw new Error(error.message);

    return data?.user;
}
