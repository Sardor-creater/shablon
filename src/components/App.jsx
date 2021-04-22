import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Main from './main/Main';

const App = () => {
  
    return (
        <BrowserRouter>
        <Route path='/' component={Main} />
        </BrowserRouter>
    )
}

export default App;
