import { css } from '@emotion/css';
import React, { FunctionComponent, useState } from 'react';
import { buttonCSS } from './view';
import { useAppDispatch } from '../store/hooks';
import { ViewComponentName, replaceView } from '../store/viewport-slice';
import InboxSVG from '../default-icons/inbox.svg';

// Editable list button
// Click once to navigate
// Double click to edit
// Escape to leave editable mode
export const List: FunctionComponent<{ list: AcmeList }> = ({ list }) => {
    const [isEditing, setEditingState] = useState(false)

    const dispatch = useAppDispatch();
    return (
        <>
            {!isEditing && (
                <button
                    className={css(buttonCSS)}
                    onClick={() => dispatch(replaceView({
                        viewIndex: 0,
                        viewState: {
                        type: ViewComponentName.ListView,
                        listId: list.id,
                        },
                    }))}
                    onDoubleClick={() => {
                        setEditingState(true)
                    }}
                >
                    <span className={css`color: #858585; padding-right: 0.5em;`}><InboxSVG /></span>
                    <span>{list.name}</span>
                </button>
            )}
        </>
    );
};