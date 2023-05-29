import { createSlice } from '@reduxjs/toolkit'
import { IStore } from './types'
import {IChatMessage, IMainInfo, SupportTypes} from "./mainInfo.type";
import {RightSupportWrapperProps} from "../components/supportChat/OnlineAndTechnicalSupport";

const initialState: IStore['mainInfo'] = {
  title: 'Техническая поддержка',
  isEmailWrapper: false,
  isShown: false,
  isFullScreen: false,
  search: '',
  inputMessageTechnical: '',
  inputMessageOnline: '',
  sendMessagesTechnical: [],
  sendMessagesOnline: [],
  supportType: SupportTypes.technical
}

 export function propsInitialization  (mainInfo: IMainInfo): RightSupportWrapperProps {
   let props: RightSupportWrapperProps = {
     sendMessages: [],
     inputMessage: ''
   }

  switch (mainInfo?.supportType) {
    case SupportTypes.technical:{
      props.sendMessages = mainInfo?.sendMessagesTechnical;
      props.inputMessage = mainInfo?.inputMessageTechnical;
      break;
    }
    case SupportTypes.online:{
      props.sendMessages = mainInfo?.sendMessagesOnline;
      props.inputMessage = mainInfo?.inputMessageOnline;
      break;
    }
  }
  return props;
}

export const mainInfoSlice = createSlice({
  name: 'mainInfo',
  initialState,
  reducers: {
    setMainInfo: (state, action) => action.payload,
    setIsModalShown: (state, action) => {
      state.isShown = action.payload;
    },
    setIsFullScreen: (state, action) => {
      state.isFullScreen = action.payload;
    },
    setInputMessage: (state, action) => {
      switch (state.supportType) {
        case SupportTypes.technical: {
          state.inputMessageTechnical = action.payload;
          break;
        }
        case SupportTypes.online: {
          state.inputMessageOnline = action.payload;
          break;
        }
      }
    },
    setMessageToListMessages: (state, action) => {

      const now: Date = new Date();

      let chatMessage: IChatMessage = {
        message: action.payload,
        date: now.toDateString()
      }

      switch (state.supportType) {
        case SupportTypes.technical: {
          state.inputMessageTechnical = '';
          state.sendMessagesTechnical.push(chatMessage);
          break;
        }

        case SupportTypes.online: {
          state.inputMessageOnline = '';
          state.sendMessagesOnline.push(chatMessage);
          break;
        }
      }
    },
    setSupportType: (state, action) => {
      state.supportType = action.payload;
      switch (state.supportType) {
        case SupportTypes.technical: {
          state.isEmailWrapper = false;
          state.title = 'Технічна підтримка';
          break;
        }

        case SupportTypes.online: {
          state.isEmailWrapper = false;
          state.title = 'Онлайн підтримка';
          break;
        }

        case SupportTypes.email: {
          state.title = 'Письмово';
          state.isEmailWrapper = true;
          break;
        }
      }

    },
  },
})

export const { setMainInfo, setIsModalShown,
  setIsFullScreen, setInputMessage, setMessageToListMessages,
  setSupportType} = mainInfoSlice.actions


export default mainInfoSlice.reducer


