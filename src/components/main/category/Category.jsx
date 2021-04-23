import React from 'react'
import './category.css'

const Category = (props) => {
    const user = props.user;
   
    return (
        <div>
            {user.login}
        </div>
    )
}

export default Category;