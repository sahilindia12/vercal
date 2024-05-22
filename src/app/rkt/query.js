import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({

    
  reducerPath: 'api',
  baseQuery: fetchBaseQuery('http://localhost:3000/backend'),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => 'api',
    }),
  }),
});

export const { useGetPostsQuery } = api;
