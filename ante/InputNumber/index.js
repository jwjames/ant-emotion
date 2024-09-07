import React from 'react';
import PropTypes from 'prop-types';
import InputNumber from 'antd/lib/input-number';

const StyledInputNumber = ({ customStyle, ...rest }) => {
  return (
    <span css={customStyle}>
      <InputNumber {...rest} />
    </span>
  );
};

StyledInputNumber.propTypes = {
  customStyle: PropTypes.object,
  children: PropTypes.node
};

StyledInputNumber.defaultProps = {
  customStyle: null,
  children: ''
};

export default StyledInputNumber;
