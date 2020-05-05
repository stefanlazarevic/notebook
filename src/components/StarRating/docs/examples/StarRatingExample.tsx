import React, { useState } from 'react';

import StarRating from '../../StarRating';

export default function StarRatingExample() {
    const [rate, setRate] = useState(0);

    function onChange(event: React.ChangeEvent, rate: number) {
        setRate(rate);
    }

    return <StarRating id="StarRatingExample" rate={rate} onChange={onChange} />
}