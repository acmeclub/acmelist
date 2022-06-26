import { css } from '@emotion/css';
import React, { FunctionComponent } from 'react';
import { useTheme } from '@emotion/react'
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { ViewComponentName, replaceView } from '../store/viewport-slice';
import { selectLists } from '../store/lists-slice';
import InboxSVG from '../default-icons/inbox.svg';

const buttonCSS = `
    display: flex;
    align-items: center;
    font-size: inherit;
    font-weight: 400;
    width: 100%;
    background: none;
    border: 0;
    border-radius: 3px;
    padding: 0.5em;
    cursor: pointer;
    &:hover {
        background: #BDD4FF;
    }`;

const List: FunctionComponent<{ list: AcmeList }> = ({ list }) => {
    const dispatch = useAppDispatch();
    return (
        <button
            className={css(buttonCSS)}
            onClick={() => dispatch(replaceView({
                viewIndex: 0,
                viewState: {
                type: ViewComponentName.ListView,
                listId: list.id,
                },
            }))}
        >
            <span className={css`color: #858585; padding-right: 0.5em;`}><InboxSVG /></span>
            <span>{list.name}</span>
        </button>
    );
};

export const ListNavView: FunctionComponent = () => {
    const lists = useAppSelector((state) => selectLists(state.lists));
    const theme = useTheme();
    
    return (
        <div>
            <h1>AcmeList</h1>
            <nav
                className={css`
                    display: flex;
                    flex-direction: column;
                    width: 16em;
                `}
            >
                <button className={css(buttonCSS)}>Up Next</button>
                <button className={css(buttonCSS)}>Done</button>
                {lists.map((list) => <List list={list} />)}
            </nav>
        </div>
    );
};
