import { log } from 'console';
import { AsyncThunkPayloadCreator, createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
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
    count: null,
    isLoading: boolean
}
const initialState: IPostsState = {
    content: null,
    count: null,
    isLoading: false

}
export const getPost: any = createAsyncThunk(
    'post',

    async (ilmitoff: any) => {


        const response = await fetch(`https://studapi.teachmeskills.by/blog/posts/?limit=${ilmitoff?.limit}&offset=${ilmitoff?.offset}`,

        )

        const responseFormat = await response.json()


        return [responseFormat.results, responseFormat.count]
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

            state.count = action.payload[1]
            state.content = action.payload[0]
            state.isLoading = false
            console.log(state.content);



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

