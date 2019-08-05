import React from 'react';
import logo from './logo.svg';
import './App.css';

import DraggableElement from './components/draggable-element/draggable-element';


function App() {
  return (
    <div className="App">
      <h2>Draggable Element Cover</h2>

      <DraggableElement
          title={`Click here to move`}
          width={`400`}
          height={`250`}
          top={`150`}
          left={`200`}
        >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </DraggableElement>

    </div>
  );
}

export default App;
