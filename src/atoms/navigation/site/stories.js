/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import React from 'react';
import {storiesOf} from '@storybook/react';
import storyRouter from 'storybook-router';
import {linkTo} from '@storybook/addon-links';
import SiteNavigation from './component';

storiesOf('Atoms/Navigation/Site Navigation', module)
  .addDecorator(storyRouter({
    '/': linkTo('Atoms/Logo', 'default'),
    '/archive': linkTo('Organisms/Archive', 'default')
  })).add('default', () => <SiteNavigation />);
