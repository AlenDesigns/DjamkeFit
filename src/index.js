

import './sass/main.scss';

import React from 'react';
import ReactDOM from 'react-dom';

class Home extends React.Component {

 render() {
  return (
   <div>
    React!
   </div>
  )
 }

}

ReactDOM.render(
 <Home />,
 document.getElementById('root')
)
