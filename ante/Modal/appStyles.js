import { css } from '@emotion/core';

const appStyles = ({
  modalHeaderBackgroundColor,
  modalTitleTextColor,
  modalCloseXColor,
  bodyBackgroundColor,
  contentFontFamily,
  cancelButtonTextColor,
  borderColor,
  colorBodyText,
  modalTitleFontFamily,
  cancelButtonColor,
  modalMaskColor,
  anchorColor
}) => css`
  .ant-modal {
    max-width: 90%;
  }
  .ant-modal a{
    color: ${anchorColor};
  }
  .ant-modal-header {
    background-color: ${modalHeaderBackgroundColor};
    border-radius: 0;
    text-align: center;
  }

  .ant-modal-content .ant-modal-close-x {
    color: ${modalCloseXColor};
  }
  .ant-modal-content {
    /* background: ${bodyBackgroundColor}; */
    /* color: ${colorBodyText}; */
    /* font-family: ${contentFontFamily}; */
    border-radius: 0;
  }

  .ant-modal-header .ant-modal-title {
    margin: 0;
    font-size: 20px;
    color: ${modalTitleTextColor};
    font-family: ${modalTitleFontFamily};
    line-height: 22px;
  }

  .ant-btn:first-of-type {
    background-color: ${cancelButtonColor};
    border-color: ${cancelButtonColor};
    color: ${cancelButtonTextColor};
  }
  .ant-modal-footer {
    border-top: 1px solid ${borderColor};
  }

  .ant-modal-mask {
    background-color: ${modalMaskColor + `65`};
  }
`;

// TODO: figure out what to do for .thank-you styles.
// see mapCampaignToTheme.js

export default appStyles;
