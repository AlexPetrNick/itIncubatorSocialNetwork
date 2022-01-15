import {Reducer} from "react";
import {actionType, dialogPageType, stateType} from "../../types/Types";

const randomText = (array: Array<string>, num: number) => {
    const randNum = Math.floor(Math.random() * num)
    return array[randNum]
}

export const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
export const SEND_MESSAGE = 'SEND-MESSAGE'

export const updateNewMessageBody = (title: string) => ({type: UPDATE_NEW_MESSAGE_BODY, title})
export const sendMessage = () => ({type: SEND_MESSAGE})


export const dialogsPageReducer: Reducer<dialogPageType, actionType> = (state, action): dialogPageType => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY: {
            const text = action.title ? action.title : ''
            return {
                ...state,
                newMessageText: text
            }
        }
        case SEND_MESSAGE: {
            const randName = randomText(state.dialogsData.map(d => d.id), 3)
            const valueText = state.newMessageText
            return {
                ...state,
                messageData: {
                    ...state.messageData,
                    [randName]: [...state.messageData[randName], valueText]
                },
                newMessageText: ''
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}