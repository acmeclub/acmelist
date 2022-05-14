import { configureStore } from '@reduxjs/toolkit';
import {
    counterSlice, add,
} from './items-slice';

// See Usage with Typescript https://redux.js.org/usage/usage-with-typescript#standard-redux-toolkit-project-setup-with-typescript
export const store = configureStore({
    reducer: counterSlice.reducer
});