import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Rating from './components/rating/Rating';

ReactDOM.render(<Rating rating={4.5} />, document.getElementById('app-root'));
