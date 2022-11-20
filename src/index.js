import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import {SignIn} from './pages/SignIn';
import {SignUp} from './pages/SignUp';
import {ExerciseTypes} from './pages/ExerciseTypes';
import {MuscleSession} from './pages/MuscleSession';

import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';

import store from './store';


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/training-day/type" element={<ExerciseTypes/>} />
                <Route path="/training-day/:date/types/:type" element={<MuscleSession />}/>
            </Routes>
        </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
