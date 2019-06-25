import React from 'react';
import { render } from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/jquery/dist/jquery.min.js';
import '../node_modules/popper.js/dist/popper.js';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import './main.css';

import Model from './Components/Lightbox1/Model';

render(<Model />, document.getElementById('app'));