import { css } from '@emotion/core';

export default ({
  drawerTitleFontFamily,
  drawerTitleColor,
  drawerMaskBackgroundColor,
  drawerCloseIconColor,
  drawerContentBackgroundColor,
  drawerContentTextColor,
  drawerContentFontFamily
}) => css`
  .ant-drawer-mask {
    background-color: ${drawerMaskBackgroundColor};
  }
  .ant-drawer.ant-drawer-open .ant-drawer-mask {
    opacity: 0.4;
  }
  .ant-drawer-header {
    background: transparent;
    margin: 0 22px;
    padding: 64px 8px 8px;
    text-align: center;
  }

  .ant-drawer-content .ant-drawer-close {
    color: ${drawerCloseIconColor};
  }
  .ant-drawer-title {
    font-weight: 600;
    font-family: ${drawerTitleFontFamily};
    color: ${drawerTitleColor};
  }
  .ant-drawer-content {
    font-family: ${drawerContentFontFamily};
    background-color: ${drawerContentBackgroundColor};
    color: ${drawerContentTextColor};
  }
  .ant-drawer-content a,
  .ant-drawer-content a:hover,
  .ant-drawer-content a:active {
    color: ${drawerContentTextColor};
    text-decoration: underline;
  }
`;
