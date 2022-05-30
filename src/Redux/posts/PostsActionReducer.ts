import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AnyAsyncThunk } from "@reduxjs/toolkit/dist/matchers";

type Post = {
    id: number,
    image: string,
    text: string,
    date: string,
    lesson_num: number,
    title: string,
    author: number,
    like?: boolean,
    dislike: boolean,
    favorit: boolean

}
interface IPostsState {
    content: Array<Post> | null,
    isLoading: boolean
}
const initialState: IPostsState = {
    content: null,
    isLoading: false

}
export const getPost: any = createAsyncThunk(
    'post/getPhoto',
    async () => {
        const response = await fetch('https://studapi.teachmeskills.by/blog/posts/?limit=20')
        const responseFormat = await response.json()
        return responseFormat.results
    }

)


const postReducer = createSlice({
    name: 'postReducer',
    initialState,
    extraReducers: {
        [getPost.pending]: (state: any) => {
            state.isLoading = true
        },
        [getPost.fulfilled]: (state, action) => {
            state.content = action.payload
            state.isLoading = false
        },
        [getPost.rejected]: (state) => {
            state.isLoading = false
        },

    },
    reducers: {

        likePost: (state, action: PayloadAction<number>) => {

            if (state.content) {
                state.content = state.content.map(post => post.id === action.payload ? { ...post, like: !post.like } : post)
            }
        },
        dislikePost: (state, action: PayloadAction<number>) => {
            if (state.content) {
                state.content = state.content.map(post => post.id === action.payload ? { ...post, dislike: !post.dislike } : post)
            }
        },
        favoritPost: (state, action: PayloadAction<number>) => {
            if (state.content) {
                state.content = state.content.map(post => post.id === action.payload ? { ...post, favorit: !post.favorit } : post)
            }
        },
    },

})
export default postReducer.reducer
export const { likePost, dislikePost, favoritPost } = postReducer.actions

