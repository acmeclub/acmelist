import {
  createSlice, PayloadAction,
  createSelector,
} from '@reduxjs/toolkit';

interface AcmeList {
  id: string;
  name: string;
}

export interface ListsState {
  map: Record<string, AcmeList>;
  order: string[];
};

const initialState: ListsState = {
  map: {},
  order: [],
};

export const listsSlice = createSlice({
    name: 'lists',
    initialState,
    reducers: {
      load: (state, action: PayloadAction<ListsState>) => {
        state.map = action.payload.map;
        state.order = action.payload.order;
      },
    },
  });
  
export const { load } = listsSlice.actions;

export const selectLists = (state: ListsState) =>
  state.order.map((listId) => state.map[listId]);

