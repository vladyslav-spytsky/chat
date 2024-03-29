import React, {useEffect, useState} from "react"
import {useDispatch, useSelector} from "react-redux";
import {IStore} from "../../store/types";
import {
    propsInitialization,
    setInputMessage,
    setIsFullScreen,
    setIsModalShown,
    setMessageToListMessages,
    setSupportType
} from "../../store/mainInfo.slice";
import {ChatMessage} from "./SupportChatMessage";
import {IChatMessage, SupportTypes} from "../../store/mainInfo.type";
import {RightSupportWrapperOnlineOrTechnical, RightSupportWrapperProps} from "./OnlineAndTechnicalSupport";
import {RightSupportWrapperEmail} from "./EmailSupport";

export function SupportModal() {
    const dispatch = useDispatch();

    const { mainInfo } = useSelector((store: IStore) => store)

   let props = propsInitialization(mainInfo)

    let fullScreenClassName: string = mainInfo.isEmailWrapper ? "left-0 top-0 " : mainInfo.isFullScreen ? "left-0 top-0 ":"bottom-0 right-0 max-h-[580px] max-w-[470px] ";

    useEffect(() => {
        fullScreenClassName = mainInfo.isEmailWrapper ? "left-0 top-0 " : mainInfo.isFullScreen ? "left-0 top-0 ":"bottom-0 right-0 max-h-[580px] max-w-[470px] ";

        props = propsInitialization(mainInfo)

        return () => {

        }
    }, [mainInfo.isFullScreen, mainInfo.supportType, mainInfo.isEmailWrapper ])

    console.log(mainInfo.supportType)
    return (
        <div className={fullScreenClassName.concat("fixed block box-border pt-[60px] pr-[20px] pb-[20px] pl-[20px] w-[100%] h-[100%] min-h-[350px] z-40")}>
            <div className="flex w-full h-full shadow-[0_0_10px_rgba(0,0,0,0.2)] bg-white">
                <div className="h-[100%] w-[90px] bg-[#f1f3fa] shadow-[1px_0_1px_rgba(0,0,0,0.12)]">
                    <div className="flex pb-[16px] flex-col justify-between h-[100%]">
                        <div className="flex flex-col">
                            <button onClick={() => dispatch(setSupportType(SupportTypes.technical))} className="flex items-center justify-center relative bg-transparent
                            outline-0 border-0 m-0 decoration-0 text-center text-[#1a82c5] p-[5px] flex-col">
                                <span className="relative inline-flex align-middle h-[24px]">
                                    <svg className="w-[1em] inline-block h-[24px] text-[1.5rem]"
                                         focusable="false" aria-hidden="true" viewBox="0 0 24 24"
                                         data-testid="SupportAgentIcon"><path fill="#1a82c5"
                                                                              d="M21 12.22C21 6.73 16.74 3 12 3c-4.69 0-9 3.65-9 9.28-.6.34-1 .98-1 1.72v2c0 1.1.9 2 2 2h1v-6.1c0-3.87 3.13-7 7-7s7 3.13 7 7V19h-8v2h8c1.1 0 2-.9 2-2v-1.22c.59-.31 1-.92 1-1.64v-2.3c0-.7-.41-1.31-1-1.62z"></path><circle
                                        fill="#1a82c5" cx="9" cy="13" r="1"></circle><circle fill="#1a82c5" cx="15" cy="13" r="1"></circle><path fill="#1a82c5"
                                                                                                                                                 d="M18 11.03C17.52 8.18 15.04 6 12.05 6c-3.03 0-6.29 2.51-6.03 6.45 2.47-1.01 4.33-3.21 4.86-5.89 1.31 2.63 4 4.44 7.12 4.47z"></path></svg>
                                </span>
                                <span className="text-[11px] mt-[5px] block">Техпідтримка</span>
                                <span></span>
                            </button>
                            <button onClick={() => dispatch(setSupportType(SupportTypes.online))} className="flex items-center justify-center relative bg-transparent
                            outline-0 border-0 m-0 decoration-0 text-center text-[#1a82c5] p-[5px] flex-col">
                                <span className="relative inline-flex align-middle h-[24px]">
                                    <svg className="w-[1em] inline-block h-[24px] text-[1.5rem]"
                                         focusable="false" aria-hidden="true" viewBox="0 0 24 24"
                                         data-testid="SupportAgentIcon"><path fill="#1a82c5"
                                                                              d="M21 12.22C21 6.73 16.74 3 12 3c-4.69 0-9 3.65-9 9.28-.6.34-1 .98-1 1.72v2c0 1.1.9 2 2 2h1v-6.1c0-3.87 3.13-7 7-7s7 3.13 7 7V19h-8v2h8c1.1 0 2-.9 2-2v-1.22c.59-.31 1-.92 1-1.64v-2.3c0-.7-.41-1.31-1-1.62z"></path><circle
                                        fill="#1a82c5" cx="9" cy="13" r="1"></circle><circle fill="#1a82c5" cx="15" cy="13" r="1"></circle><path fill="#1a82c5"
                                                                                                                                                 d="M18 11.03C17.52 8.18 15.04 6 12.05 6c-3.03 0-6.29 2.51-6.03 6.45 2.47-1.01 4.33-3.21 4.86-5.89 1.31 2.63 4 4.44 7.12 4.47z"></path></svg>
                                </span>
                                <span className="text-[11px] mt-[5px] block">Онлайн</span>
                                <span></span>
                            </button>
                            <button onClick={() => dispatch(setSupportType(SupportTypes.email))} className="flex items-center justify-center relative bg-transparent
                            outline-0 border-0 m-0 decoration-0 text-center text-[#1a82c5] p-[5px] flex-col">
                                <span className="relative inline-flex align-middle h-[24px]">
                                    <svg className="w-[1em] inline-block h-[24px] text-[1.5rem]"
                                         focusable="false" aria-hidden="true" viewBox="0 0 24 24"
                                         data-testid="SupportAgentIcon"><path fill="#1a82c5"
                                                                              d="M21 12.22C21 6.73 16.74 3 12 3c-4.69 0-9 3.65-9 9.28-.6.34-1 .98-1 1.72v2c0 1.1.9 2 2 2h1v-6.1c0-3.87 3.13-7 7-7s7 3.13 7 7V19h-8v2h8c1.1 0 2-.9 2-2v-1.22c.59-.31 1-.92 1-1.64v-2.3c0-.7-.41-1.31-1-1.62z"></path><circle
                                        fill="#1a82c5" cx="9" cy="13" r="1"></circle><circle fill="#1a82c5" cx="15" cy="13" r="1"></circle><path fill="#1a82c5"
                                                                                                                                                 d="M18 11.03C17.52 8.18 15.04 6 12.05 6c-3.03 0-6.29 2.51-6.03 6.45 2.47-1.01 4.33-3.21 4.86-5.89 1.31 2.63 4 4.44 7.12 4.47z"></path></svg>
                                </span>
                                <span className="text-[11px] mt-[5px] block">Письмово</span>
                                <span></span>
                            </button>
                        </div>
                        <a href="" className="m-0 block text-center decoration-0">
                            <svg className="h-[35px] w-[55px] inline-block" focusable="false"
                                 aria-hidden="true" viewBox="0 0 24 24" data-testid="RuleIcon">
                                <path fill="#919295"
                                      d="M16.54 11 13 7.46l1.41-1.41 2.12 2.12 4.24-4.24 1.41 1.41L16.54 11zM11 7H2v2h9V7zm10 6.41L19.59 12 17 14.59 14.41 12 13 13.41 15.59 16 13 18.59 14.41 20 17 17.41 19.59 20 21 18.59 18.41 16 21 13.41zM11 15H2v2h9v-2z"></path>
                            </svg>
                            <span className="text-[11px] mt-[15px] block text-[#00000080]">
                                Правила<br/><br/>роботи<br/><br/>експертів
                            </span>
                        </a>
                    </div>
                </div>
                <div className="flex flex-col flex-grow flex-shrink basis-0">
                    <div className="relative flex justify-between shadow-[0_1px_1px_rgba(0,0,0,0.12)]">
                        <h6 className="mx-[8px] my-[16px] text-[0.875rem] font-[700]">{mainInfo.title}</h6>
                        <div className="flex items-center">
                            <button className="w-[34px] h-[34px] inline-flex items-center justify-center relative box-border bg-transparent outline-0 border-0 m-0 align-middle
                        decoration-0 text-center flex-grow-0 flex-shrink-0 basis-auto text-[1.5rem] p-[5px] rounded-[50%] overflow-visible">
                                <svg className="w-[24px] h-[24px]" focusable="false"
                                     aria-hidden="true" viewBox="0 0 24 24" data-testid="SearchIcon">
                                    <path fill="#919295"
                                          d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
                                </svg>
                            </button>
                            <button onClick={() => dispatch(setIsFullScreen( mainInfo.isEmailWrapper? mainInfo.isFullScreen : !mainInfo.isFullScreen,))} className="w-[30px] h-[30px] inline-flex items-center justify-center relative box-border bg-transparent outline-0 border-0 m-0 align-middle
                        decoration-0 text-center flex-grow-0 flex-shrink-0 basis-auto text-[1.5rem] p-[5px] rounded-[50%] overflow-visible">
                                <svg className="w-[20px] h-[20px]" focusable="false"
                                     aria-hidden="true" viewBox="0 0 24 24" data-testid="OpenInFullIcon">
                                    <path fill="#919295" d="M21 11V3h-8l3.29 3.29-10 10L3 13v8h8l-3.29-3.29 10-10z"></path>
                                </svg>
                            </button>
                            <button onClick={() => dispatch(setIsModalShown( false ))} className="w-[34px] h-[34px] inline-flex items-center justify-center relative box-border bg-transparent outline-0 border-0 m-0 align-middle
                        decoration-0 text-center flex-grow-0 flex-shrink-0 basis-auto text-[1.5rem] p-[5px] rounded-[50%] overflow-visible">
                                <svg className="w-[24px] h-[24px]" focusable="false"
                                     aria-hidden="true" viewBox="0 0 24 24" data-testid="CloseOutlinedIcon">
                                    <path fill="#919295"
                                          d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                    {mainInfo.supportType !== 'email' &&<RightSupportWrapperOnlineOrTechnical inputMessage={props.inputMessage} sendMessages={props.sendMessages}/>}
                    {mainInfo.supportType === 'email' &&<RightSupportWrapperEmail inputMessage={props.inputMessage} sendMessages={props.sendMessages}/>}
                </div>
            </div>
        </div>
    )

}