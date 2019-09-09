import React from 'react';
import { storiesOf } from '@storybook/react';
import '../ante/Global/antStyles.css';
import Button from '../ante/Button';
import TextArea from '../ante/TextArea';

storiesOf('Button', module)
  .add('with text', () => <Button>Hello Button</Button>)
  .add('with red background', () => <Button backgroundColor="red">Hello Button</Button>);

storiesOf('TextArea', module).add('Basic', () => <TextArea />);
