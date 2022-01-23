import { render } from 'preact';
import { App } from './app';
import './index.css';
import { AcmeThemeProvider } from './theme/provider';

render(
    <AcmeThemeProvider>
        <App />
    </AcmeThemeProvider>,
    document.getElementById('app')!,
);
