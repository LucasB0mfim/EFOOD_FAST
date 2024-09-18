import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

type Product = {
  id: number
  price: number
}

type ID_ORDER = {
  products: Product[]
  delivery: {
    receiver: string
    address: {
      description: string
      city: string
      zipCode: string
      number: string
      complement?: string
    }
  }
  payment: {
    card: {
      name: string
      number: string
      code: string
      expires: {
        month: string
        year: string
      }
    }
  }
}

type ID_ORDER_RESPONSE = {
  orderId: string
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood/checkout'
  }),
  endpoints: (builder) => ({
    purchase: builder.mutation<ID_ORDER_RESPONSE, ID_ORDER>({
      query: (body) => ({
        url: '',
        method: 'POST',
        body
      })
    })
  })
})

export const { usePurchaseMutation } = api

export default api
