import {Reducer} from "react";
import {PostDataType, profileDataType, stateType, userDataType, usersType} from "../../types/Types";
import {v1} from "uuid";
import {store} from "../state";

export const FOLLOW = 'FOLLOW'
export const UNFOLLOW = 'UNFOLLOW'
export const SET_USERS = 'SET-USERS'

export type followACType = ReturnType<typeof followAC>
export const followAC = (userId:number) => ({type:FOLLOW, userId}) as const

export type unfollowACType = ReturnType<typeof unfollowAC>
export const unfollowAC = (userId:number) => ({type:UNFOLLOW, userId}) as const

export type setUsersACType = ReturnType<typeof setUsersAC>
export const setUsersAC = (users:usersType[]) => ({type:SET_USERS, users}) as const

type actionType = followACType |
    unfollowACType |
    setUsersACType

export const userDataReducer:Reducer<userDataType, actionType> = (state=store.getState().usersPage, action):userDataType => {
    switch(action.type){
        case "FOLLOW":
            return {
                ...state,
                users:state.users.map(u => u.id === action.userId ? {...u, follow:true} : u)
            }
        case "UNFOLLOW":
            return {
                ...state,
                users:state.users.map(u => u.id === action.userId ? {...u, follow:false} : u)
            }
        case "SET-USERS":
            return {
                ...state,
                users: {...action.users}
            }
        default: {
            return {...state}
        }
    }
}