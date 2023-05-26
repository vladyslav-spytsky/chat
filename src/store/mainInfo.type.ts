type SupportType = {
  [key: string]: string;
};

export const SupportTypes: SupportType = {
  chat: "chat",
  email: "email",
  call: "call",
  news: "news"
};

export interface IMainInfo {
  isShown: boolean;
  isFullScreen: boolean;
  search: string;
  inputMessage: string;
  sendMessages: string[];
  supportType: string;
}
