import { css, } from '@emotion/css';
import { useTheme } from '@emotion/react'

function Check() {
  const theme = useTheme();
  return (
    <button className={css`
      border: 1px solid ${theme.colours.outlines};
      border-radius: 2px;
      background: none;
      width: 1.5em;
      height: 1.5em;
      flex-shrink: 0;
      top: 3px;
      position: relative;
      margin-right: 0.5em;
    `}>
    </button>
  );
}

export function Item({ item }: { item: AcmeItem }) {
  return (
    <div>
      <p className={css`margin: 0;`}>{item.text}</p>
      <div className={css`
        display: flex;
        flex-direction: row;
        align-items: flex-start;
      `}>
        <Check />
      </div>
    </div>
  );
}
