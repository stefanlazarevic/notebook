import React from 'react';

import { storiesOf } from '@storybook/react';
import { number, withKnobs } from '@storybook/addon-knobs';

import ZoomStatus from '../ZoomStatus';

storiesOf('DocumentEditor/components/ZoomStatus', module)
    .addDecorator(withKnobs)
    .add('Preview', () => {
        return (
            <ZoomStatus zoom={number('zoom', 100)} />
        )
    })