import React from 'react';

import './Star.css';

import StarProps from './StarProps';

function Star(props: StarProps) {
    function onChange(event: React.ChangeEvent) {
        if (typeof props.onChange === 'function') {
            props.onChange(event, props.rate);
        }
    }

    return (
        <>
            <input type="radio" name={props.name} id={props.id} checked={props.checked} onChange={onChange} />
            <label htmlFor={props.id} className="Star" />
        </>
    )
}

Star.defaultProps = {};
Star.displayName = 'Star';

export default Star;