import React from 'react';
import PropTypes from 'prop-types';
import Affix from 'antd/lib/affix';
import { css } from '@emotion/core';

const StyledAffix = ({ customStyle, ...rest }) => {
  return (
    <span style={customStyle} className="styled-affix">
      <Affix {...rest} />
    </span>
  );
};

StyledAffix.propTypes = {
  customStyle: PropTypes.object
};

StyledAffix.defaultProps = {
  customStyle: null
};

export default StyledAffix;
