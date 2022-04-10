import { createRoot } from 'react-dom/client';
import { App } from './app';
import './index.css';
import { AcmeThemeProvider } from './theme/provider';

const root = createRoot(document.getElementById('app')!);
root.render(
    <AcmeThemeProvider>
        <App />
    </AcmeThemeProvider>
);