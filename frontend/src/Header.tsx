import { UserIcon } from './Icons'

/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { fontFamily, fontSize, gray2, gray5 } from './Styles';

export const Header = () => (
    <div
        css={css`
            position: fixed;
            box-sizing: border-box;
            top: 0;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 10px 20;
            background-color: #fff;
            border-bottom: 1px solid ${gray5};
            box-shadow: 0 3px 7px 0 rgba(110, 112, 114, 0.21);
            `}
    >
        <a href="./">Q & A</a>
        <input type="text" placeholder="Search..." />
        <a href="./signin">
            <UserIcon />
            <span>Sign In</span>
            </a>
    </div>
)