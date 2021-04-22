import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCount } from '../reducers/newReducer';

const App = () => {
    const dispatch = useDispatch()
    const count = useSelector(state => state.new.count)

    function onNew() {
        dispatch(setCount(5))
    }

    return (
        <div>
            React App
            <h2>sds</h2>
            <button onClick={() => onNew()}>button</button>
            <div>{ count }</div>
        </div>
    )
}

export default App;
