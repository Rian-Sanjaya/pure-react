import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Parent from './counter';
import CountingParent from './CountingParent';

const Page = () => (
    // a test that prove each component has its own state 
    <div>
        <CountingParent />
        <CountingParent />
        <CountingParent />
    </div>
);

ReactDOM.render(<Page />, document.getElementById('root'));

