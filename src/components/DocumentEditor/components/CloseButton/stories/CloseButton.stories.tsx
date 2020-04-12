import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import CloseButton from '../CloseButton';

storiesOf('DocumentEditor/components/CloseButton', module)
    .add('Preview', () => {
        return <CloseButton onClick={action('onClick event fired')} />
    })