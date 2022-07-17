import { css } from '@emotion/css';
import React, { FunctionComponent, useState, useRef, useEffect } from 'react';
import { buttonCSS } from './view';
import { useAppDispatch } from '../store/hooks';
import { ViewComponentName, replaceView } from '../store/viewport-slice';
import InboxSVG from '../default-icons/inbox.svg';

// https://stackoverflow.com/questions/6139107/programmatically-select-text-in-a-contenteditable-html-element
function selectElementContents(el: HTMLElement) {
    const range = document.createRange();
    range.selectNodeContents(el);
    const sel = window.getSelection();
    if (sel) {
        sel.removeAllRanges();
        sel.addRange(range);
    }
}

// Editable list button
// Click once to navigate
// Double click to edit
// Escape to leave editable mode
export const List: FunctionComponent<{ list: AcmeList }> = ({ list }) => {
    const [name, setName] = useState(list.name);
    const [isEditing, setEditingState] = useState(false)
    const ref = useRef<HTMLSpanElement | null>(null);

    const edit = () => {
        setEditingState(true);
    }

    useEffect(() => {
        if (ref.current) {
            ref.current.focus();
            selectElementContents(ref.current);
        }
    }, [ref, isEditing]);

    const keyboardListener = (event) => {
        console.log(event.keyCode);
        if (event.keyCode === 13) {
            setEditingState(true);
        }
        if (event.keyCode === 27) {
            // Escape key
            setEditingState(false);
        }
    }

    const dispatch = useAppDispatch();
    return (
        <>
            {isEditing && (
                <div className={css(buttonCSS)} onKeyDown={keyboardListener}>
                    <span className={css`color: #858585; padding-right: 0.5em;`}><InboxSVG /></span>
                    <span
                        contentEditable
                        ref={ref}
                        className={css`
                            position: absolute;
                            width: 100%;
                            height: 100%;
                            box-sizing: border-box;
                            background: #ffff003b;
                            outline-style: none;
                            left: 0;
                            padding-left: 2.25em;
                            display: flex;
                            align-items: center;
                        `}
                    >
                        Aasds
                    </span>
                </div>
            )}
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
                        edit();
                    }}
                >
                    <span className={css`color: #858585; padding-right: 0.5em;`}><InboxSVG /></span>
                    <span className={css`
                        position: absolute;
                        width: 100%;
                        height: 100%;
                        border: 10px solid black;
                        box-sizing: content-box;
                    `}>
                        {list.name}
                    </span>
                </button>
            )}
        </>
    );
};