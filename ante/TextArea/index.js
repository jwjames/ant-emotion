import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from 'antd/lib/input';

const { TextArea } = Input;

class StyledTextArea extends Component {
  checkCharCount = maxChars => {
    const val = this.props.value;

    if (!val) {
      return `0 / ${maxChars}`;
    }
    if (val.length > maxChars) {
      return (
        <span style={{ color: 'red' }}>
          {val.length} / {maxChars}
        </span>
      );
    }
    return `${val.length} / ${maxChars}`;
  };

  render() {
    const { withCharCount, maxChars, ...rest } = this.props;

    const renderTextArea = () => {
      if (withCharCount) {
        return (
          <>
            <TextArea {...rest} />
            <br />
            <span style={{ float: 'right' }}>{this.checkCharCount(maxChars)}</span>
          </>
        );
      } else {
        return (
          <span>
            <TextArea {...rest} />
          </span>
        );
      }
    };
    return <>{renderTextArea()}</>;
  }
}

StyledTextArea.propTypes = {
  withCharCount: PropTypes.bool,
  value: PropTypes.string,
  maxChars: PropTypes.number
};

StyledTextArea.defaultProps = {
  withCharCount: false
};

export default StyledTextArea;
