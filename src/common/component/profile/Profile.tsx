import React, {FC} from "react";
import "../../../style.css"
import {MyPosts} from "./posts/MyPosts";
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {PostDataType, stateType} from "../../types/Types";


export type ProfileType = {
    state: stateType
    addPost: () => void
    updateTextProfile: (newText:string) => void
}

export const Profile:FC<ProfileType> = (props) => {
    return (
        <div className={"content"}>
            <ProfileInfo />
            <MyPosts
                postData={props.state.profileData.postData}
                textPostProfileText={props.state.profileData.textPostProfileText}
                addPost={props.addPost}
                updateTextProfile={props.updateTextProfile}
            />
        </div>
    )
}