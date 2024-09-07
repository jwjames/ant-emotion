import { css } from '@emotion/core';

export default sliderColor => css`
  .ant-slider-handle {
    z-index: 2;
    opacity: 0.00001;
    margin-left: -17px;
    margin-top: -15px;
    width: 34px;
    height: 34px;
  }
  .ant-slider-rail {
    background-color: #cfcfcf;
  }
  .ant-slider-track {
    background-color: ${sliderColor};
  }
  .ant-slider:hover .ant-slider-track {
    background-color: ${sliderColor};
  }
  .ant-slider:hover .ant-slider-rail {
    background-color: #cfcfcf;
  }
  .ant-slider-dot {
    border-color: #cfcfcf;
    background-color: #cfcfcf;
  }
  .ant-slider-dot.ant-slider-dot-active {
    border-color: ${sliderColor};
    background-color: ${sliderColor};
  }
  .unselected-slider .ant-slider-dot.ant-slider-dot-active {
    border-color: #cfcfcf;
    background-color: #cfcfcf;
  }
  .unselected-slider .ant-slider-track {
    background-color: transparent;
  }
  .unselected-slider .ant-slider:hover .ant-slider-track {
    background-color: transparent;
  }
`;
