import React, {FC} from "react";
import {NavLink} from "react-router-dom";

type DialogsItemsType = {
    name: string
    message: string
    id: number | string
}

export const DialogItem:FC<DialogsItemsType> = (props) => {
    return (
        <div className={'dialog'}>
            <div className="name">
                <NavLink to={"/dialogs/" + String(props.id)}>{props.name}</NavLink>
            </div>
            <div className="wrapper_message">
                <div className="message">{props.message}</div>
            </div>
        </div>
    )
}