import { supabase } from '../supabaseClient.js';

export const commentsCacheKey = '/api/comments';

//GET all comments
export const getComments = async () => {
  const { data, error, status } = await supabase
  .from('comments')
  .select('*')
  .order('created_at', { ascending: false });
  return { data, error, status };
};

//ADD comments
export const addComment = async (_, { arg: commentData }) => {

  const { data, error } = await supabase
    .from('comments')
    .insert({ ...commentData })
    .single()
    .select("*");
  return { error, data };
};