import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'antd/lib/slider';
import { ClassNames, css } from '@emotion/core';

const StyledSlider = ({ customStyle, trackBackgroundColor, dotColor, ...rest }) => {
  const propStyles = css`
    .ant-slider-track {
      background-color: ${trackBackgroundColor};
    }
    .ant-slider:hover .ant-slider-track {
      background-color: ${trackBackgroundColor};
    }
    .ant-slider-dot.ant-slider-dot-active {
      border-color: ${dotColor};
      background-color: ${dotColor};
    }
  `;
  return (
    <ClassNames>
      {({ css }) => <Slider className={css([propStyles, customStyle])} {...rest} />}
    </ClassNames>
  );
};

StyledSlider.propTypes = {
  customStyle: PropTypes.object,
  trackBackgroundColor: PropTypes.string,
  dotColor: PropTypes.string
};
StyledSlider.defaultProps = {
  customStyle: null,
  trackBackgroundColor: '',
  dotColor: ''
};

export default StyledSlider;
