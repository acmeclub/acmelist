import { css } from '@emotion/css';
import { FunctionComponent } from 'react';
import { useTheme } from '@emotion/react'

export const ItemView: FunctionComponent<{ item: AcmeItem }> = ({ item }) => {
    const theme = useTheme();
    return (
        <div
            className={css`
                position: absolute;
                top: 0;
                left: 0;
                display: flex;
                align-items: center;
                justify-content: center;
                width: 100%;
                height: 100%;
                background: ${theme.colours.purpleRain};
            `}
        >
            <textarea
                className={css`
                    background: none;
                    border: none;
                    color: white;
                    outline: none;
                    resize: vertical;
                `}
                autoFocus
                onKeyDown={(event) => {
                    if (event.shiftKey) return;
                    if (event.key === 'Enter') {
                        event.preventDefault();
                    }
                }}
            >
            </textarea>
        </div>
    );
};
