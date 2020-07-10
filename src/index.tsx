import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ThreadService } from './ThreadService';
import { ChatContext } from './ChatContext';

const chat = new ThreadService();

ReactDOM.render(
  <ChatContext.Provider value={chat}>
    <App />
  </ChatContext.Provider>
  , document.getElementById('root'));

