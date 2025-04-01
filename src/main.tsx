import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import './index.css';
import { Toaster } from 'react-hot-toast';
import { App } from './App';
import { DogProvider } from './Providers/DogProvider';
import { UIProvider } from './Providers/UIProvider';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UIProvider>
      <DogProvider>
        <Toaster />
        <App />
      </DogProvider>
    </UIProvider>
  </React.StrictMode>
);
