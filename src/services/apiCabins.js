import supabase, { supabaseUrl } from "./supabase";

export const getCabins = async function () {

  const { data, error } = await supabase
    .from('cabins')
    .select('*')
  if (error) {
    console.error(error.message)
    throw new Error('Cabins could not be loaded')
  }
  return data;
};
export const createEditCabin = async function (newCabin, id) {
  console.log(newCabin, id, 'api, newcabin,id')
  const hasImagePath = newCabin?.image?.startsWith?.(supabaseUrl);

  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll('/', '');

  const imagePath = hasImagePath ? newCabin.image : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;


  // A. create/edit cabin
  let query = supabase.from('cabins');
  // A.1 Create 
  if (!id)
    query = query
      .insert([{ ...newCabin, image: imagePath }])
  // A.2 Edit 
  if (id)
    query = query.update({ ...newCabin, image: imagePath })
      .eq('id', id)

  const { data, error } = await query.select().single()

  if (error) throw new Error(error.message);
  // 2. upload image
  const { error: storageError } = await supabase.storage
    .from('cabin-images').upload(imageName, newCabin.image);
  // 3. delete the cabin if there was an error uploading image
  if (storageError) {
    await supabase.from('cabins').delete().eq('id').data.id;
    throw new Error('Cabin image could no be uploaded and the cabin was not created')
  }
  return data;
}

export const deleteCabin = async function (id) {
  const { data, error } = await supabase
    .from('cabins')
    .delete()
    .eq('id', id)
  if (error) {
    console.error(error);
    throw new Error("Cabin could not be deletd");
  }
  return data;
}