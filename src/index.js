import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/App';
import { defaultTheme } from './theme/default';
import { ThemeProvider } from 'styled-components';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);


