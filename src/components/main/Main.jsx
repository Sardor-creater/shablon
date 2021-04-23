import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getCat, setFilter } from '../../redux/reducers/newReducer';
import { userSuperSelector } from '../../selectors/selectors';
import Category from './category/Category';
import './main.css';

const Main = () => {
    const dispatch = useDispatch()
    const users = useSelector(userSuperSelector)
    const value = useSelector(state => state.new.value)
    const isFetching = useSelector(state => state.new.isFetching)
    
    function onCB(){
        dispatch(setFilter())
    }

    useEffect(() => {
        dispatch(getCat())
    }, [])

    useEffect(() => {
        console.log('new users');
    }, [users])

    console.log('render');
   
    return (
        <div className='categories'>
            {isFetching === false ? users.map(user => <Category user={user} />) : <div>loader</div>}
            <b>{value}</b>
            <button onClick={()=> onCB()}>onsdas</button>
        </div>
    )
}

export default Main;