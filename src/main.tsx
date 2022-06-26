import { createRoot } from 'react-dom/client';
import { App } from './app';
import { Provider } from 'react-redux'
import './index.css';
import { AcmeThemeProvider } from './theme/provider';
import { store } from './store/store';
import { load, ItemsState } from './store/items-slice';
import { load as loadLists, ListsState } from './store/lists-slice';

const root = createRoot(document.getElementById('app')!);

const dummyItems: ItemsState = {
    map: {
        ['1']: {
            id: '1',
            text: 'Hey Dan, are you able to create a password for the user xxxxxxx@yyyyyyyyyy.com please?',
        },
        ['2']: {
            id: '2',
            text: 'Read Anti-Fragile',
        },
        ['3']: {
            id: '3',
            text: 'Morning swim',
        },
        ['4']: {
            id: '4',
            text: 'Bad Lieutenant original',
        },
        ['5']: {
            id: '3',
            text: 'Giri Haji',
        },
    },
    orderedLists: {
        inbox: ['1', '2', '3'],
        watch: ['4', '5'],
    },
};

const dummyLists: ListsState = {
    map: {
        inbox: {
            id: 'inbox',
            name: 'Inbox',
        },
        watch: {
            id: 'watch',
            name: 'Watch',
        },
    },
    order: ['inbox', 'watch']
}

// Performance testing
// for (let i = 4; i < 100000; i++) {
//     dummyData.map[i.toString()] = {
//         id: i.toString(),
//         text: `test ${i}`,
//     }
//     dummyData.orderedLists.inbox.push(i.toString());
// }

// Load data
store.dispatch(load(dummyItems));
store.dispatch(loadLists(dummyLists));

root.render(
    <Provider store={store}>
        <AcmeThemeProvider>
            <App />
        </AcmeThemeProvider>
    </Provider>
);