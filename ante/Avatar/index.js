import React from 'react';
import PropTypes from 'prop-types';
import Avatar from 'antd/lib/avatar';

const StyledAvatar = ({ customStyle, ...rest }) => {
  return <Avatar {...rest} />;
};

StyledAvatar.propTypes = {
  customStyle: PropTypes.object
};

StyledAvatar.defaultProps = {
  customStyle: null
};

export default StyledAvatar;
