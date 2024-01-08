import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Project } from '../models/project';


export const projectsApi = createApi({
  reducerPath: 'booksApi',

  // baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/projects' }),
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8700/api/projects' }),

  tagTypes: ['Projects'],

  endpoints: (builder) => ({
    getProjects: builder.query<Project[], string>({
      query: () => '/',
      providesTags: ['Projects'],
    }),

    getProject: builder.query<Project, any>({
      query: (id: any) => `/${id}`,
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
  useGetProjectQuery,
} = projectsApi;
