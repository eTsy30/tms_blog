
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";


type Post = {
    id: number,
    image: string,
    text: string,
    date: string,
    lesson_num: number,
    title: string,
    author: number,
    like?: boolean,
    dislike?: boolean,
    favorit?: boolean

}
interface IPostsState {
    content: Array<Post> | null,

    isLoading: boolean
}
const initialState: IPostsState = {
    content: null,

    isLoading: false

}
export const getlike: any = createAsyncThunk(
    'Like',

    async () => {

        try {
            const response = await fetch(`https://studapi.teachmeskills.by/blog/posts/?limit=10000&offset=0`)
            const responseFormat = await response.json()
            return [responseFormat.results, responseFormat.count]
        } catch (error) {
            return console.log(error);
        }

    })


const likeReducer = createSlice({
    name: 'postReducer',
    initialState,
    extraReducers: {
        [getlike.pending]: (state: any) => {
            state.isLoading = true
        },
        [getlike.fulfilled]: (state, action) => {
            state.content = action.payload[0]
            state.isLoading = false
        },
        [getlike.rejected]: (state) => {
            state.isLoading = false
        },

    },
    reducers: {

        likeP: (state, action: PayloadAction<number>) => {

            if (state.content) {
                state.content = state.content.map(post => post.id === action.payload ? { ...post, like: !post.like } : post)
            }

        },
        dislikeP: (state, action: PayloadAction<number>) => {
            if (state.content) {
                state.content = state.content.map(post => post.id === action.payload ? { ...post, dislike: !post.dislike } : post)
            }
        },
        favoritP: (state, action: PayloadAction<number>) => {
            if (state.content) {
                state.content = state.content.map(post => post.id === action.payload ? { ...post, favorit: !post.favorit } : post)
            }
        },
    },

})
export default likeReducer.reducer
export const { likeP, dislikeP, favoritP } = likeReducer.actions