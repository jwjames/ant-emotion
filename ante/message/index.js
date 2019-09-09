// import React from 'react';
// import PropTypes from 'prop-types';
import message from 'antd/lib/message';
export default message;

// NOTE: Ant's "message" component is actually a function call. This needs some work, but it's the
// only way to customize it. DO NOT DELETE.

/* const StyledMessageConstructor = ({
  content,
  duration,
  onClose,
  icon,
  type,
  getContainer,
  maxCount,
  top,
  ...rest
}) => {
  const typeCheck = (content, duration, onClose, icon, type, getContainer, maxCount, top) => {
    switch (type) {
      case 'success': {
        return message.success(content, duration, onClose, icon);
      }
      case 'error': {
        return message.error(content, duration, onClose, icon);
      }
      case 'info': {
        return message.info(content, duration, onClose, icon);
      }
      case 'warning': {
        return message.warning(content, duration, onClose, icon);
      }
      case 'warn': {
        return message.warn(content, duration, onClose, icon);
      }
      case 'loading': {
        return message.loading(content, duration, onClose, icon);
      }
      case 'config': {
        return message.config(duration, getContainer, maxCount, top);
      }
      default:
        null;
    }
  };
  return type === 'config' ? (
    typeCheck(duration, getContainer, maxCount, top)
  ) : (
    <span>{typeCheck(content, duration, onClose, icon, type)}</span>
  );
};

StyledMessageConstructor.propTypes = {
  content: PropTypes.node,
  duration: PropTypes.number,
  type: PropTypes.string,
  onClose: PropTypes.func,
  icon: PropTypes.node
};

const StyledMessage = {
  success: function({ content, duration, onClose }) {
    <StyledMessageConstructor
      content={content}
      duration={duration}
      onClose={onClose}
      type="success"
    />;
  },
  error: function({ content, duration, onClose }) {
    <StyledMessageConstructor
      content={content}
      duration={duration}
      onClose={onClose}
      type="error"
    />;
  },
  info: function({ content, duration, onClose }) {
    <StyledMessageConstructor
      content={content}
      duration={duration}
      onClose={onClose}
      type="info"
    />;
  },
  warning: function({ content, duration, onClose }) {
    <StyledMessageConstructor
      content={content}
      duration={duration}
      onClose={onClose}
      type="warning"
    />;
  },
  warn: function({ content, duration, onClose }) {
    this.warning(content, duration, onClose);
  },
  loading: function({ content, duration, onClose }) {
    <StyledMessageConstructor
      content={content}
      duration={duration}
      onClose={onClose}
      type="loading"
    />;
  },
  config: function({ duration, getContainer, maxCount, top }) {
    <StyledMessageConstructor
      duration={duration}
      getContainer={getContainer}
      maxCount={maxCount}
      top={top}
      type="config"
    />;
  }
};

// StyledMessage.propTypes = {
//   backgroundColor: PropTypes.string.isRequired,
//   fontFamily: PropTypes.string.isRequired,
//   textColor: PropTypes.string.isRequired
// };

export default StyledMessage;
 */
