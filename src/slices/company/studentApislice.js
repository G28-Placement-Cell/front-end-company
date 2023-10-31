import { apislice } from "./apislice";

const company_url = 'api/company';

export const studentApislice = apislice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: `${company_url}/login`,
                method: 'POST',
                body: data,
                message: "logged in"
            })
        }),
        logout: builder.mutation({
            query: () => ({
                url: `${company_url}/logout`,
                method: 'POST',
                message: "logged out"
            })
        }),
        register: builder.mutation({
            query: (data) => ({
                url: `${company_url}/register`,
                method: 'POST',
                body: data,
                message: "registered"
            })
        }),
        getdata: builder.mutation({
            query: (data) => ({
                url: `${company_url}/profile`,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                },
                method: 'GET',
                message: "got data"
            })
        })
    })
})

export const { useLoginMutation, useLogoutMutation, useRegisterMutation, useGetdataMutation } = studentApislice;