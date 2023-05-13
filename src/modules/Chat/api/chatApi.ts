import { useAppSelector } from '@/redux/hooks/useAppSelector';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  GetChatHistoryRequest,
  GetChatHistoryResponse,
  GetMessageRequest,
  GetMessageResponse,
  PostMessageRequest,
  PostMessageResponse,
} from './types';

export const chatApi = createApi({
  reducerPath: 'chatApi',
  tagTypes: ['chat'],
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.green-api.com' }),
  endpoints: (build) => ({
    postMessage: build.mutation<PostMessageResponse, PostMessageRequest>({
      query: ({ number, message, idInstance, apiTokenInstance }) => {
        return {
          url: `waInstance${idInstance}/SendMessage/${apiTokenInstance}`,
          body: { chatId: `${number}@c.us`, message },
          method: 'POST',
        };
      },
      invalidatesTags: ['chat'],
    }),
    getChatHistory: build.mutation<GetChatHistoryResponse, GetChatHistoryRequest>({
      query: ({ number, idInstance, apiTokenInstance, limit }) => {
        return {
          url: `waInstance${idInstance}/GetChatHistory/${apiTokenInstance}`,
          body: { chatId: `${number}@c.us`, count: limit },
          method: 'POST',
        };
      },
    }),
    getMessage: build.query<GetMessageResponse, GetMessageRequest>({
      query: (arg) => {
        return {
          url: `waInstance${arg?.idInstance}/ReceiveNotification/${arg?.apiTokenInstance}`,
        };
      },
    }),
  }),
});

export const {
  useGetChatHistoryMutation,
  usePostMessageMutation,
  useGetMessageQuery,
  useLazyGetMessageQuery,
} = chatApi;
