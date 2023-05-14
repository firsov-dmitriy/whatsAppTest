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
  receiptId: number;
  body: {
    typeWebhook: string;
    instanceData: {
      idInstance: number;
      wid: string;
      typeInstance: string;
    };
    timestamp: number;
    idMessage: string;
    sendByApi: boolean;
    senderData: {
      chatId: string;
      sender: string;
      senderName: string;
    };

    messageData: {
      extendedTextMessageData: {
        text: string;
      };
      typeMessage: string;
      textMessageData: {
        textMessage: string;
      };
    };
  };
};

export type DeleteNotification = {
  idInstance?: string;
  apiTokenInstance?: string;
  receiptId: number;
};
