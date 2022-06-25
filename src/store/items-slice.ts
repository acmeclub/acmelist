import {
  createSlice, PayloadAction,
  createSelector,
} from '@reduxjs/toolkit';

// Notes on structuring data in Redux
// https://medium.com/@adamrackis/querying-a-redux-store-37db8c7f3b0f

// Various actions we need to make:
// Retrieve all lists
// Retrieve ALL items (in date created order)
// Retrieve all items within a list
// Retrieve x item

// Data store
// Collections {id,name,order,custom}
// List {id,name,parent,order}

// Load all items as hashmap
// Create ordered, memoised list structures with id references (we have to store the sort order inside the item - floats etc)
// https://adamreeve.co.nz/blog/todo-crdt.html
// OR treat ordered collection as object to sync (cons: writes over other users, )

interface ItemsState {
  map: Record<string, AcmeItem>;
  orderedLists: Record<string, string[]>;
};

const initialState: ItemsState = {
  map: {},
  orderedLists: {
    inbox: [],
  },
};

export const itemsSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {
      load: (state, action: PayloadAction<ItemsState>) => {
        state.map = action.payload.map;
        state.orderedLists = action.payload.orderedLists;
      },
      add: (state, action: PayloadAction<AcmeItem>) => {
        state.map[action.payload.id] = action.payload;
      },
    },
  });
  
export const { add, load } = itemsSlice.actions;

const selectItems = (state: ItemsState) => state.map;
const selectItemsFromList = (state: ItemsState, listId: string) => state.orderedLists[listId];
export const selectItemsByListId = createSelector(
  [selectItems, selectItemsFromList],
  (items, list) => list.map((itemId) => items[itemId]),
);

