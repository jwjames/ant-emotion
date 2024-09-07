import { css } from '@emotion/core';

const appStyles = ({ inputBorderColor }) => css`
  .ant-input {
    padding: 20px 11px;
    height: 40px;
    border-radius: 0;
  }
  .ant-input:focus {
    border-color: ${inputBorderColor};
    /* box-shadow: 0 0 0 2px ${inputBorderColor + `45`}; */
    box-shadow: none;
  }

  .ant-input:hover {
    border-color: ${inputBorderColor};
  }
  .ant-input-number {
    width: 200px;
  }
  .ant-input-number-handler-wrap {
    display: none;
  }
  textarea.ant-input {
    padding: 12px 11px;
  }
`;

export default appStyles;
