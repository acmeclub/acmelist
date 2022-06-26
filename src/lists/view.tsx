import { css } from '@emotion/css';
import { FunctionComponent } from 'react';
import { useAppSelector } from '../store/hooks';
import { selectItemsByListId } from '../store/items-slice';
import { selectListById } from '../store/lists-slice';
import { Item } from '../items/item';
import InboxSVG from '../default-icons/inbox.svg';

export const ListView: FunctionComponent<{ listId: string }> = ({ listId }) => {
  const items = useAppSelector((state) => selectItemsByListId(state.items, listId));
  const list = useAppSelector((state) => selectListById(state.lists, listId));
  const currentList = { items: [] };
  if (!currentList) return <div />;
  return (
    <div>
        <h1>
          <InboxSVG className={css`color: #858585; `} />
          <span>{list.name}</span>
        </h1>
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