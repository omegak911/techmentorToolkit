import React from 'react';
import { render } from 'react-dom';
import App from './components/App';

import image from '../asset/HRLA26.jpg';

import './index.css'

render(<App image={image}/>, document.getElementById('root'));