import { ThemeProvider } from '@emotion/react';
import { FunctionComponent } from 'react';

const theme = {
  colours: {
    outlines: 'hsl(0, 0%, 70%)',
    purpleRain: 'hsl(238, 59%, 52%)',
  },
}

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const AcmeThemeProvider: FunctionComponent<Props> = ({ children }) => (
    <ThemeProvider theme={theme}>
        {children}
    </ThemeProvider>
);
