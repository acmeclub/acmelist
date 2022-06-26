import { css } from '@emotion/css';
import React, { FunctionComponent } from 'react';
import { useTheme } from '@emotion/react'
import { useAppDispatch } from '../store/hooks';
import { ViewComponentName, replaceView } from '../store/viewport-slice';

export const ListNavView: FunctionComponent = () => {
    const theme = useTheme();
    const dispatch = useAppDispatch();
    
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
            <button
                onClick={() => dispatch(replaceView({
                  viewIndex: 0,
                  viewState: {
                    type: ViewComponentName.ListView,
                    listId: 'inbox',
                  },
                }))}
            >
                List 1
            </button>
            <button
                onClick={() => dispatch(replaceView({
                    viewIndex: 0,
                    viewState: {
                    type: ViewComponentName.ListView,
                    listId: 'b',
                    },
              }))}
            >
                List 2
            </button>
        </div>
    );
};
