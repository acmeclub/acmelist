import { createRoot } from 'react-dom/client';
import { App } from './app';
import { Provider } from 'react-redux';
import './index.css';
import { AcmeThemeProvider } from './theme/provider';
import { store } from './store/store';


const root = createRoot(document.getElementById('app')!);
root.render(
    <Provider value={store}>
        <AcmeThemeProvider>
                <App />
        </AcmeThemeProvider>
    </Provider>
);