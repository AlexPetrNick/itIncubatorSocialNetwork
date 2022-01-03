import React, {ChangeEvent, ChangeEventHandler, FC, RefObject} from "react";
import "../../../../style.css"
import {Post} from "./post/Post";
import {PostDataType} from "../../../types/Types";

type MyPostsType = {
    postData: Array<PostDataType>
    addPost: () => void
    textPostProfileText: string
    updateTextProfile: (newText:string) => void
}

export const MyPosts:FC<MyPostsType> = (props) => {

    const postDraw = props.postData.map((data:PostDataType) => <Post key={data.content} content={data.content} cntLikes={data.cntLike} />)

    let newPostElement:RefObject<HTMLTextAreaElement> = React.createRef();

    const addPost = () => {
        let text = newPostElement.current?.value
        if (text) props.addPost()
        props.updateTextProfile('')
    }

    const onChangeText = (e:ChangeEvent<HTMLTextAreaElement>) => {
        let text = newPostElement.current?.value
        if (text) props.updateTextProfile(text)
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