import supabase from "./supabase";

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
export const createCabin = async function (newCabin) {
  const { data, error } = await supabase
    .from('cabins')
    .insert([
      { some_column: 'someValue', other_column: 'otherValue' },
    ])
    .select()
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