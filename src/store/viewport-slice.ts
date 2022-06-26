import {
  createSlice, PayloadAction,
} from '@reduxjs/toolkit';

export const enum ViewComponentName {
  ListNavView = 'ListNavView',
  ListView = 'ListView',
  ItemView = 'ItemView',
};

export interface View {
  type: ViewComponentName;
}

export interface ListViewState extends View {
  type: ViewComponentName.ListView;
  listId: string;
}

export interface ItemViewState extends View {
  type: ViewComponentName.ItemView;
  itemId: string;
}

export interface ViewportState {
  layout: 'small-device' | 'large-device';
  views: (ItemViewState | ListViewState)[]; // Left to right
};

const initialState: ViewportState = {
  layout: 'large-device',
  views: [{ type: ViewComponentName.ListView, listId: 'inbox' }],
};

export const viewportSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {
      replaceView: (state, action: PayloadAction<{
        viewIndex: number,
        viewState: ItemViewState | ListViewState,
      }>) => {
        const views = [...state.views];
        views[action.payload.viewIndex] = action.payload.viewState;
        return {
          ...state,
          views,
        }
      },
    },
  });
  
export const { replaceView } = viewportSlice.actions;
