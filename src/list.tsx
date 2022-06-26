import { FunctionComponent } from 'react';
import { useAppSelector } from './store/hooks';
import { selectItemsByListId } from './store/items-slice';
import { Item } from './items/item';

export const ListView: FunctionComponent<{ listId: string }> = ({ listId }) => {
  const items = useAppSelector((state) => selectItemsByListId(state.items, listId));
  const currentList = { items: [] };
  if (!currentList) return <div />;
  return (
    <div>
        <h2>Inbox</h2>
        <div>
            {items.map((item) =>
                <Item
                  key={item.id}
                  item={item}
                />)}
        </div>
    </div>
  )
}