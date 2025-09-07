import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { RootState } from "../store/store";

type Sex = "Male" | "Female";

interface GetUserProfileQueryResult {
  height: number;
  weight: number;
  bmr: number;
  birthDate: Date;
  streak: number;
  sex: Sex;
}

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_BASE_URL,
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;

    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }

    return headers;
  },
});

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    getUser: builder.query<GetUserProfileQueryResult, void>({
      query: () => "api/user",
    }),
  }),
});

export const { useGetUserQuery, useLazyGetUserQuery } = userApi;
