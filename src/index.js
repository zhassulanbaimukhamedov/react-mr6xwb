import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import List from './List';

//ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<h1>Footer</h1>, document.getElementById('footer'));
ReactDOM.render(<List />, document.getElementById('app'), function () {
  console.log('рендеринг элемента React');
});

function tick() {
  ReactDOM.render(
    <div>
      <h2>Текущее время {new Date().toLocaleTimeString()}.</h2>
    </div>,
    document.getElementById('header')
  );
}
setInterval(tick, 1000);
