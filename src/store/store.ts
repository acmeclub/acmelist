import { configureStore } from '@reduxjs/toolkit'
import {
    itemsSlice, add,
} from './items-slice';

// See Usage with Typescript https://redux.js.org/usage/usage-with-typescript#standard-redux-toolkit-project-setup-with-typescript
export const store = configureStore({
    reducer: {
        items: itemsSlice.reducer,
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred reducer types
export type AppDispatch = typeof store.dispatch;