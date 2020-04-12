// Global configuration
import { addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withState } from '@sambego/storybook-state';

addDecorator(withInfo);
addDecorator(withState());