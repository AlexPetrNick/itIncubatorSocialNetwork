
import {PostDataType, stateType} from "../types/Types";



export const state: stateType = {
    profileData: {
        postData: [
            {
                id: 1,
                content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit possimus quam quisquam velit vero. Ab!",
                cntLike: 3
            },
            {
                id: 2,
                content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
                cntLike: 6
            },
            {
                id: 3,
                content: "Lorem ipsum dolor sit amet",
                cntLike: 10
            }
        ],
        textPostProfileText: "test text"
    },
    dialogsData: [
        {name: "user1", message: "Hi ALl", id: 1},
        {name: "user2", message: "How is your it-kam?", id: 2},
        {name: "user3", message: "yo", id: 3},
        {name: "user4", message: "Bye", id: 4},
    ]
}

//@ts-ignore
window.state = state

export const addPost = () => {
    const postMessage:PostDataType = {id:5, content:state.profileData.textPostProfileText, cntLike: 0}
    state.profileData.postData.push(postMessage)
    rerenderEntireTree(state)
}


export const updateTextProfile = (newText:string) => {
    state.profileData.textPostProfileText = newText
    rerenderEntireTree(state)
}

let rerenderEntireTree = (state:stateType) => {
    console.log('state changed')
}

export const subscribe = (observer: (state: stateType) => void ) => {
    rerenderEntireTree = observer
}