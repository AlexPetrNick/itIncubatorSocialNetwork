
import {actionType, PostDataType, stateType} from "../types/Types";
import {v1} from "uuid";


export const ADD_POST = 'ADD-POST'
export const UPDATE_TITLE_PROFILE = 'UPDATE-TITLE-PROFILE'

export const addPostAC = () => ({type:ADD_POST})
export const updateTitleProfileAC = (title:string) => ({type:UPDATE_TITLE_PROFILE, title})

export const store = {
    _state: {
        profileData: {
            postData: [
                {
                    id: v1(),
                    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit possimus quam quisquam velit vero. Ab!",
                    cntLike: 3
                },
                {
                    id: v1(),
                    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
                    cntLike: 6
                },
                {
                    id: v1(),
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
    } as stateType,
    _rerenderEntireTree(state:stateType){
        console.log('state changed')
    },
    getState() {
      return this._state
    },
    addPost(){
        const postMessage:PostDataType = {id:v1(), content:this._state.profileData.textPostProfileText, cntLike: 0}
        this._state.profileData.postData.push(postMessage)
        this._rerenderEntireTree(this._state)
    },
    updateTextProfile(newText:string){
        this._state.profileData.textPostProfileText = newText
        this._rerenderEntireTree(this._state)
    },
    callSubsriber(observer: () => void ){
        this._rerenderEntireTree = observer
    },
    dispatch(action:actionType){
        if (action.type === ADD_POST) {
            this.addPost()
        } else if (action.type === UPDATE_TITLE_PROFILE) {
            if (typeof action.title === "string") this.updateTextProfile(action.title)
        }
    }
}


//@ts-ignore
window.state = store.getState()

