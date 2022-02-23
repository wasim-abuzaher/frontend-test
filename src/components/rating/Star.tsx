import React from 'react';

interface StarProps {
    fill: 'full' | 'half' | 'none';
}

const Star: React.FC<StarProps> = ({ fill }) => {
    return (
        <svg
            width='20'
            height='20'
            viewBox='0 0 20 20'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <defs>
                <linearGradient id='half'>
                    <stop offset='50%' stopColor='#002b56' />
                    <stop offset='50%' stopColor='#fff' stopOpacity='1' />
                </linearGradient>
            </defs>
            <path
                d='M9.9983 1.56627L12.2915 7.71474L12.4128 8.04001H12.76H18.264L13.5593 11.5805L13.2582 11.8071L13.3931 12.159L15.6321 17.9991L10.3 14L9.99954 13.7747L9.69942 14.0004L4.38347 17.9993L6.60727 12.1579L6.74103 11.8066L6.44064 11.5805L1.73594 8.04001H7.21999H7.56627L7.68805 7.71585L9.9983 1.56627Z'
                stroke='#002B56'
                fill={
                    fill === 'full'
                        ? '#002b56'
                        : fill === 'half'
                        ? 'url(#half)'
                        : '#fff'
                }
            />
        </svg>
    );
};

export default Star;
