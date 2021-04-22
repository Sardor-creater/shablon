import React from 'react'

const Category = (props) => {
    const user = props.user;
    console.log(user);
   
    return (
        <div>
            {user.login}
        </div>
    )
}

export default Category;