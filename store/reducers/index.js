import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  path: '/feed'
};

export const updateAsync = createAsyncThunk('registry/update', async () => {});

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
    builder.addCase(updateAsync.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.rewarded =
        JSON.parse(user)?.festCoins === action.payload.user?.festCoins ? false : true;
      localStorage.setItem('user', JSON.stringify(action.payload.user));
    });
    builder.addCase(updateAsync.rejected, (state, action) => {
      if (action.error?.message?.includes('401')) {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
      }
    });
  }
});

export const { logout, changePath } = appStateSlice.actions;

export const selectAppState = (state) => state.registry;

export default appStateSlice.reducer;
