import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {postService} from "../../services/postService";

const initialState = {
    posts: [],
    postInfo: null,
    error: null,
    loading: false,
    onePost: null
};

const getPostById = createAsyncThunk(
    'postSlice/getPostsById',
    async ({id}, {rejectWithValue}) => {
        try {
            const {data} = await postService.getOne(id);
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);
const getAllPosts = createAsyncThunk(
    'postSlice/getAllPosts',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await postService.getAll();
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const postSlice = createSlice({
    name: 'postSlice',
    initialState,
    reducers: {
        infoPost: (state, action) => {
            state.postInfo = action.payload
        },
        deletePostById: (state, action) => {

            const index = state.posts.findIndex(post => post.id === action.payload);
            state.posts.splice(index, 1)
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAllPosts.fulfilled, (state, action) => {
                    state.posts = action.payload
                state.loading = false
                }
            )
            .addCase(getAllPosts.rejected, (state, action) => {
                    state.error = action.payload
                    state.loading = false
                }
            )
            .addCase(getAllPosts.pending, (state) => {
                state.loading = true
            })
            .addCase(getPostById.fulfilled, (state, action) => {
                state.onePost = action.payload
            })
});
const {reducer: postReducer, actions: {deletePostById, infoPost}} = postSlice;

const postActions = {
    getAllPosts,
    infoPost,
    deletePostById,
    getPostById
};

export {
    postReducer,
    postActions
}
