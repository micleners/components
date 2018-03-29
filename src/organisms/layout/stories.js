/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import React from 'react';
import {storiesOf} from '@storybook/react';
import any from '@travi/any';
import Layout from './index';

storiesOf('Organisms/Layout', module)
  .add('default', () => <Layout sponsor={`${any.word()} ${any.word()}`} location={`${any.word()} ${any.word()}`} />)
  .add('with children', () => (
    <Layout sponsor={`${any.word()} ${any.word()}`} location={`${any.word()} ${any.word()}`}>
      Hello World
    </Layout>
  ));