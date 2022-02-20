import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Button from './components/button/Button';

ReactDOM.render(
    <Button onClick={() => console.log('click')} variant={'outlined'} disabled>
        Restaurant
    </Button>,
    document.getElementById('app-root')
);
