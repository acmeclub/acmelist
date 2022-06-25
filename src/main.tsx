import { createRoot } from 'react-dom/client';
import { App } from './app';
import { Provider } from 'react-redux'
import './index.css';
import { AcmeThemeProvider } from './theme/provider';
import { store } from './store/store';
import { load } from './store/items-slice';

const root = createRoot(document.getElementById('app')!);

const dummyData = {
    map: {
        ['1']: {
            id: '1',
            text: 'Hey Dan, are you able to create a password for the user xyz@xyz.com please?Hey Dan, are you able to create a password for the user xyz@xyz.com please?Hey Dan, are you able to create a password for the user xyz@xyz.com please?Hey Dan, are you able to create a password for the user xyz@xyz.com please?Hey Dan, are you able to create a password for the user xyz@xyz.com please?Hey Dan, are you able to create a password for the user xyz@xyz.com please?',
        },
        ['2']: {
            id: '2',
            text: 'Read Anti-Fragile',
        },
        ['3']: {
            id: '3',
            text: 'Morning swim',
        },
    },
    orderedLists: {
        inbox: ['1',],
        b: [],
    },
};

// Load data
store.dispatch(load(dummyData));

root.render(
    <Provider store={store}>
        <AcmeThemeProvider>
            <App />
        </AcmeThemeProvider>
    </Provider>
);