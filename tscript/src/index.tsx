import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'jquery';
import "popper.js";
import 'bootstrap/dist/js/bootstrap.bundle.js';
import './App.css';
import Test from './components/Demo/Test';

ReactDOM.render(<Test msg="Hello"/>, document.getElementById('root'));