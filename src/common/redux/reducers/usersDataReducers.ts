import {Reducer} from "react";
import {actionType, PostDataType, profileDataType, stateType, userDataType} from "../../types/Types";
import {v1} from "uuid";
import {store} from "../state";

export const ADD_POST = 'ADD-POST'

export const addPostAC = () => ({type:ADD_POST})

export const userDataReducer:Reducer<userDataType, actionType> = (state=store.getState().usersPage, action):userDataType => {
    switch(action.type){
        default: {
            return {...state}
        }
    }
}