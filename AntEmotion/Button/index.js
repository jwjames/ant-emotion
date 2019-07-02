import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import Button from 'antd/lib/button';

// https://ant.design/components/button/
// To get a customized button, just set type/shape/size/loading/disabled.

const StyledButton = ({
  backgroundColor,
  backgroundColorHover,
  staticBackgroundColor,
  textColor,
  textColorHover,
  staticTextColor,
  customStyle,
  fontFamily,
  children,
  buttonClassName,
  ...rest
}) => {
  const propStyles = css`
    .ant-btn {
      background: ${backgroundColor || staticBackgroundColor};
      color: ${textColor || staticTextColor};
      font-family: ${fontFamily};
      border-color: ${staticBackgroundColor};
    }
    .ant-btn:hover,
    .ant-btn:focus,
    .ant-btn:active,
    .ant-btn.active {
      background: ${backgroundColorHover || staticBackgroundColor};
      color: ${textColorHover || staticTextColor};
      border-color: ${staticBackgroundColor};
    }
  `;

  return (
    <span
      css={css`
        ${propStyles}
        ${customStyle}
      `}
      className={buttonClassName}
    >
      <Button {...rest}>{children}</Button>
    </span>
  );
};

StyledButton.propTypes = {
  buttonClassName: PropTypes.string,
  backgroundColor: PropTypes.string,
  backgroundColorHover: PropTypes.string,
  textColor: PropTypes.string,
  textColorHover: PropTypes.string,
  staticBackgroundColor: PropTypes.string,
  customStyle: PropTypes.object,
  staticTextColor: PropTypes.string,
  fontFamily: PropTypes.string,
  children: PropTypes.node
};

StyledButton.defaultProps = {
  backgroundColor: '',
  backgroundColorHover: '',
  textColor: '',
  textColorHover: '',
  staticBackgroundColor: '',
  customStyle: null,
  staticTextColor: '',
  fontFamily: '',
  children: ''
};

export default StyledButton;
