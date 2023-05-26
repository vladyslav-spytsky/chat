import React from "react"

interface ModalProps {
    children: React.ReactNode
    onClose: () => void
}

export function Modal({children, onClose}: ModalProps) {
    return (
        <>
            {/*<div className="fixed bg-white top-0 right-0 left-0 bottom-0" onClick={onClose}/>*/}
            <div className="m-0 p-0">
                {children}
            </div>
        </>

    )
}