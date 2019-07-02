import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'antd/lib/modal';
import { css } from '@emotion/core';

const StyledModal = ({
  bodyBackgroundColor,
  colorBodyText,
  borderColor,
  cancelButtonColor,
  cancelButtonTextColor,
  children,
  closeX,
  confirmButtonColor,
  confirmButtonTextColor,
  contentFontFamily,
  headerBackgroundColor,
  titleColor,
  titleFontFamily,
  titleFontSize,
  maskColor,
  modalCloseXSize,
  ...rest
}) => {
  const propStyles = css`
    .ant-modal-content {
      background: ${bodyBackgroundColor};
      color: ${colorBodyText};
      font-family: ${contentFontFamily};
    }
    .ant-modal-header {
      background-color: ${headerBackgroundColor};
      border-radius: 0;
      text-align: center;
    }
    .ant-modal-header .ant-modal-title {
      color: ${titleColor};
      font-size: ${titleFontSize};
      font-family: ${titleFontFamily};
    }

    .ant-modal-content .ant-modal-close-x {
      color: ${closeX};
      font-size: ${modalCloseXSize};
    }
    .ant-btn-primary {
      background-color: ${confirmButtonColor};
      border-color: ${confirmButtonColor};
      color: ${confirmButtonTextColor};
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
      background-color: ${maskColor + `65`};
    }
  `;

  return (
    <Modal maskStyle={{ backgroundColor: maskColor }} style={{ propStyles }} {...rest}>
      {children}
    </Modal>
  );
};

StyledModal.propTypes = {
  maskColor: PropTypes.string,
  bodyBackgroundColor: PropTypes.string,
  colorBodyText: PropTypes.string,
  borderColor: PropTypes.string,
  cancelButtonColor: PropTypes.string,
  cancelButtonTextColor: PropTypes.string,
  children: PropTypes.node,
  closeX: PropTypes.string,
  confirmButtonColor: PropTypes.string,
  confirmButtonTextColor: PropTypes.string,
  contentFontFamily: PropTypes.string,
  customStyle: PropTypes.object,
  headerBackgroundColor: PropTypes.string,
  headerPadding: PropTypes.string,
  titleColor: PropTypes.string,
  titleFontFamily: PropTypes.string,
  titleFontSize: PropTypes.string,
  top: PropTypes.string,
  modalCloseXSize: PropTypes.string
};

StyledModal.defaultProps = {
  bodyBackgroundColor: '',
  colorBodyText: '',
  borderColor: '',
  cancelButtonColor: '',
  cancelButtonTextColor: '',
  children: <div />,
  closeX: '',
  confirmButtonColor: '',
  confirmButtonTextColor: '',
  contentFontFamily: '',
  customStyle: null,
  headerBackgroundColor: '',
  headerPadding: '',
  titleColor: '',
  titleFontFamily: '',
  titleFontSize: '',
  top: '',
  modalCloseXSize: '16px'
};

export default StyledModal;
