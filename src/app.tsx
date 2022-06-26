import { ElementType } from 'react';
import { css } from '@emotion/css';
import { CreateButton } from './create-button';
import { ListView } from './list';
import { ItemView } from './items/view';
import { ListNavView } from './list-nav/view';
import { ViewComponentName } from './store/viewport-slice';
import { FunctionComponent } from 'react';
import { useAppSelector, useAppDispatch } from './store/hooks';

export function App() {
  const viewport = useAppSelector((state) => state.viewport);
  const views = viewport.views.map((view) => {
    // TODO: Keys
    if (view.type === ViewComponentName.ListView) {
      return () => <ListView listId={view.listId} />;
    }
    // TODO: Warn
    return () => false;
  });
  return (
    <div className={css``}>
      <ListNavView />
      <div>
        {views.map((View) => <View />)}
      </div>
      {/* <CreateButton /> */}
    </div>
  )
}
