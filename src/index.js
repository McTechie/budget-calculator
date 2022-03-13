import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { TrackerContextProvider } from './contexts/TrackerContext';
import { SpeechProvider } from '@speechly/react-client';

ReactDOM.render(
  <SpeechProvider appId='164f88e3-1e7e-4c15-81f0-73777dedaa40' language='en-US'>
    <TrackerContextProvider>
      <App />
    </TrackerContextProvider>
  </SpeechProvider>,
  document.getElementById('root')
);
