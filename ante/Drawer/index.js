import React from 'react';
import PropTypes from 'prop-types';
import Drawer from 'antd/lib/drawer';
import { css } from '@emotion/core';

const StyledDrawer = ({
  titleFontFamily,
  titleColor,
  maskColor,
  iconColor,
  contentBackgroundColor,
  contentTextColor,
  ...rest
}) => {
  const propStyles = css`
    .ant-drawer-content .ant-drawer-close {
      color: ${iconColor};
    }
    .ant-drawer-title {
      font-family: ${titleFontFamily};
      color: ${titleColor};
    }
    .ant-drawer-content {
      background-color: ${contentBackgroundColor};
      color: ${contentTextColor};
    }
    .ant-drawer-content a,
    .ant-drawer-content a:hover,
    .ant-drawer-content a:active {
      color: ${contentTextColor};
    }
  `;
  return <Drawer maskStyle={{ backgroundColor: maskColor }} bodyStyle={{ propStyles }} {...rest} />;
};

StyledDrawer.propTypes = {
  iconColor: PropTypes.string,
  contentBackgroundColor: PropTypes.string,
  contentTextColor: PropTypes.string,
  customStyle: PropTypes.object,
  backgroundColor: PropTypes.string,
  titleFontFamily: PropTypes.string,
  titleColor: PropTypes.string,
  maskColor: PropTypes.string
};

StyledDrawer.defaultProps = {
  iconColor: '',
  contentBackgroundColor: '',
  contentTextColor: '',
  customStyle: null,
  backgroundColor: '',
  titleFontFamily: '',
  titleColor: '',
  maskColor: ''
};

export default StyledDrawer;
