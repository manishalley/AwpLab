import React from 'react';
import ReactDOM from 'react-dom/client'; 
import C1 from './c1';
import C2 from './c2';
import C3 from './c3';
import C4 from './c4';
import C5 from './c5';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <C1 />
    <C2 />
    <C3 />
    <C4 n="Manish" r={6601}/>
    <C5 s="Male" c="CVR College Of Engineering"/>
  </React.StrictMode>
);