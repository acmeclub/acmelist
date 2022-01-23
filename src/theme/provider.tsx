import { ThemeProvider } from '@emotion/react';
import { FunctionalComponent } from 'preact';

const theme = {
  colours: {
    outlines: 'hsl(0, 0%, 70%)',
  }
}

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const AcmeThemeProvider: FunctionalComponent<Props> = ({ children }) => (
    <ThemeProvider theme={theme}>
        {children}
    </ThemeProvider>
);
