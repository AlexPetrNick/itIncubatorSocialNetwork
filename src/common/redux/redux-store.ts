import {createStore, combineReducers} from 'redux'
import {dialogsPageReducer} from "./reducers/dialogsPageReducer";
import {profileDataReducer} from "./reducers/profileDataReducer";
import {userDataReducer} from "./reducers/usersDataReducers";

const reducers = combineReducers({
    dialogsDataPage:dialogsPageReducer,
    profileDataPage:profileDataReducer,
    userDataPage:userDataReducer

})


let store = createStore(reducers)


export type stateTypeFromStore = ReturnType<typeof store.getState >


export default store