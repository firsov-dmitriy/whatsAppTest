export type GetChatHistoryRequest = {
  number: string;
  idInstance: string;
  apiTokenInstance: string;
  limit: number;
};
export type GetChatHistoryResponse = {
  type: string;
  timestamp: number;
  idMessage: string;
  typeMessage: string;
  chatId: string;
  senderId: string;
  senderName: string;
  textMessage: string;
}[];

export type PostMessageRequest = {
  number: string;
  message: string;
  idInstance: string;
  apiTokenInstance: string;
};

export type PostMessageResponse = { idMessage: string };

export type GetMessageRequest = { idInstance?: string; apiTokenInstance?: string } | null;
export type GetMessageResponse = {
  receiptId: string;
  body: {
    typeWebhook: string;
    instanceData: {
      idInstance: number;
      wid: string;
      typeInstance: string;
    };
    timestamp: number;
    idMessage: string;
    senderData: {
      chatId: string;
      sender: string;
      senderName: string;
    };
    messageData: {
      typeMessage: string;
      textMessageData: {
        textMessage: string;
      };
    };
  };
};
