import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number } from '@storybook/addon-knobs';
import SelectionStatus from '..';

storiesOf('DocumentEditor/components/SelectionStatus', module)
    .addDecorator(withKnobs)
    .add('Preview', () => {
        return <SelectionStatus line={number('line', 1)} column={number('column', 10)} />
    });