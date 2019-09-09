import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from 'antd/lib/input';

class StyledInput extends Component {
  checkCharCount = maxChars => {
    const val = this.props.value;
    return `${val.length} / ${maxChars}`;
  };

  render() {
    const { withCharCount, maxChars, ...rest } = this.props;

    const renderInput = () => {
      if (withCharCount) {
        return <Input {...rest} addonAfter={this.checkCharCount(maxChars)} />;
      } else {
        return (
          <span>
            <Input {...rest} />
          </span>
        );
      }
    };
    return <>{renderInput()}</>;
  }
}

StyledInput.propTypes = {
  withCharCount: PropTypes.bool,
  value: PropTypes.string,
  maxChars: PropTypes.number
};

StyledInput.defaultProps = {
  withCharCount: false
};

StyledInput.Group = Input.Group;

export default StyledInput;
