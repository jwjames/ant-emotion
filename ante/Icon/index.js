import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'antd/lib/icon';

const StyledIcon = ({ customStyle, className, ...rest }) => {
  return (
    <span className={className}>
      <Icon {...rest} />
    </span>
  );
};

StyledIcon.propTypes = {
  customStyle: PropTypes.object
};

StyledIcon.defaultProps = {
  customStyle: null
};

export default StyledIcon;

{
  /* <Icon
                type={dashboard ? 'ellipsis' : 'question-circle-o'}
                style={{
                  fontSize: iconSize
                  // color: campaign.colorHeade/rIcon
                }}
              /> */
}
