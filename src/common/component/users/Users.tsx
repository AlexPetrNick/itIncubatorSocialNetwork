import React, {FC} from 'react'
import {userDataType, usersType} from "../../types/Types";
import '../../../style.css'


type UsersType = {
    users: userDataType
    follow: (userId:number) => void
    unfollow: (userId:number) => void
    setUsers: (users:usersType[]) => void
}

export const Users:FC<UsersType> = ({users,follow, unfollow, setUsers}) => {

    return(
        <div>
            User will be there
        </div>
    )
}