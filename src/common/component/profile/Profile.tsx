import React, {FC} from "react";
import "../../../style.css"
import {MyPosts} from "./posts/MyPosts";
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {actionType, PostDataType, stateType} from "../../types/Types";


export type ProfileType = {
    state: stateType
    dispatch: (action:actionType) => void
}

export const Profile:FC<ProfileType> = ({dispatch, ...props}) => {
    return (
        <div className={"content"}>
            <ProfileInfo />
            <MyPosts
                postData={props.state.profileData.postData}
                textPostProfileText={props.state.profileData.textPostProfileText}
                dispatch={dispatch}
            />
        </div>
    )
}