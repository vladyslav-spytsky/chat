import React from "react"
import {IChatMessage} from "../../store/mainInfo.type";

interface MessageProps {
    message: IChatMessage
}
export function ChatMessage({message}: MessageProps) {

    return (
        <div className="flex justify-start">
            <div className="flex max-w-[90%] p-[8px] mb-[16px] rounded-[4px]">
                <div className="relative flex items-center justify-center w-[40px] h-[40px] text-[1.25rem] rounded-[50%] overflow-hidden
            bg-[#1a82c5] mr-[8px] mt-[8px] text-white flex-shrink-0">
                    BC
                </div>
                <div className="">
                    <div className="flex items-start flex-col">
                        <h6 className="m-0 font-[500] text-[#5d5d5d] text-[13px]">Спицкий Владислав</h6>
                        <small className="mt-0 mr-0 mb-0 ml-[4px] font-[400] text-[#5d5d5d] text-[11px]">{message.date}</small>
                    </div>
                    <div className="p-[8px] bg-[#f2f4f8]">
                        <p className="m-0 font-[400] text-[13px] text-[#5d5d5d] whitespace-pre-line">
                            <span className="anywhere">{message.message}</span>
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}