import { css } from '@emotion/css';
import React, { FunctionComponent } from 'react';
import { useTheme } from '@emotion/react'
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { ViewComponentName, replaceView } from '../store/viewport-slice';
import { selectLists } from '../store/lists-slice';

export const ListNavView: FunctionComponent = () => {
    const lists = useAppSelector((state) => selectLists(state.lists));
    const theme = useTheme();
    const dispatch = useAppDispatch();
    
    return (
        <div
            className={css`
            `}
        >
            {lists.map((list) => (
                <button
                    onClick={() => dispatch(replaceView({
                        viewIndex: 0,
                        viewState: {
                        type: ViewComponentName.ListView,
                        listId: list.id,
                        },
                    }))}
                >
                {list.name}
                </button>
            ))}
        </div>
    );
};
