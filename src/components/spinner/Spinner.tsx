import React from 'react';
import classes from './Spinner.module.css';

const Spinner: React.FC = () => {
    return (
        <div className={classes.ring}>
            <div />
            <div />
            <div />
            <div />
        </div>
    );
};

export default Spinner;
