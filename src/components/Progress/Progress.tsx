import React, { useMemo } from 'react';

import './Progress.css';
import ProgressProps from './ProgressProps';

function Progress(props: ProgressProps) {
    const style = useMemo(() => {
        if (!props.value || props.value < 0) {
            return {width: '0%'};
        }

        if (props.value > 100) {
            return { width: '100%' };
        }

        return {width: `${props.value}%`};
    }, [props.value]);

    return (
        <div className="Progress">
            <div className="ProgressBar" style={style}/>
            {props.label && <span className="ProgressLabel">{props.value}%</span>}
        </div>
    )
}

Progress.defaultProps = {
    value: 0,
    label: false,
}
Progress.displayName = 'Progress';

export default Progress;