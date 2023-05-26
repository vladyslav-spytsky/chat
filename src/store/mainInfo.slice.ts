import { createSlice } from '@reduxjs/toolkit'
import { IStore } from './types'

const initialState: IStore['mainInfo'] = {
  isShown: false,
  isFullScreen: false,
  search: '',
  inputMessage: '',
  sendMessages: [],
  supportType: ''
}

export const mainInfoSlice = createSlice({
  name: 'mainInfo',
  initialState,
  reducers: {
    setMainInfo: (state, action) => action.payload,
    setIsModalShown: (state, action) => {
      state.isShown = action.payload
    },
    setIsFullScreen: (state, action) => {
      state.isFullScreen = action.payload
    },
    setInputMessage: (state, action) => {
      state.inputMessage = action.payload
    },
    setMessageToListMessages: (state, action) => {
      state.sendMessages.push(action.payload)
    }
  },
})

export const { setMainInfo, setIsModalShown,
  setIsFullScreen, setInputMessage, setMessageToListMessages } = mainInfoSlice.actions


export default mainInfoSlice.reducer


