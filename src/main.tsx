import { createRoot } from 'react-dom/client';
import { App } from './app';
import './index.css';
import { AcmeThemeProvider } from './theme/provider';
import { listContext, defaultState } from './state';

const ListContextProvider = listContext.Provider;

const root = createRoot(document.getElementById('app')!);
root.render(
    <ListContextProvider value={defaultState}>
        <AcmeThemeProvider>
                <App />
        </AcmeThemeProvider>
    </ListContextProvider>
);