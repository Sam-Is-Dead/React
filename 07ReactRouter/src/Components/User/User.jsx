import React from 'react'
import { useParams } from 'react-router-dom';

function User() {
const { id } = useParams();
return (
    <div className='bg-white py-16 text-center text-2xl font-semibold'>
        User Component: {id}
    </div>
)
}

export default User
