import React, {ChangeEvent, FC, RefObject} from "react";
import "../../../../style.css"
import {Post} from "./post/Post";
import {actionType, PostDataType} from "../../../types/Types";
import {addPostAC, updateTitleProfileAC} from "../../../redux/reducers/profileDataReducer";

type MyPostsType = {
    postData: Array<PostDataType>
    textPostProfileText: string
    addPost: () => void
    updateTitleProfile: (title:string) => void
}

export const MyPosts:FC<MyPostsType> = (props) => {

    const postDraw = props.postData.map((data:PostDataType) => <Post key={data.content} content={data.content} cntLikes={data.cntLike} />)

    let newPostElement:RefObject<HTMLTextAreaElement> = React.createRef();

    const addPost = () => {
        let text = newPostElement.current?.value
        if (text) props.addPost()
    }

    const onChangeText = (e:ChangeEvent<HTMLTextAreaElement>) => {
        props.updateTitleProfile(e.currentTarget.value)
    }

    return (
        <div className={"post__wrapper"}>
            <div className={"form__write__post__profile"}>
                <div>
                    <textarea
                        ref={newPostElement}
                        value={props.textPostProfileText}
                        onChange={onChangeText}
                    />
                </div>
                <div>
                    <button
                        onClick={ addPost }
                    >Запостить</button>
                </div>
            </div>
            {postDraw}

        </div>
    )
}