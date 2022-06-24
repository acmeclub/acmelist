import { useReducer, FunctionComponent } from 'react';
// import { defaultState, reducer } from './state';
import { Item } from './item/item';

const initialState = {count: 0};

export const ListView: FunctionComponent = () => {
  // const [state, dispatch] = useReducer(reducer, defaultState);
  const currentList = { items: [] };
  if (!currentList) return <div />;
  return (
    <div>
        <h2>Inbox</h2>
        <div>
            {currentList.items.map((item) =>
                <Item
                  key={item.id}
                  item={item}
                />)}
        </div>
    </div>
  )
}