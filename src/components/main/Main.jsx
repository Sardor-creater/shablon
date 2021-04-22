import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getCat } from '../actions/repos';
import Category from './category/Category';

const Main = () => {
    const dispatch = useDispatch()
    const users = useSelector(state => state.new.users)
    console.log(users);

    useEffect(() => {
        dispatch(getCat())
    }, [])
   
    return (
        <div>
            {
                users.map(user =>
                    <Category user={user} />
                    )
            }
        </div>
    )
}

export default Main;