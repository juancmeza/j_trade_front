import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query';

const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': ''
}

const baseUrl = 'https://coinranking1.p.rapidapi.com/coins'

const createRequest = (url: string) => ({url, headers: cryptoApiHeaders})

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: () => createRequest('/coins') 
        })
    }) 
})

// export const {
//     useGetCryptosQuery,
// } = cryptoApi;

