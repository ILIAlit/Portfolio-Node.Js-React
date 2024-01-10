import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import DeveloperStore from './store/DeveloperStore';
import AdminStore from './store/AdminStore';
import ProjectStore from './store/ProjectStore';
import PhotoStore from './store/PhotoStore';


export const Context = createContext(null);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context.Provider value={
    {
      admin: new AdminStore(),
      developer: new DeveloperStore(),
      project: new ProjectStore(),
      photo: new PhotoStore(),
    }
  }>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Context.Provider>
);

