import { createContext } from 'react';

const inbox: AcmeList = {
    name: 'Inbox',
    items: [
        {
        id: 1,
        text: 'Hey Dan, are you able to create a password for the user xyz@xyz.com please?Hey Dan, are you able to create a password for the user xyz@xyz.com please?Hey Dan, are you able to create a password for the user xyz@xyz.com please?Hey Dan, are you able to create a password for the user xyz@xyz.com please?Hey Dan, are you able to create a password for the user xyz@xyz.com please?Hey Dan, are you able to create a password for the user xyz@xyz.com please?',
        },
        {
        id: 2,
        text: 'Read Anti-Fragile',
        },
        {
        id: 3,
        text: 'Morning swim',
        },
    ],
};

export const defaultState = new Map<string, AcmeList>([
    ['inbox', inbox],
]);

export const enum ActionType {
    // AddList = 'AddList',
    // DestroyList = 'DestroyList',
    AddItem = 'AddItem',
    // RemoveItem = 'RemoveItem',
}

type Action = {
    type: ActionType.AddItem;
    targetList: string;
    item: AcmeItem;
};

export function reducer(state: Map<string, AcmeList>, action: Action): Map<string, AcmeList> {
    switch (action.type) {
      case ActionType.AddItem: {
          const list = state.get(action.targetList);
          if (!list) throw new Error(`targetList '${list}' not found.`)
          list.items.push(action.item);
      }
      default:
        throw new Error('Reducer called without an action type');
    }
}

export const listContext = createContext<Map<string, AcmeList>>(defaultState);