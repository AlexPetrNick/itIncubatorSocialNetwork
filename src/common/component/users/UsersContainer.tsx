import React from "react";
import {Users} from "./Users";
import {dialogPageType, userDataType, usersType} from "../../types/Types";
import {stateTypeFromStore} from "../../redux/redux-store";
import {connect} from "react-redux";
import {sendMessage, updateNewMessageBody} from "../../redux/reducers/dialogsPageReducer";
import {followAC, setUsersAC, unfollowAC} from "../../redux/reducers/usersDataReducers";

type MyPostsContainerPropsType = mapStateToPropsTypes & mapDispatchToPropsTypes

class UsersContainer extends React.Component<MyPostsContainerPropsType> {
    render() {
        return (
            <Users
                users={this.props.users}
                follow={this.props.followAC}
                setUsers={this.props.setUsersAC}
                unfollow={this.props.unfollowAC}
            />
        )
    }
}

type mapStateToPropsTypes = {
    users:userDataType
}
const mapStateToProps = (state:stateTypeFromStore):mapStateToPropsTypes => {
    console.log(state)
    return {
        users:state.userDataPage
    }
}

type mapDispatchToPropsTypes = {
    followAC: (userId:number) => void
    unfollowAC: (userId:number) => void
    setUsersAC: (users:usersType[]) => void
}

export default connect(mapStateToProps, {
    followAC,
    unfollowAC,
    setUsersAC
} as mapDispatchToPropsTypes)(UsersContainer)
