import React from 'react';

import './Input.css';

function Input(props: any) {
    return <input {...props} />
}

Input.defaultProps = {
    type: 'text'
}
Input.displayName = 'Input';

export default Input;