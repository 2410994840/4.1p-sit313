import React from 'react';
import './App.css';
import Component2 from './Component2.js';
import Component3 from './Component3.js';
import Component4 from './Component4.js';
import Component5 from './Component5.js';
import Component6 from './Component6.js';
import './6.css';

const App = React.memo(() => {
  return (
    <div>
      <Component2 />
      <Component3 />
      <Component4 />
      <Component5 />
      <Component6 />
    </div>
  );
})

export default App;