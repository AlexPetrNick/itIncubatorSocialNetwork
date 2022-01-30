import {createStore, combineReducers} from 'redux'
import {dialogsPageReducer} from "./reducers/dialogsPageReducer";
import {profileDataReducer} from "./reducers/profileDataReducer";

const reducers = combineReducers({
    dialogsDataPage:dialogsPageReducer,
    profileDataPage:profileDataReducer

})


let store = createStore(reducers)


export type stateTypeFromStore = ReturnType<typeof store.getState >


export default store