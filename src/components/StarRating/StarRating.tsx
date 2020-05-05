import React from 'react';

import './StarRating.css';

import Star from './components/Star';

function StarRating(props: any) {
    return (
        <div id={props.id} className="StarRating">
            {
                [5, 4, 3, 2, 1].map((rate: number) => {
                    return <Star id={`${props.id}-${rate}`} name={props.id} rate={rate} checked={rate === props.rate} onChange={props.onChange} />
                })
            }
        </div>
    )
}

StarRating.defaultProps = {
    rate: 0
};

StarRating.displayName = 'StarRating';

export default StarRating;