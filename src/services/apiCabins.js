import supabase from "./supabase";

export const getCabins = async function () {

  const { data, error } = await supabase
    .from('cabins')
    .select('*')
  if (error) {
    console.error(error.message);
    throw new Error('Cabins could not be loaded')
  }
  return data;
};
