import React, {FC} from "react";
import "../../../style.css"
import {MyPosts} from "./posts/MyPosts";
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {actionType, PostDataType, stateType} from "../../types/Types";
import MyPostsContainer from "./posts/MyPostsContainer";


export type ProfileType = {
    state: stateType
    dispatch: (action:actionType) => void
}

export const Profile:FC = () => {
    return (
        <div className={"content"}>
            <ProfileInfo />
            <MyPostsContainer />
        </div>
    )
}