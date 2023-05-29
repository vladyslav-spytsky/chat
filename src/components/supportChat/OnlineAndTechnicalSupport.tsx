import React from "react"
import {useDispatch, useSelector} from "react-redux";
import {setInputMessage, setIsFullScreen, setIsModalShown, setMessageToListMessages} from "../../store/mainInfo.slice";
import {ChatMessage} from "./SupportChatMessage";
import {IChatMessage} from "../../store/mainInfo.type";

export interface RightSupportWrapperProps {
    sendMessages: IChatMessage[];
    inputMessage: string;
}

export function RightSupportWrapperOnlineOrTechnical({...props}: RightSupportWrapperProps ) {
    const dispatch = useDispatch();

    return (
    <div className="flex flex-1 flex-col h-[320px] items-center justify-center">
        <div className="flex h-full w-full flex-col justify-start p-[8px]">
            <div className="flex-1 w-full overflow-auto">
                {props.sendMessages.length === 0 &&<div className="flex flex-row p-[16px] min-h-[200px] items-center">
                    <p className="m-0 font-[400] text-[13px] text-gray-500 w-full text-center">Поки що нема повідомлень</p>
                </div>}
                { props.sendMessages.map((message: IChatMessage, index: React.Key | null | undefined) => <ChatMessage message={message} key={index}/>) }
            </div>
            <div className="flex items-center h-auto mt-[15px] relative">
                            <textarea value={props.inputMessage} onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => dispatch(setInputMessage(event.target.value))} placeholder="Повідомлення" className="w-full outline-0 p-[5px] rounded-[0px] border-solid border-[1px] border-gray-300 h-[34px]">
                            </textarea>
                <label
                    className="w-[34px] h-[34px] inline-flex items-center justify-center relative box-border bg-transparent outline-0 border-0 m-0 align-middle
                        decoration-0 text-center flex-grow-0 flex-shrink-0 basis-auto text-[1.5rem] p-[5px] rounded-[50%] overflow-visible">
                    <svg
                        className="w-[24px] h-[24px]"
                        focusable="false" aria-hidden="true" viewBox="0 0 24 24"
                        data-testid="AttachFileIcon">
                        <path fill="#919295"
                              d="M16.5 6v11.5c0 2.21-1.79 4-4 4s-4-1.79-4-4V5c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5v10.5c0 .55-.45 1-1 1s-1-.45-1-1V6H10v9.5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V5c0-2.21-1.79-4-4-4S7 2.79 7 5v12.5c0 3.04 2.46 5.5 5.5 5.5s5.5-2.46 5.5-5.5V6h-1.5z"></path>
                    </svg>
                    <span></span>
                </label>
                <button onClick={() => dispatch(setMessageToListMessages(props.inputMessage))}
                        className="w-[34px] h-[34px] inline-flex items-center justify-center relative box-border bg-transparent outline-0 border-0 m-0 align-middle
                        decoration-0 text-center flex-grow-0 flex-shrink-0 basis-auto text-[1.5rem] p-[5px] rounded-[50%] overflow-visible" type="button">
                    <svg fill="#1a82c5"
                         className="w-[24px] h-[24px]"
                         focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="SendIcon">
                        <path d="M2.01 21 23 12 2.01 3 2 10l15 2-15 2z"></path>
                    </svg>
                    <span></span></button>
            </div>
        </div>
    </div>
    )
}