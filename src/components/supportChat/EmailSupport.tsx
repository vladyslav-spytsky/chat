import React from "react"
import {useDispatch, useSelector} from "react-redux";
import {setInputMessage, setIsFullScreen, setIsModalShown, setMessageToListMessages} from "../../store/mainInfo.slice";
import {ChatMessage} from "./SupportChatMessage";
import {IChatMessage} from "../../store/mainInfo.type";

export interface RightSupportWrapperProps {
    sendMessages: IChatMessage[];
    inputMessage: string;
}

export function RightSupportWrapperEmail({...props}: RightSupportWrapperProps ) {
    const dispatch = useDispatch();

    return (
        <div className="flex flex-1 flex-col h-[320px] items-center justify-center">
            <div className="flex h-full w-full flex-col justify-start p-[8px]">
                <div className="flex-1 w-full overflow-auto">
                 <div className="flex flex-col p-[16px] min-h-[200px] h-full items-center justify-center">
                     <p className="m-0 font-[700] text-[18px] w-full text-center">Ви поки не отримали <br/> жодної письмової відповіді</p>
                     <span className="py-[16px] px-[8px] text-[13px] text-center">Письмові консультації вівд єксперта <br/> Системи Експертус Головбух.</span>
                     <div className="z-30">
                <span className="relative inline-flex align-middle text-[20px]">
                    <button className="inline-flex items-center justify-center relative border-0 m-0 align-middle decoration-0 font-[500] text-[0.9375rem]
                px-[22px] py-[5px] rounded-[4px] bg-orange-500 shadow-[0_3px_1px_-2px_rgb(0 0 0 / 20%)] shadow-[0_2px_2px_0_rgba(0, 0, 0, 0.14)] shadow-[0_1px_5px_0_rgba(0, 0, 0, 0.12)]
                text-white" type="button">
                        <span className="mr-[8px] ml-[-4px] inline-flex">Поставити запитання
                      </span>
                    </button>
                    </span>
                     </div>
                 </div>
                </div>
            </div>
        </div>
    )
}