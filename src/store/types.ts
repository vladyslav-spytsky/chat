import { store } from "./index";
import {IMainInfo} from "./mainInfo.type";




export interface IStore {
    mainInfo: IMainInfo | null;
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
