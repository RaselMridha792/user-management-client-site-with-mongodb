import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const UserDetails = () => {
    const loadedUsers = useLoaderData()
    const [users, setUsers] = useState(loadedUsers);


    const handleDeleteUser = (id) =>{
        console.log('deleted id is', id)
        fetch(`http://localhost:5000/users/${id}`, {
            method: "DELETE"
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.deletedCount>0){
                alert("deleted successfully")
                const remaining = users.filter(user => user._id !== id)
                setUsers(remaining);
            }
        })
    }

    return (
        <div>
            <h2>current users is: {users.length}</h2>
            {
                users.map(user => <p key={user._id}>{user.name} : {user.email} <button
                    className='btn' onClick={()=> handleDeleteUser(user._id)}>x</button> </p>)
            }
        </div>
    );
};

export default UserDetails;