import React from 'react';
import PropTypes from 'prop-types';
import Upload from 'antd/lib/upload';

const StyledUpload = ({ customStyle, children, ...rest }) => {
  return (
    <span css={customStyle}>
      <Upload {...rest}>{children}</Upload>
    </span>
  );
};

StyledUpload.propTypes = {
  customStyle: PropTypes.object,
  children: PropTypes.node
};

StyledUpload.defaultProps = {
  customStyle: null,
  children: ''
};

export default StyledUpload;
