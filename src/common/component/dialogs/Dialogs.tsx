import React, {FC} from "react";
import './dialgos.css'
import {DialogItem} from "./dialogsItems/DiaogsItems";
import {DataTypes} from "../../types/Types";


type DialogsType = {
    state: Array<DataTypes>
}

export const Dialogs: FC<DialogsType> = (props) => {

    const dialogsElements = props.state.map((data:DataTypes) => {
        return (
            <DialogItem
                key={data.id}
                name={data.name}
                message={data.message}
                id={data.id}
            />
        )
    })

    return (
        <div className={'wrapper__dialogs'}>
            <div className={'dialogs__items'}>
                {dialogsElements}
            </div>
        </div>
    )
}