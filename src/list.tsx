import { useReducer, FunctionComponent } from 'react';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { add } from './store/items-slice';
import { Item } from './item/item';

const initialState = {count: 0};

export const ListView: FunctionComponent = () => {
  const items = useAppSelector((state) => state.items.map);
  const currentList = { items: [] };
  if (!currentList) return <div />;
  return (
    <div>
        <h2>Inbox</h2>
        <div>
            {/* {items.map((item) =>
                <Item
                  key={item.id}
                  item={item}
                />)} */}
        </div>
    </div>
  )
}