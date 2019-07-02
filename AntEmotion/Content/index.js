import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'antd/lib/layout';
import { ClassNames } from '@emotion/core';

const { Content } = Layout;

const StyledContent = ({
  backgroundColor,
  children,
  customStyle,
  textColor,
  fontFamily,
  ...rest
}) => {
  const propStyles = {
    color: textColor,
    backgroundColor,
    fontFamily
  };
  return (
    <ClassNames>
      {({ css }) => (
        <Content className={css([propStyles, customStyle])} {...rest}>
          {children}
        </Content>
      )}
    </ClassNames>
  );
};

StyledContent.propTypes = {
  backgroundColor: PropTypes.string,
  children: PropTypes.node,
  customStyle: PropTypes.object,
  textColor: PropTypes.string,
  fontFamily: PropTypes.string
};

StyledContent.defaultProps = {
  backgroundColor: '',
  children: '',
  customStyle: null,
  textColor: '',
  fontFamily: ''
};

export default StyledContent;
