import {Modal} from "../components/Modal";
import {useDispatch, useSelector} from "react-redux";
import {IStore} from "../store/types";
import {setMainInfo, setIsModalShown} from "../store/mainInfo.slice";
import {IMainInfo} from "../store/mainInfo.type";
import {useEffect} from "react";
import {SupportChat} from "../components/SupportChat";

export function MainPage() {
    const dispatch = useDispatch();

    const { mainInfo } = useSelector((store: IStore) => store)

    return (
        <div className = "container mx-auto max-w-2xl pt-5">
            { mainInfo?.isShown && (
                <Modal onClose={() => dispatch(setIsModalShown(false))}>
                    <SupportChat/>
                </Modal>
            )}
            <div className="flex flex-col fixed right-5 bottom-5 z-30">
                <span className="relative inline-flex align-middle text-[20px]">
                    <button  onClick={() => dispatch(setIsModalShown(true))}
                className="inline-flex items-center justify-center relative border-0 m-0 align-middle decoration-0 font-[500] text-[0.9375rem]
                px-[22px] py-[8px] rounded-[4px] bg-[#1a82c5] shadow-[0_3px_1px_-2px_rgb(0 0 0 / 20%)] shadow-[0_2px_2px_0_rgba(0, 0, 0, 0.14)] shadow-[0_1px_5px_0_rgba(0, 0, 0, 0.12)]
                text-white" type="button">
                        <span className="mr-[8px] ml-[-4px] inline-flex">
                        <svg
                className="text-[22px] w-[22px] h-[22px]" focusable="false" aria-hidden="true"
                viewBox="0 0 24 24" data-testid="ForumIcon">
                            <path fill="currentcolor"
                d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z"></path></svg></span>Онлайн-помічник<span
                className="MuiTouchRipple-root css-w0pj6f">
                    </span>
                    </button>
                    </span>
            </div>
            {/*<button className="fixed bottom-5 right-5 flex flex-col z-40 ">Онлайн помічник</button>*/}
        </div>
    )
}