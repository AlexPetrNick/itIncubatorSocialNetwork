import React, {FC} from 'react'
import {userDataType, usersType} from "../../types/Types";
import '../../../st.css'


type UsersType = {
    users: userDataType
    follow: (userId:number) => void
    unfollow: (userId:number) => void
    setUsers: (users:usersType[]) => void
}

export const Users:FC<UsersType> = ({users,follow, unfollow, setUsers}) => {
    const listUser = users.users.map(u => {
        return (
            <div className='wrapper__users__list'>
                <div className='wrapper__photo_bt'></div>
                <div className='wrapper__content'>
                    <div className='users__info'></div>
                    <div className='users__status'></div>
                </div>
            </div>
        )
    })
    return(
        <div className='wrapper__users'>
            {listUser}
        </div>
    )
}