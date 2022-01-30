import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {stateTypeFromStore} from "../../../redux/redux-store";
import React from "react";
import {profileDataType} from "../../../types/Types";
import {addPostAC, updateTitleProfileAC} from "../../../redux/reducers/profileDataReducer";

type MyPostsContainerPropsType = mapStateToPropsTypes & mapDispatchToPropsTypes

class MyPostsContainer extends React.Component<MyPostsContainerPropsType>{
    render() {
        return (
            <MyPosts
                postData={this.props.profileData.postData}
                textPostProfileText={this.props.profileData.textPostProfileText}
                addPost={this.props.addPostAC}
                updateTitleProfile={this.props.updateTitleProfileAC}
            />
        )
    }
}

type mapStateToPropsTypes = {
    profileData:profileDataType
}
const mapStateToProps = (state:stateTypeFromStore):mapStateToPropsTypes => {
    return {
        profileData:state.profileDataPage
    }
}

type mapDispatchToPropsTypes = {
    addPostAC: () => void
    updateTitleProfileAC: (title:string) => void
}

export default connect(mapStateToProps, {
    addPostAC,
    updateTitleProfileAC
} as mapDispatchToPropsTypes)(MyPostsContainer)