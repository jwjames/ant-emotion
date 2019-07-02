import { css } from '@emotion/core';

export default ({
  headerBackgroundColor,
  headerTextColor,
  headlineFontFamily,
  headerHeight,
  headerPadding
}) => css`
  .ant-layout-header {
    background: ${headerBackgroundColor};
    color: ${headerTextColor};
    font-family: ${headlineFontFamily};
    height: ${headerHeight};
    padding: ${headerPadding};
  }
`;
