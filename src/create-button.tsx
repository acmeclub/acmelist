import { FunctionComponent } from 'react';
import { css } from '@emotion/css';

export const CreateButton: FunctionComponent<{
    onClick: () => any,
}> = ({ onClick }) => {
    return (
        <button
            className={css`
                background-color: white;
                position: fixed;
                right: 1em;
                bottom: 1em;
                border: 0;
                font-size: 1.5em;
                border-radius: 2em;
                width: 2em;
                height: 2em;
                cursor: pointer;
            `}
            onClick={onClick}
        >
            +
        </button>
    )
};
