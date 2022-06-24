import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Notes on structuring data in Redux
// https://medium.com/@adamrackis/querying-a-redux-store-37db8c7f3b0f

// Various actions we need to make:
// Retrieve all lists
// Retrieve ALL items (in date created order)
// Retrieve all items within a list
// Retrieve x item

interface ItemsState {
  map: Record<string, AcmeItem>;
}

const initialState: ItemsState = {
  map: {
    a: {
      id: 1,
      text: 'Hey Dan, are you able to create a password for the user xyz@xyz.com please?Hey Dan, are you able to create a password for the user xyz@xyz.com please?Hey Dan, are you able to create a password for the user xyz@xyz.com please?Hey Dan, are you able to create a password for the user xyz@xyz.com please?Hey Dan, are you able to create a password for the user xyz@xyz.com please?Hey Dan, are you able to create a password for the user xyz@xyz.com please?',
    },
    b: {
      id: 2,
      text: 'Read Anti-Fragile',
    },
    c: {
      id: 3,
      text: 'Morning swim',
    }
  }
}

export const itemSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {
      add: (state, action: PayloadAction<AcmeItem>) => {
        state.map[action.payload.id] = action.payload;
      },
    }
  })
  
  export const { add } = itemSlice.actions
  