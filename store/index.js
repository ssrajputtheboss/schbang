import { configureStore } from '@reduxjs/toolkit';
import appStateReducer from './reducers';

export const store = configureStore({
  reducer: {
    appState: appStateReducer
  }
});
