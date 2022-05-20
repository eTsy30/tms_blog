import { AnyAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
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
}
interface IPostsState {
    content: Array<Post> | null
}
const initialState: IPostsState = {
    content: null,
}

const postReducer = createSlice({
    name: 'postReducer',
    initialState,
    reducers: {
        fetchPosts: (state, action: PayloadAction<Array<Post>>) => {
            console.log('rrrrrrr', action.payload);
            state.content = action.payload
        },
        likePost: (state, action: PayloadAction<number>) => {
            if (state.content) {
                state.content = state.content.map(post => post.id === action.payload ? { ...post, like: true } : post)
            }
        },
        dislikePost: (state, action: PayloadAction<number>) => {
            if (state.content) {
                state.content = state.content.map(post => post.id === action.payload ? { ...post, like: false } : post)
            }
        },
    },
})
export default postReducer.reducer
export const { fetchPosts, likePost, dislikePost } = postReducer.actions
