import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'antd/lib/date-picker';
import { css } from '@emotion/styled';
// import { ClassNames } from '@emotion/core';

const StyledDatePicker = ({ className, customStyle, ...rest }) => (
  <DatePicker className={className} css={customStyle} {...rest} />
);

StyledDatePicker.propTypes = {
  customStyle: PropTypes.object,
  className: PropTypes.string
};

StyledDatePicker.defaultProps = {
  customStyle: null
};

export default StyledDatePicker;
