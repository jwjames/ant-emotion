import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from 'antd/lib/checkbox';
import { ClassNames, css } from '@emotion/core';

const StyledCheckbox = ({
  checkedBackgroundColor,
  // chevron,
  customStyle,
  size,
  uncheckedBackgroundColor,
  uncheckedBorderColor,
  ...rest
}) => {
  const propStyles = css`
    .ant-checkbox-wrapper:hover .ant-checkbox-inner,
    .ant-checkbox:hover .ant-checkbox-inner,
    .ant-checkbox-input:focus + .ant-checkbox-inner {
      border-color: ${checkedBackgroundColor};
    }
    .ant-checkbox-checked .ant-checkbox-inner {
      background-color: ${checkedBackgroundColor};
      border-color: ${checkedBackgroundColor};
    }
    .ant-checkbox-inner {
      background-color: ${uncheckedBackgroundColor};
      border: 1px solid ${uncheckedBorderColor};
      height: ${size};
      width: ${size};
    }
  `;
  return (
    <ClassNames>
      {({ css }) => <Checkbox className={css([propStyles, customStyle])} {...rest} />}
    </ClassNames>
  );
};

StyledCheckbox.propTypes = {
  checkedBackgroundColor: PropTypes.string,
  chevron: PropTypes.string,
  customStyle: PropTypes.object,
  size: PropTypes.string,
  uncheckedBackgroundColor: PropTypes.string,
  uncheckedBorderColor: PropTypes.string
};

StyledCheckbox.defaultProps = {
  checkedBackgroundColor: '',
  chevron: '',
  customStyle: null,
  size: '',
  uncheckedBackgroundColor: '',
  uncheckedBorderColor: ''
};

export default StyledCheckbox;
