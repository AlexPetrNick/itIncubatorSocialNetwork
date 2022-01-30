import {connect} from "react-redux";
import {Dialogs} from "./Dialogs";
import React from "react";
import {stateTypeFromStore} from "../../redux/redux-store";
import {dialogPageType} from "../../types/Types";
import {sendMessage, updateNewMessageBody} from "../../redux/reducers/dialogsPageReducer";


type MyPostsContainerPropsType = mapStateToPropsTypes & mapDispatchToPropsTypes

class DialogsContainer extends React.Component<MyPostsContainerPropsType>{
    render() {
        return (
            <Dialogs
                state={this.props.profileData}
                sendMessage={this.props.sendMessage}
                updateNewMessageBody={this.props.updateNewMessageBody}
            />
        )
    }
}

type mapStateToPropsTypes = {
    profileData:dialogPageType
}
const mapStateToProps = (state:stateTypeFromStore):mapStateToPropsTypes => {
    return {
        profileData:state.dialogsDataPage
    }
}

type mapDispatchToPropsTypes = {
    sendMessage: () => void
    updateNewMessageBody: (title:string) => void
}

export default connect(mapStateToProps, {
    updateNewMessageBody,
    sendMessage
} as mapDispatchToPropsTypes)(DialogsContainer)