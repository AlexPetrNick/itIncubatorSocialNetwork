import {Reducer} from "react";
import {actionType, PostDataType, profileDataType, stateType} from "../../types/Types";
import {v1} from "uuid";
import {store} from "../state";

export const ADD_POST = 'ADD-POST'
export const UPDATE_TITLE_PROFILE = 'UPDATE-TITLE-PROFILE'

export const addPostAC = () => ({type:ADD_POST})
export const updateTitleProfileAC = (title:string) => ({type:UPDATE_TITLE_PROFILE, title})

export const profileDataReducer:Reducer<profileDataType, actionType> = (state=store.getState().profileData, action):profileDataType => {
    switch(action.type){
        case ADD_POST: {
            const postMessage:PostDataType = {id:v1(), content:state.textPostProfileText, cntLike: 0}
            return {
                    ...state,
                    postData: [...state.postData, postMessage],
                    textPostProfileText: ''
            }
        }
        case UPDATE_TITLE_PROFILE: {
            const text = action.title ? action.title : ''
            return {
                ...state,
                textPostProfileText: text,
            }
        }
        default: {
            return {...state}
        }
    }
}