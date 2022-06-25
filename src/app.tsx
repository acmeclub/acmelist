import { useState, ElementType } from 'react';
import { CreateButton } from './create-button';
import { ListView } from './list';
import { ItemView } from './item-view/view';

export const enum ViewComponentName {
  Home = 'Home',
  ListView = 'ListView',
  ItemView = 'ItemView',
};

interface View {
  type: ViewComponentName,
}

const viewMap = new Map<ViewComponentName, ElementType>([
  [ViewComponentName.ListView, ListView],
  [ViewComponentName.ItemView, ItemView],
]);

const defaultView = {
  type: ViewComponentName.ListView,
}

export function App() {
  const [view, setView] = useState<View>({
    type: ViewComponentName.ListView,
  });
  const RenderedView = viewMap.get(view.type);
  if (!RenderedView) {
    throw new Error('No view rendered.');
  };
  return (
    <>
      <RenderedView />
      <CreateButton
        onClick={() => {
          setView({
            type: ViewComponentName.ItemView,
          })
        }}
      />
    </>
  )
}
