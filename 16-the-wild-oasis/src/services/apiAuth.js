import supabase from "./supabase";

export async function signup({ fullName, email, password }) {
    const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
            data: {
                fullName,
                avatar: "",
            },
        },
    });

    if (error) throw new Error(error.message);

    return data;
}

// https://supabase.com/dashboard/project/mcgxonulxclcyrtynujv/api?page=users
export async function login({ email, password }) {
    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
    });

    if (error) throw new Error(error.message);

    // Giriş başarılı olduğunda token ve diğer veriler localStorage'a kaydedilir
    return data;
}

// After a long time when user come back, refetch and validate the token
export async function getCurrentUser() {
    // localStorage içerisinden session verisini alır.
    const { data: session } = await supabase.auth.getSession();

    if (!session.session) return null;

    const { data, error } = await supabase.auth.getUser();

    if (error) throw new Error(error.message);

    return data?.user;
}

export async function logout() {
    const { error } = await supabase.auth.signOut();
    if (error) throw new Error(error.message);
}