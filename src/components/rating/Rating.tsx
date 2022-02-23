import React from 'react';
import Star from './Star';
import classes from './Rating.module.css';

interface RatingProps {
    rating: 0 | 0.5 | 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 4.5 | 5;
}

const Rating: React.FC<RatingProps> = ({ rating = 0 }) => {
    return (
        <div className={classes.rating}>
            <Star
                fill={rating === 0 ? 'none' : rating === 0.5 ? 'half' : 'full'}
            />
            <Star
                fill={rating <= 1 ? 'none' : rating === 1.5 ? 'half' : 'full'}
            />
            <Star
                fill={rating <= 2 ? 'none' : rating === 2.5 ? 'half' : 'full'}
            />
            <Star
                fill={rating <= 3 ? 'none' : rating === 3.5 ? 'half' : 'full'}
            />
            <Star
                fill={rating <= 4 ? 'none' : rating === 4.5 ? 'half' : 'full'}
            />
        </div>
    );
};

export default Rating;
