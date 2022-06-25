import { css } from '@emotion/css';
import React, { FunctionComponent } from 'react';
import { useTheme } from '@emotion/react'

export const ListNavView: FunctionComponent = () => {
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
            `}
        >
            <button onClick={() => console.log('jump 1')}>
                List 1
            </button>
            <button onClick={() => console.log('jump 1')}>
                List 2
            </button>
        </div>
    );
};
