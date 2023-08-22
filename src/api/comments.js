import supabase from '@/src/supabaseClient';

export const commentsCacheKey = '/api/comments';

//GET all comments
export const getComments = async () => {
  const { data, error, status } = await supabase.from('comments').select('*');

  return { data, error, status };
};
