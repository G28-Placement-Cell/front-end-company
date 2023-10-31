import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({ baseUrl: 'http://localhost:5000/' });

export const apislice = createApi({
    baseQuery,
    tagTypes: ['Company'],
    endpoints: (builder) => ({

    }),
})
