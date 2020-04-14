import React from 'react';
import './App.css';
import MainContainer from './containers/MainContainer';
import { createProvider } from './context/Index';
const Provider = createProvider({})

function App() {
  return (
    <Provider>
      <div className="App">
        <MainContainer/>
      </div>
    </Provider>
  );
}

export default App;
