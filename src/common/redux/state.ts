
import {actionType, PostDataType, stateType} from "../types/Types";
import {v1} from "uuid";

const randomText = (array:Array<string>, num:number) => {
    const randNum = Math.floor(Math.random() * num )
    return array[randNum]
}


const one = 'a192de68-75e4-11ec-90d6-0242ac120003'
const two = 'a4ec7812-75e4-11ec-90d6-0242ac120003'
const three = 'a83f0cfa-75e4-11ec-90d6-0242ac120003'
const four = 'aa8c6c78-75e4-11ec-90d6-0242ac120003'


export const ADD_POST = 'ADD-POST'
export const UPDATE_TITLE_PROFILE = 'UPDATE-TITLE-PROFILE'
export const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
export const SEND_MESSAGE = 'SEND-MESSAGE'


export const addPostAC = () => ({type:ADD_POST})
export const updateTitleProfileAC = (title:string) => ({type:UPDATE_TITLE_PROFILE, title})
export const updateNewMessageBody = (title:string) => ({type:UPDATE_NEW_MESSAGE_BODY, title})
export const sendMessage = () => ({type:SEND_MESSAGE})

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
            textPostProfileText: ""
        },
        dialogsPage: {
            dialogsData: [
                {id: one, name: "user1"},
                {id: two, name: "user2"},
                {id: three, name: "user3"},
                {id: four, name: "user4" },
            ],
            messageData: {
                [one]: ["Hi ALl"],
                [two]: ["How is your it-kam?"],
                [three]: ["yo"],
                [four]: ["Bye"],
            },
            newMessageText: ''
        }
    } as stateType,
    _callSubscribers(state:stateType){
        console.log('state changed')
    },
    getState() {
      return this._state
    },
    addPost(){
        const postMessage:PostDataType = {id:v1(), content:this._state.profileData.textPostProfileText, cntLike: 0}
        this._state.profileData.postData.push(postMessage)
        this.updateTextProfile('')
        this._callSubscribers(this._state)
    },
    updateTextProfile(newText:string){
        this._state.profileData.textPostProfileText = newText
        this._callSubscribers(this._state)
    },
    updateTextNewMessage(title:string){
        this._state.dialogsPage.newMessageText = title
        this._callSubscribers(this._state)
    },
    sendMessage(){
        const randName = randomText(this._state.dialogsPage.dialogsData.map(d => d.id), 3)
        this._state.dialogsPage.messageData[randName].push(this._state.dialogsPage.newMessageText)
        this.updateTextNewMessage('')
        this._callSubscribers(this._state)
    },
    subscribe(observer: (state:stateType) => void ){
        this._callSubscribers = observer
    },
    dispatch(action:actionType){
        if (action.type === ADD_POST) {
            this.addPost()
        } else if (action.type === UPDATE_TITLE_PROFILE) {
            if (typeof action.title === "string") this.updateTextProfile(action.title)
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            if (typeof action.title === "string") this.updateTextNewMessage(action.title)
        } else if (action.type === SEND_MESSAGE) {
            this.sendMessage()
        }
    }
}


//@ts-ignore
window.state = store.getState()

