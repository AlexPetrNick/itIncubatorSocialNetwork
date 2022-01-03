export type PostDataType = {
    id: number
    content: string
    cntLike: number
}
export type DataTypes = {
    name: string
    message: string
    id: number
}

export type stateType = {
    profileData: {
        postData: Array<PostDataType>
        textPostProfileText: string
    }
    dialogsData: Array<DataTypes>
}

export type rerenderEntireTreeType = (state:stateType, addPost:() => void) => void