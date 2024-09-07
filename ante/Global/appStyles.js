import { css } from '@emotion/core';

export default ({
  colorBodyText,
  campaignHeaderTextColor,
  statsColor1,
  statsColor2,
  bodyFontFamily,
  headlineFontFamily,
  headerIconColor,
  postGridContainerHeaderFontFamily,
  stickyButtonBackgroundColor,
  buttonBackgroundColor,
  bodyBackgroundColor,
  bodyFontWeight,
  headlineFontWeight,
  headlineFontStyle,
  headlineFontSize,
  anchorColor
}) => {
  return css`
    .christmas:before {
      display: none !important;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-weight: 600;
    }
    * {
      box-sizing: border-box;
    }
    body {
      font-family: ${bodyFontFamily};
      background-color: ${bodyBackgroundColor};
      font-weight: 400;
      color: ${colorBodyText};
      margin: 0;
      text-rendering: geometricPrecision;
      -webkit-font-smoothing: antialiased;
      line-height: 1.618;
      font-size: 14.2px;
    }

    .header-icon {
      color: ${headerIconColor};
    }

    /* Maybe use this later to specify ButtonCta colors vs. regular buttons
    .button-cta {
      background-color: ${buttonBackgroundColor};
    } */

    header {
      font-family: ${headlineFontFamily};
      font-weight: ${headlineFontWeight};
      font-style: ${headlineFontStyle};
      color: rgba(0, 0, 0, 0.85);
      margin-bottom: 26px;
      line-height: 1.3;
    }
    header.largest {
      font-size: 56px;
    }
    header.large {
      font-size: 43px;
    }
    header.medium {
      font-size: 37px;
    }
    header.small {
      font-size: 20px;
      margin-bottom: 2px;
    }
    header.mini {
      font-size: 24px;
      margin-bottom: 6px;
    }
    header.stats-1 {
      color: ${statsColor1};
    }
    header.stats-1 + span.stats-1-text {
      color: ${colorBodyText};
    }
    header.stats-2 {
      color: ${statsColor2};
    }
    header.stats-2 + span.stats-2-text {
      color: ${colorBodyText};
    }
    header.campaign {
      color: ${campaignHeaderTextColor};
      font-size: ${headlineFontSize};
      margin-bottom: 2px;
    }
    a,
    a:active,
    a:hover,
    a:focus {
      color: ${anchorColor}
    }
    a:active,
    a:hover,
    a:focus {
      outline: 0;
      text-decoration: none;
    }
    p {
      margin-bottom: 0.8em;
    }
    hr {
      border: 0;
      border-bottom: 1px solid #d9d9d9;
    }
    .underlined {
      text-decoration: underline;
    }
    input[type='number']::-webkit-inner-spin-button,
    input[type='number']::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    @media (max-width: 992px) {
      .desktop-only {
        display: none !important;
      }
    }
    @media (min-width: 992px) {
      .mobile-only {
        display: none !important;
      }
    }
    @media (min-width: 1px) {
      .mobile-container .ant-layout-content .desktop-only {
        display: none !important;
      }

      .mobile-container .ant-layout-content .mobile-only {
        display: inline-block !important;
      }
    }

    a.join-share-button {
      background-color: ${buttonBackgroundColor};
    }

    .page-container {
      background-color: ${bodyBackgroundColor}
    }

    .mobile-container .page-container {
      height: 100%;
      position: relative;
      -webkit-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
      overflow: hidden;
      border-radius: 0;
      font-family: ${bodyFontFamily};
      background-color: ${bodyBackgroundColor};
    }

    .mobile-container .page-container main.ant-layout-content.blurred {
      height: 100%;
    }

    .desktop-container {
      overflow: hidden;
    }

    .mobile-container {
      overflow: hidden;
    }
    .desktop-container .page-container {
      font-family: ${bodyFontFamily};
      font-weight: ${bodyFontWeight};
      background-color: ${bodyBackgroundColor};
      height: 100%;
      overflow: hidden;
      -webkit-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }

    .mobile-container .styled-affix {
      top: calc(100% - 64px) !important;
      right: 0 !important;
      left: 0 !important;
    }

    .mobile-container .ant-btn-lg {
      width: 100% !important;
    }

    .mobile-container .styled-affix button {
      border-radius: 0;
    }

    .mobile-container .ant-drawer-left.ant-drawer-open,
    .mobile-container .ant-drawer-right.ant-drawer-open {
      z-index: 999999;
      position: fixed;
    }

    .image-editor-image {
      z-index: 1;
    }
    .image-editor-frame {
      z-index: 2;
    }
    .post-grid-container header {
      font-family: ${postGridContainerHeaderFontFamily};
      margin-bottom: 28px;
      font-size: 14px;
      font-weight: 600;
      max-width: 100%;
      width: 990px;
      padding: 0 34px;
      display: inline-block;
      text-align: left;
    }
    @media (max-width: 992px) {
      .post-grid-container header {
        padding: 0 10px;
        max-width: 95%;
      }
    }
    .header-icon {
      color: ${headerIconColor};
    }
    .grid-item {
      margin: 0 2.6% 4.7%;
      width: 154px;
      height: 154px;
      display: inline-block;
    }
    .grid-item,
    .impact-thumb,
    .framed-photo {
      box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
    }
    @media (min-width: 768px) {
      .grid-item {
        margin: 0 1.2% 2.4%;
        width: 165px;
        height: 165px;
      }
    }
    .sticky button {
      width: 100%;
      height: 64px;
      border: 0;
      font-size: 17px;
      background: ${stickyButtonBackgroundColor};
      color: white;
    }
    .sticky button.trans {
      border-top: 1px solid #d9d9d9;
      background: transparent;
      color: #4d4d4d;
    }
    .instagram-button {
      background: radial-gradient(circle farthest-corner at 35% 90%, #fec564, transparent 50%),
        radial-gradient(circle farthest-corner at 0 140%, #fec564, transparent 50%),
        radial-gradient(ellipse farthest-corner at 0 -25%, #5258cf, transparent 50%),
        radial-gradient(ellipse farthest-corner at 20% -50%, #5258cf, transparent 50%),
        radial-gradient(ellipse farthest-corner at 100% 0, #893dc2, transparent 50%),
        radial-gradient(ellipse farthest-corner at 60% -20%, #893dc2, transparent 50%),
        radial-gradient(ellipse farthest-corner at 100% 100%, #d9317a, transparent),
        linear-gradient(#6559ca, #bc318f 30%, #e33f5f 50%, #f77638 70%, #fec66d 100%);
    }

    .blurred {
      filter: blur(5px);
    }

    .builder-sidebar header {
      display: none;
    }

    .builder-sidebar {
      font-family: sans-serif !important;
    }

    .builder-sidebar .ant-tabs {
      /* color: rgb(155, 155, 155) !important; */
    }

    .builder-sidebar .ant-tabs-tab-btn-disabled {
      display: none;
    }

    .builder-sidebar .ant-tabs-prev {
      /* color: rgb(155, 155, 155) !important; */
    }

    .builder-sidebar .ant-tabs-next {
      /* color: rgb(155, 155, 155) !important; */
    }

    /* .builder-sidebar .anticon {
      fill: rgb(155, 155, 155);
    } */

    .builder-sidebar img {
      max-width: 100%;
    }

    .builder-sidebar textarea.ant-input {
      width: 100%;
      margin: auto;
      /* background-color: #32383f; */
      /* color: #c4cbd1; */
    }

    .builder-sidebar .ant-input-number {
      width: 100%;
      margin: auto;
      /* background-color: #32383f; */
      /* color: #c4cbd1; */
    }

    .builder-sidebar .ant-checkbox-wrapper {
      color: inherit;
    }
    .builder-sidebar .ant-tabs-tab-active {
      /* color: #d92c39; */
    }
    .builder-sidebar .ant-tabs-ink-bar {
      /* background-color: #d92c39; */
    }
    .builder-sidebar .ant-tabs-tab:hover {
      /* color: #d92c39; */
    }

    .builder-sidebar .ant-tabs-nav-scroll {
      text-align: center;
    }

    .builder-sidebar .ant-upload.ant-upload-drag {
      width: 100%;
      background-color: #fafafa !important;
      border: 1px solid #d9d9d9;
    }



    .builder-sidebar .upload-list-inline .ant-upload-list-item {
      float: left;
      width: 200px;
      margin-right: 8px;
    }
    .builder-sidebar .upload-list-inline .ant-upload-animate-enter {
      animation-name: uploadAnimateInlineIn;
    }
    .builder-sidebar .upload-list-inline .ant-upload-animate-leave {
      animation-name: uploadAnimateInlineOut;
    }

    #font-picker {
      position: relative;
      display: inline-block;
      width: 100%;
      box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
      font-size: 13px;
    }
    #font-picker * {
      box-sizing: border-box;
    }
    #font-picker p {
      margin: 0;
      padding: 0;
    }
    #font-picker button {
      color: inherit;
      font-size: inherit;
      background: none;
      border: 0;
      outline: none;
      cursor: pointer;
    }
    #font-picker .dropdown-button {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 35px;
      padding: 0 10px;
      background: #cbcbcb;
    }
    #font-picker .dropdown-button:hover,
    #font-picker .dropdown-button:focus {
      background: #bebebe;
    }
    #font-picker .dropdown-button .dropdown-font-name {
      overflow: hidden;
      white-space: nowrap;
    }
    #font-picker .dropdown-icon {
      margin-left: 10px;
    }
    @keyframes spinner {
      to {
        transform: rotate(360deg);
      }
    }
    #font-picker .dropdown-icon.loading::before {
      display: block;
      width: 10px;
      height: 10px;
      border: 2px solid #b2b2b2;
      border-top-color: #000000;
      border-radius: 50%;
      animation: spinner 0.6s linear infinite;
      content: '';
    }
    #font-picker .dropdown-icon.finished::before {
      display: block;
      width: 0;
      height: 0;
      margin: 0 2px;
      border-top: 6px solid #000000;
      border-right: 5px solid transparent;
      border-left: 5px solid transparent;
      transition: transform 0.3s;
      content: '';
    }
    #font-picker .dropdown-icon.error::before {
      content: '⚠';
    }
    #font-picker.expanded .dropdown-icon.finished::before {
      transform: rotate(-180deg);
    }
    #font-picker.expanded ul {
      max-height: 200px;
    }
    #font-picker ul {
      position: absolute;
      z-index: 1;
      width: 100%;
      max-height: 0;
      margin: 0;
      padding: 0;
      overflow-x: hidden;
      overflow-y: auto;
      background: #eaeaea;
      box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
      transition: 0.3s;
      -webkit-overflow-scrolling: touch;
    }
    #font-picker ul li {
      height: 35px;
      list-style: none;
    }
    #font-picker ul li button {
      display: flex;
      align-items: center;
      width: 100%;
      height: 100%;
      padding: 0 10px;
      white-space: nowrap;
    }
    #font-picker ul li button:hover,
    #font-picker ul li button:focus {
      background: #ddd;
    }
    #font-picker ul li button.active-font {
      background: #d1d1d1;
    }

    /* .fonts-container .ant-tabs-nav .ant-tabs-tab {
      padding-bottom: 8px;
    } */

    /* .upload-list-inline .ant-upload-list-item {
        float: left;
        width: 200px;
        margin-right: 8px;
    }
    .upload-list-inline .ant-upload-animate-enter {
      animation-name: uploadAnimateInlineIn;
    }
    .upload-list-inline .ant-upload-animate-leave {
      animation-name: uploadAnimateInlineOut;
    } */

    .styling-container .ant-tabs-nav .ant-tabs-tab {
      margin: 0 0 0 0;
    }

    .templateCardGrid:hover,
    .templateModalSVG:hover {
      box-shadow: 0 0 3px #D92C39 !important;
    }

  `;
};
