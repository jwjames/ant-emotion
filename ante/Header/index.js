import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'antd/lib/layout';
import { ClassNames } from '@emotion/core';

const { Header } = Layout;

const StyledHeader = ({
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
        <Header className={css([propStyles, customStyle])} {...rest}>
          {children}
        </Header>
      )}
    </ClassNames>
  );
};

StyledHeader.propTypes = {
  backgroundColor: PropTypes.string,
  children: PropTypes.node,
  customStyle: PropTypes.object,
  textColor: PropTypes.string,
  fontFamily: PropTypes.string
};

StyledHeader.defaultProps = {
  backgroundColor: '',
  children: '',
  customStyle: null,
  textColor: '',
  fontFamily: ''
};

export default StyledHeader;
