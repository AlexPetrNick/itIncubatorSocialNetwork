
import {actionType, PostDataType, stateType} from "../types/Types";
import {v1} from "uuid";
import {profileDataReducer} from "./reducers/profileDataReducer";
import {dialogsPageReducer} from "./reducers/dialogsPageReducer";

const randomText = (array:Array<string>, num:number) => {
    const randNum = Math.floor(Math.random() * num )
    return array[randNum]
}

const one = 'a192de68-75e4-11ec-90d6-0242ac120003'
const two = 'a4ec7812-75e4-11ec-90d6-0242ac120003'
const three = 'a83f0cfa-75e4-11ec-90d6-0242ac120003'
const four = 'aa8c6c78-75e4-11ec-90d6-0242ac120003'


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
    subscribe(observer: (state:stateType) => void ){
        this._callSubscribers = observer
    },
    dispatch(action:actionType){
        this._state.profileData = profileDataReducer(this._state.profileData, action)
        this._state.dialogsPage = dialogsPageReducer(this._state.dialogsPage, action)
        this._callSubscribers(this._state)
    }
}


//@ts-ignore
window.state = store.getState()

