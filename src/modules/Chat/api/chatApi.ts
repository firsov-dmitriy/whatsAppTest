import { useAppSelector } from '@/redux/hooks/useAppSelector';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const chatApi = createApi({
  reducerPath: 'chatApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.green-api.com' }),
  endpoints: (build) => ({
    postMessage: build.mutation<
      any,
      { number: string; message: string; idInstance: string; apiTokenInstance: string }
    >({
      query: ({ number, message, idInstance, apiTokenInstance }) => {
        return {
          url: `waInstance${idInstance}/SendMessage/${apiTokenInstance}`,
          body: { chatId: `${number}@c.us`, message },
          method: 'POST',
        };
      },
    }),
    getChatHistory: build.mutation<
      any,
      { number: string; idInstance: string; apiTokenInstance: string }
    >({
      query: ({ number, idInstance, apiTokenInstance }) => {
        return {
          url: `waInstance${idInstance}/GetChatHistory/${apiTokenInstance}`,
          body: { chatId: `${number}@c.us` },
          method: 'POST',
        };
      },
    }),
  }),
});

export const { useGetChatHistoryMutation } = chatApi;
