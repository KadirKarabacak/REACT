import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
    const { data, error } = await supabase.from("cabins").select("*");

    if (error) {
        console.log(error.message);
        throw new Error("Cabins can not loaded");
    }

    return data;
}

// To reuse this func on edit and create
export async function createEditCabin(newCabin, id) {
    // On edit, we must check the image starts with the same url we created earlier
    const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);

    // We must replace all "/" with nothing to don't create any new folder in supabase
    const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
        "/",
        ""
    );

    // If has an imagepath on edit use it, otherwise create a new one
    const imagePath = hasImagePath
        ? newCabin.image
        : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

    //  1. Create / Edit cabin
    let query = supabase.from("cabins");

    // A) CREATE
    if (!id) query = query.insert([{ ...newCabin, image: imagePath }]);

    // B) EDIT
    if (id)
        query = query
            .update({ ...newCabin, image: imagePath })
            .eq("id", id)
            .select();

    const { data, error } = await query
        // To return newly created object, need to .select and .single
        .select()
        .single();

    if (error) {
        console.log(error.message);
        throw new Error("Cabin could not be deleted");
    }

    // 2. If created cabin successfully, then upload image
    const { error: storageError } = await supabase.storage
        .from("cabin-images")
        .upload(imageName, newCabin.image);

    // 3. Delete cabin if there was an error.
    if (storageError) {
        await supabase.from("cabins").delete().eq("id", data.id);
        console.log(storageError);
        throw new Error(
            "Cabin image could not be uploaded, and the cabin was not created"
        );
    }

    return data;
}

// Delete function which match the ID column with our id
export async function deleteCabin(id) {
    const { data, error } = await supabase.from("cabins").delete().eq("id", id);

    if (error) {
        console.log(error.message);
        throw new Error("Cabin could not be deleted");
    }

    return data;
}
