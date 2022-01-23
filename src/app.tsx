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

export function App() {
  return (
    <>
      <h2>Inbox</h2>
      {items.map((item) => <Item key={item.id} item={item} />)}
    </>
  )
}
