import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import DeveloperStore from './store/DeveloperStore';

export const Context = createContext(null);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context.Provider value={
    {
      developer: new DeveloperStore(),
    }
  }>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Context.Provider>
);

