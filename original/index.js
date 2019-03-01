import React from 'react';
import ReactDOM from 'react-dom';

const root = document.getElementById('root');
const title = (
    <div className="workshop-js">
        <h1 className="workshop-js__title">Workshop de js!</h1>
        <div className="item">Iphone 32 GB Negro</div>
        <div className="item">Iphone 64 GB Negro</div>
        <div className="item">Iphone 32 GB Blanco</div>
    </div>
);

ReactDOM.render(title, root);