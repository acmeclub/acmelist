import { useState, FunctionComponent } from 'react';
import { Item } from './item';

const items: AcmeItem[] = [
  {
    id: 1,
    text: 'Hey Dan, are you able to create a password for the user xyz@xyz.com please?Hey Dan, are you able to create a password for the user xyz@xyz.com please?Hey Dan, are you able to create a password for the user xyz@xyz.com please?Hey Dan, are you able to create a password for the user xyz@xyz.com please?Hey Dan, are you able to create a password for the user xyz@xyz.com please?Hey Dan, are you able to create a password for the user xyz@xyz.com please?',
  },
  {
    id: 2,
    text: 'Read Anti-Fragile',
  },
  {
    id: 2,
    text: 'Morning swim',
  }
];

export const ListView: React.FunctionComponent = () => {
  const [state, updateState] = useState(items);
  return (
    <div>
        <h2>Inbox</h2>
        <div>
            {state.map((item) =>
                <Item key={item.id} item={item} />)}
        </div>
    </div>
  )
}