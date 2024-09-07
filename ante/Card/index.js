import React from 'react';
import PropTypes from 'prop-types';
import Card from 'antd/lib/card';
import Icon from '@ante/Icon';
import { ClassNames, css } from '@emotion/core';

const StyledCard = ({
  backgroundColor,
  customStyle,
  fontFamily,
  textColor,
  loading,
  gridData,
  gridStyle,
  gridClassName,
  ...rest
}) => {
  const propStyles = css`
    .ant-card {
      background: ${backgroundColor};
    }
    .ant-card-head {
      color: ${textColor};
      font-family: ${fontFamily};
    }
    .ant-card-body {
      color: ${textColor};
      font-family: ${fontFamily};
    }
  `;
  if (loading) {
    return (
      <ClassNames>
        {({ css }) => (
          <Card className={css([propStyles, customStyle])} {...rest}>
            <div
              style={{
                width: '100%',
                textAlign: 'center'
              }}
            >
              <Icon type="loading" style={{ fontSize: 50 }} />
            </div>
          </Card>
        )}
      </ClassNames>
    );
  }

  if (gridData) {
    return (
      <ClassNames>
        {({ css }) => (
          <Card className={css([propStyles, customStyle])} {...rest}>
            {gridData.map(datum => (
              <Card.Grid
                key={datum.title}
                style={gridStyle}
                className={gridClassName}
                onClick={datum.onClick}
              >
                {datum.title}
                {datum.content}
              </Card.Grid>
            ))}
          </Card>
        )}
      </ClassNames>
    );
  }

  return (
    <ClassNames>
      {({ css }) => <Card className={css([propStyles, customStyle])} {...rest} />}
    </ClassNames>
  );
};

StyledCard.propTypes = {
  backgroundColor: PropTypes.string,
  customStyle: PropTypes.object,
  fontFamily: PropTypes.string,
  textColor: PropTypes.string,
  loading: PropTypes.bool,
  gridData: PropTypes.array,
  gridStyle: PropTypes.object,
  gridClassName: PropTypes.string
};

StyledCard.defaultProps = {
  backgroundColor: '',
  customStyle: null,
  fontFamily: '',
  textColor: '',
  loading: false
};

export default StyledCard;
