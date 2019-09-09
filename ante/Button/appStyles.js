import { css } from '@emotion/core';

const appStyles = ({
  buttonBackgroundColorHover,
  buttonTextColorHover,
  buttonTextColor,
  buttonFontFamily,
  buttonFontWeight,
  buttonFontStyle,
  buttonBorderColor,
  buttonBackgroundColor
}) => css`
  .ant-btn {
    font-family: ${buttonFontFamily};
    font-weight: ${buttonFontWeight};
    font-style: ${buttonFontStyle};
    border-color: ${buttonBorderColor};
    background: ${buttonBackgroundColor};
    color: ${buttonTextColor};
    border-radius: 0;
  }
  .ant-btn .anticon {
    font-weight: 400;
  }
  .ant-btn:hover,
  .ant-btn:focus,
  .ant-btn:active,
  .ant-btn.active {
    background: ${buttonBackgroundColorHover};
    color: ${buttonTextColorHover};
    border-color: ${buttonBackgroundColorHover};
  }
`;

export default appStyles;
