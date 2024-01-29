import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { ValentinesPage } from './pages/ValentinesPage';
import { Landing } from './pages/Landing';
import { YesPage } from './pages/YesPage';
import NoPage from './pages/NoPage';
import { Routes } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <Routes>
        <Route path="/lovemeplease" element={<ValentinesPage/>} />
        <Route path="/happy6months" element={<Landing/>} />
        <Route path="/yesyesyes" element={<YesPage/>} />
        <Route path="/doYouMeanIt" element={<NoPage/>} />
      </Routes> */}
        
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
