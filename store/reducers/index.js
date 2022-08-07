import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getMessages, getPosts, getToDos, login } from '../../api/login';

const initialState = {
  token: null,
  loginLoading: false,
  posts: [],
  messages: [],
  todos: []
};

export const loginAsync = createAsyncThunk('appState/login', async (data) => {
  const response = await login(data);
  return response.data;
});

export const getPostsAsync = createAsyncThunk('appState/getPosts', async () => {
  const res = await getPosts();
  return res.data;
});

export const getMessagesAsync = createAsyncThunk('appState/getMessages', async () => {
  const res = await getMessages();
  return res.data;
});

export const getToDosAsync = createAsyncThunk('appState/getToDos', async () => {
  const res = await getToDos();
  return res.data;
});

export const appStateSlice = createSlice({
  name: 'appState',
  initialState,

  reducers: {
    logout: (state) => {},
    changePath: (state, action) => {
      state.path = action.payload;
    }
  },

  extraReducers: (builder) => {
    builder.addCase(loginAsync.fulfilled, (state, action) => {
      state.token = action.payload.token;
      state.loginLoading = false;
      localStorage.setItem('token', JSON.stringify(action.payload.token));
    });
    builder.addCase(loginAsync.pending, (state, action) => {
      state.loginLoading = true;
    });
    builder.addCase(loginAsync.rejected, (state, action) => {
      state.loginLoading = false;
    });
    builder.addCase(getPostsAsync.fulfilled, (state, action) => {
      state.posts = action.payload.posts;
    });
    builder.addCase(getMessagesAsync.fulfilled, (state, action) => {
      state.messages = action.payload.messages;
    });
    builder.addCase(getToDosAsync.fulfilled, (state, action) => {
      state.todos = action.payload.todos;
    });
  }
});

export const { logout, changePath } = appStateSlice.actions;

export const selectAppState = (state) => state.registry;

export default appStateSlice.reducer;
