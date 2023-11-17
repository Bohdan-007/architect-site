import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Project } from '../models/project';


export const projectsApi = createApi({
  reducerPath: 'booksApi',

  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/projects' }),

  tagTypes: ['Projects'],

  endpoints: (builder) => ({
    getProjects: builder.query<Project[], string>({
      query: () => '/',
      providesTags: ['Projects'],
    }),

    // addCartBook: builder.mutation<CartBook, CartBook>({
    //   query: (book) => ({
    //     url: '/cartbooks',
    //     method: 'POST',
    //     body: book,
    //   }),
    //   invalidatesTags: ['Books'],
    // }),

    // updateCartBook: builder.mutation<CartBook, CartBook>({
    //   query: (book) => ({
    //     url: `/cartbooks/${book._id}`,
    //     method: 'PUT',
    //     body: book,
    //   }),
    //   invalidatesTags: ['Books'],
    // }),

    // deleteCartBook: builder.mutation<void, number>({
    //   query: (id) => ({
    //     url: `/cartbooks/${id}`,
    //     method: 'DELETE',
    //     body: id,
    //   }),
    //   invalidatesTags: ['Books'],
    // }),
  })
});


export const {
  useGetProjectsQuery,
} = projectsApi;
