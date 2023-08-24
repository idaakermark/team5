import { supabase } from '../supabaseClient.js';

export const commentsCacheKey = '/api/comments';

// GET all comments
export const getComments = async () => {
  const cachedComments = localStorage.getItem(commentsCacheKey);
  
  if (cachedComments) {
    return { data: JSON.parse(cachedComments), error: null };
  }

  const { data, error, status } = await supabase.from('comments').select('*').order('created_at', { ascending: false });

  if (!error && data) {
    localStorage.setItem(commentsCacheKey, JSON.stringify(data));
  }

  return { data, error, status };
};

// //ADD comments
export const addComment = async (_, { arg: commentData }) => {
  const { data, error } = await supabase
    .from('comments')
    .insert({ ...commentData })
    .single()
    .select("*");


  if (!error && data) {
    const cachedComments = localStorage.getItem(commentsCacheKey);
    if (cachedComments) {
      const updatedCachedComments = JSON.parse(cachedComments);
      updatedCachedComments.unshift(data);
      localStorage.setItem(commentsCacheKey, JSON.stringify(updatedCachedComments));
    }
  }

  return { error, data };
};