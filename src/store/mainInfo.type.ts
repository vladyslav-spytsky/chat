type SupportType = {
  [key: string]: string;
};

export const SupportTypes: SupportType = {
  online: "online",
  email: "email",
  technical: "technical",
  news: "news"
};

export interface IMainInfo {
  title: string;
  isEmailWrapper: boolean;
  isShown: boolean;
  isFullScreen: boolean;
  search: string;
  inputMessageTechnical: string;
  inputMessageOnline: string;
  sendMessagesTechnical: IChatMessage[];
  sendMessagesOnline: IChatMessage[];
  supportType: string;
}

export interface IChatMessage {
  message: string;
  date: string;
}
