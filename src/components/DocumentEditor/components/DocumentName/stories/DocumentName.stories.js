import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import DocumentName from '../DocumentName';
import { action } from '@storybook/addon-actions';

storiesOf('DocumentEditor/components/DocumentName', module)
    .addDecorator(withKnobs)
    .add('Preview', () => {
        return <DocumentName name={text('name', 'Document')} onChange={action('onChange action fired')} />
    })
