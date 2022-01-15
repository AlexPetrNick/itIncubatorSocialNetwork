import React, {ChangeEvent, FC} from "react";
import './dialgos.css'
import {DialogItem} from "./dialogsItems/DiaogsItems";
import {actionType, DataTypes, dialogPageType} from "../../types/Types";
import {sendMessage, updateNewMessageBody} from "../../redux/state";


type DialogsType = {
    state: dialogPageType
    dispatch: (action:actionType) => void
}

export const Dialogs: FC<DialogsType> = (props) => {
    const textDialog =props.state.newMessageText
    const dialogsElements = props.state.dialogsData.map((data:DataTypes) => {
        const textMessage = props.state.messageData[data.id].join(', ')
        return (
            <DialogItem
                key={data.id}
                name={data.name}
                message={textMessage}
                id={data.id}
            />
        )
    })

    const onMessageInputChange = (e:ChangeEvent<HTMLInputElement>) => {
        props.dispatch(updateNewMessageBody(e.target.value))
    }

    const onButtonSendClick = () => {
        if (textDialog) props.dispatch(sendMessage())
    }

    return (
        <div className={'wrapper__dialogs'}>
            <div className={'dialogs__items'}>
                {dialogsElements}
            </div>
            <input onChange={onMessageInputChange} value={textDialog} type="text"/>
            <button onClick={onButtonSendClick}>Отправить</button>
        </div>
    )
}