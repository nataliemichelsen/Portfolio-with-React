import React from 'react';
import ReactDom from 'react-dom';
import App from './App';

// index css & footer
import './index.css';
import Footer from './components/footer';

ReactDom.render([<App key='1' />, <Footer key='2' />], document.getElementById('root'));