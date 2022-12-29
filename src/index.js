import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import Calendar from './pages/Calendar/Calendar';
import {SignIn} from './pages/SignIn';
import {SignUp} from './pages/SignUp';

import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';

import store from './store';
import Spendings from './pages/Spendings/Spendings';


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/spendings" element={<Spendings />} />
            </Routes>
        </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
