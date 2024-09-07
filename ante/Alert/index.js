import React from 'react';
import PropTypes from 'prop-types';
import { ClassNames, css } from '@emotion/core';
import Alert from 'antd/lib/alert';

const StyledAlert = ({ customStyle, descriptionFontFamily, messageFontFamily, ...rest }) => {
  const propStyles = css`
    .ant-alert-message {
      font-family: ${messageFontFamily};
    }
    .ant-alert-description {
      font-family: ${descriptionFontFamily};
    }
  `;
  return (
    <ClassNames>
      {({ css }) => <Alert className={css([propStyles, customStyle])} {...rest} />}
    </ClassNames>
  );
};

StyledAlert.propTypes = {
  customStyle: PropTypes.object,
  messageFontFamily: PropTypes.string,
  descriptionFontFamily: PropTypes.string
};

StyledAlert.defaultProps = {
  customStyle: null,
  messageFontFamily: '',
  descriptionFontFamily: ''
};

export default StyledAlert;
