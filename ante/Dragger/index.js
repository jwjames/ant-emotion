import React from 'react';
import PropTypes from 'prop-types';
import Upload from 'antd/lib/upload';
import StyledUpload from '../Upload';

const Dragger = Upload.Dragger;

const StyledDragger = ({ customStyle, children, ...rest }) => {
  return (
    <span css={customStyle}>
      <Dragger {...rest}>{children}</Dragger>
    </span>
  );
};

StyledDragger.propTypes = {
  customStyle: PropTypes.object,
  children: PropTypes.node
};

StyledUpload.defaultProps = {
  customStyle: null,
  children: ''
};

export default StyledDragger;
