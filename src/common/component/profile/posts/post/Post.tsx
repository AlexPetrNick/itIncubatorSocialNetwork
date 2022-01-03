import React, {FC} from "react";
import "../../../../../style.css"


type PostType = {
    content: string
    cntLikes?: number
}


export const Post: FC<PostType> = (props) => {
    return (
        <div className={"post__from__profile"}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-9wd1vdvmXNs9AobWt-l-fJi2o1CQpyJRqQ&usqp=CAU"
                alt=""/>
            <div>{props.content}</div>
            <div className={"wrapper__cnt__like"}>
                <span className={"cnt__like__post__profile"}>{props.cntLikes}</span>
                <span className={"like__post__profile"}>like</span>
            </div>
        </div>
    )
}