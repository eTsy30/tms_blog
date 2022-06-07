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
    post: Array<Post> | null,
    isLoading: boolean
}
const initialState: IPostsState = {
    post: null,
    isLoading: false

}

export const getOnePost: any = createAsyncThunk(
    'post/getOnePost',
    async (id) => {
        const response = await fetch(`https://studapi.teachmeskills.by/blog/posts/${id}`)
        const responseFormat = await response.json()
        return responseFormat
    }

)

const singlepostReducer = createSlice({
    name: 'singlepostReducer',
    initialState,
    extraReducers: {
        [getOnePost.pending]: (state: any) => {
            state.isLoading = true;
        },
        [getOnePost.fulfilled]: (state, action) => {
            state.post = action.payload;
            state.isLoading = false;



        },
        [getOnePost.rejected]: (state) => {

            state.isLoading = false;
        }
    },
    reducers: {},
})
export default singlepostReducer.reducer
export const { } = singlepostReducer.actions

